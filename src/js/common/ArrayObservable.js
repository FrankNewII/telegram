export default class ArrayObservable {
    constructor(component, propertyName, componentPropertyName) {
        this.listeners = [];
        this.array = [];
        this.component = component;
        this.propertyName = propertyName;
        this.componentPropertyName = componentPropertyName;
    }

    add(component, fn) {
        this.listeners.push([component, fn]);
    }

    remove(component) {
        const idx = this.listeners.find(v => v[0] === component);

        if (idx !== -1) {
            this.listeners.splice(idx, 1);
        }

        if (!this.listeners.length) {
            const v = this.component['_$' + this.propertyName];
            delete this.component[this.propertyName];
            delete this.component['$listeners' + this.propertyName];
            this.component[this.propertyName] = v;
        }
    }

    update() {
        const propertyName = this.component['_$' + this.propertyName];
        const self = this;
        this.listeners.forEach( listener => listener[1].call(self, listener[0], propertyName, this.componentPropertyName));
    }

    push() {
        this.array.push.call(this.array, arguments);
    }
}
