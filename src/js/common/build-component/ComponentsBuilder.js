import DI from "../DI";
import CheckerProperties from "./CheckerProperties";
import PrototypeComponent from "../PrototypeComponent";
import {Queue} from "../Queue";

class ComponentsBuilder extends CheckerProperties {
    constructor() {
        super();
        this.queue = new Queue();
        this.i = 0;
    }

    build(klass, tag, parent) {
        if (tag.inited) return;
        tag.inited = true;

        if (!klass.name) throw new Error('PrototypeComponent must have property "name"');

        if (!klass instanceof PrototypeComponent) throw new Error('PrototypeComponent should inherit PrototypeComponent or implement his interface');

        const instance = new klass();

        this._prepareDom(instance, klass, tag)
            ._injectDependencies(klass, instance)
            ._bindInputs(klass, tag, instance, parent)
            ._bindOutputs(klass, parent, instance, tag);

        if (instance.init) instance.init();
        instance.$render(tag);
        tag.component = instance;
        if (klass.listenEvents) this.appendEventsListeners(tag, klass.listenEvents, instance);
        if (klass.components) this._searchChildComponents(klass.components, instance, tag);
        while(this.queue.hasItems()) {
            const params = this.queue.get();
            this.build.apply(this, params);
            if (params[0].viewInited) instance.viewInited();
        }
        return instance;
    }

    rebuild(klass, tag, parent, parentClass, instance) {

        if (klass.components) this._searchChildComponents(klass.components, parentClass, tag);
        while(this.queue.hasItems()) {
            const params = this.queue.get();
            this.build.apply(this, params);
            if (params[0].viewInited) instance.viewInited();
        }
        return instance;
    }

    _searchChildComponents(components, instance, tag) {
        components.forEach(component => {
            const tags = tag.querySelectorAll(component.name);

            tags.forEach(t => this.queue.add([component, t, instance]));
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

    _bindInputs(klass, tag, instance, parent, doAddListeners = true) {
        if (klass.inputs && parent) {
            const propertiesAliases = this.getBoundAttributes(tag, klass.inputs, false);
            this._parentsPropertiesData(instance, parent, propertiesAliases, klass.inputs);
            doAddListeners && this._parentsListenProperties(instance, parent, propertiesAliases);
            instance._$properitesAliases = propertiesAliases;
            instance._$parent = parent;
        }

        return this;
    }

    _bindOutputs(klass, parent, instance, tag) {
        if (klass.outputs && parent) {
            const propertiesAliases = this.getBoundAttributes(tag, klass.outputs);
            this.parentsListenFunctions(instance, parent, propertiesAliases);
        }
    }

    _prepareDom(instance, klass, tag) {
        instance.$template = klass.template;
        instance.$init(tag, klass);

        return this;
    }
}

const components = new ComponentsBuilder();

export default components;
