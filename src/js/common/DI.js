class DependencyInjector {
    constructor() {
        this.services = new Map();
    }

    add(service) {
        this.services.set(service, {
            klass: service,
            instance: null
        });
    }

    get(service) {
        const inst = this.services.get(service);

        if (!inst) throw new Error('Instance was not added to DI');

        if (inst.instance) return inst.instance;

        if (!inst.klass.dependencies) {
            return inst.instance = new inst.klass;
        } else {
            const dependencies = [];

            for(let i = 0; i < inst.klass.dependencies.length; i++) {
                dependencies.push(this.get(inst.klass.dependencies[i]));
            }

            const instance = new inst.klass;
            inst.instance = instance;

            instance.inject.call(instance.inject, dependencies);

            return instance;
        }
    }
}

const DI = new DependencyInjector();

export default DI;
