import DI from "./DI";

class Components {
    constructor() {
        this.components = new Map();
    }

    add(component) {
        if (!component.name) throw new Error('Component must have property "name"');
        this.components.set(component, component);
    }

    get(component, tag) {
        const instances = [];
        const klass = this.components.get(component);
        if (!klass) throw new Error('Component was not added');

        const instance = new klass(tag);


        for (let i = 0; i < klass.dependencies.length; i++) {
            instances.push(DI.get(klass.dependencies[i]));
        }

        instance.inject.call(instance, instances);

        if (instance.init) instance.init();
        tag.innerHTML = instance.render();
        return instance;
    }

}

const components = new Components();

export default components;
