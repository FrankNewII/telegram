import DI from "../DI";
import CheckerProperties from "./CheckerProperties";
import PrototypeComponent from "../PrototypeComponent";

class ComponentsBuilder extends CheckerProperties {
    build(klass, tag, parent) {
        if (!klass.name) throw new Error('PrototypeComponent must have property "name"');

        if (!klass instanceof PrototypeComponent) throw new Error('PrototypeComponent should inherit PrototypeComponent or implement his interface');

        const instance = new klass();

        this._prepareDom(instance, klass, tag)
            ._injectDependencies(klass, instance)
            ._bindInputs(klass, tag, instance, parent)
            ._bidOutputs(klass, parent, instance, tag);

        if (instance.init) instance.init();
        instance.$render();
        tag.component = instance;
        if (klass.listenEvents) this.appendEventsListeners(tag, klass.listenEvents, instance);
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

        if (klass.dependencies) {
            const instances = [];

            for (let i = 0; i < klass.dependencies.length; i++) {
                instances.push(DI.get(klass.dependencies[i]));
            }

            instance.dependencies = instances;
        }

        return this;
    }

    _bindInputs(klass, tag, instance, parent) {
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

const components = new ComponentsBuilder();

export default components;
