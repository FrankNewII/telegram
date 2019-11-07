import DI from "./DI";
import Listener from "./Listener";

class Components extends Listener {
    constructor() {
        super();
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

        if (klass.inputs && parent) {
            const propertiesAliases = this._getBoundAttributes(tag, klass.inputs);
            this._parentsPropertiesData(instance, parent, propertiesAliases);
            this._parentsListenProperties(instance, parent, propertiesAliases);
            instance._$properitesAliases = propertiesAliases;
            instance._$parent = parent;
            console.log(instance);
        }


        if (instance.init) instance.init();
        tag.innerHTML = instance.$render();
        if (klass.components) this._searchChildComponents(klass.components, instance, tag);

        return instance;
    }

    _searchChildComponents(components, instance, tag) {
        components.forEach(component => {
            const tags = tag.querySelectorAll(component.name);

            tags.forEach(t => this.get(component, t, instance));
        });
    }

}

const components = new Components();

export default components;
