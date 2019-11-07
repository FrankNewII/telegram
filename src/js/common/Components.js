import DI from "./DI";
import Listener from "./Listener";
import PrototypeComponent from "./PrototypeComponent";

class Components extends Listener {
    constructor() {
        super();
        this.components = new Map();
    }

    build(klass, tag, parent) {
        if (!klass.name) throw new Error('PrototypeComponent must have property "name"');

        if (!klass instanceof PrototypeComponent) throw new Error('PrototypeComponent should inherit PrototypeComponent or implement his interface');

        const instance = new klass();

        this._prepareDom(instance, klass, tag)
            ._injectDependencies(klass, instance)
            ._bindInputs(klass, tag, instance)
            ._bidOutputs(klass, parent, instance, tag);

        if (instance.init) instance.init();
        instance.$render();
        if (klass.components) this._searchChildComponents(klass.components, instance, tag);

        return instance;
    }

    _searchChildComponents(components, instance, tag) {
        components.forEach(component => {
            const tags = tag.querySelectorAll(component.name);

            tags.forEach(t => this.build(component, t, instance));
        });
    }

    _injectDependencies(klass, instance) {
        const instances = [];

        for (let i = 0; i < klass.dependencies.length; i++) {
            instances.push(DI.get(klass.dependencies[i]));
        }

        instance.inject.call(instance, instances);

        return this;
    }

    _bindInputs(klass, tag, instance) {
        if (klass.inputs && parent) {
            const propertiesAliases = this.getBoundAttributes(tag, klass.inputs, false);
            this._parentsPropertiesData(instance, parent, propertiesAliases, klass.inputs);
            this._parentsListenProperties(instance, parent, propertiesAliases);
            instance._$properitesAliases = propertiesAliases;
            instance._$parent = parent;
        }

        return this;
    }

    _bidOutputs(klass, parent, instance, tag) {
        if (klass.outputs && parent) {
            const propertiesAliases = this.getBoundAttributes(tag, klass.outputs);
            this.parentsListenFunctions(instance, parent, propertiesAliases);
        }
    }

    _prepareDom(instance, klass, tag) {
        instance.$template = klass.template;
        instance.$init(tag);

        return this;
    }
}

const components = new Components();

export default components;
