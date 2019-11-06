import DI from "./DI";
import PropertyListener from "./PropertyListener";

class Components {
    constructor() {
        this.components = new Map();
    }

    add(component) {
        if (!component.name) throw new Error('Component must have property "name"');
        this.components.set(component, component);
    }

    get(component, tag, parent) {
        console.log(component);
        const instances = [];
        const klass = this.components.get(component);
        if (!klass) throw new Error('Component was not added');

        const instance = new klass();

        instance.$injectTag(tag);

        for (let i = 0; i < klass.dependencies.length; i++) {
            instances.push(DI.get(klass.dependencies[i]));
        }

        instance.$template = klass.template;
        instance.inject.call(instance, instances);

        if (klass.parentsProperties && parent) {
            this._parentsPropertiesData(instance, parent, klass.parentsProperties);
            this._parentsListenProperties(instance, parent, klass.parentsProperties);
        }


        if (instance.init) instance.init();
        tag.innerHTML = instance.$render();
        console.log(klass.components);
        if (klass.components) this._searchChildComponents(klass.components, instance, tag);

        return instance;
    }

    _searchChildComponents(components, instance, tag) {
        components.forEach(component => {
            const tags = tag.querySelectorAll(component.name);

            tags.forEach(t => this.get(component, t, instance));
        });
    }

    _parentsListenProperties(component, parent, listenProperties) {

        Object.keys(listenProperties).forEach(propertyName => {
            if (parent['$listeners' + propertyName]) {
                parent['$listeners' + propertyName].add(component);
            } else {
                const lastValue = parent[propertyName];

                Object.defineProperty(parent, propertyName, {
                    get: () => parent['_$' + propertyName],
                    set: newValue => {
                        parent['_$' + propertyName] = newValue;
                        parent['$listeners' + propertyName].update();
                    }
                });

                parent['_$' + propertyName] = lastValue;

                this._addPropertyListener(parent, propertyName).add(component);
            }
        });
    }

    _parentsPropertiesData(instance, parent, listenProperties) {
        const objectData = {};
        Object.keys(listenProperties).forEach(k => objectData[k] = parent[k]);
        instance.parentsProperties = objectData;
    }

    _addPropertyListener(component, propertyName) {
        return parent['$listeners' + propertyName] = new PropertyListener(component, propertyName);
    }

}

const components = new Components();

export default components;
