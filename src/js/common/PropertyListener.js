export default class PropertyListener {
    constructor(component, propertyName) {
        this.listeners = [];
        this.component = component;
        this.propertyName = propertyName;
    }

    add(component) {
        this.listeners.push(component);
    }

    remove(component) {
        const idx = this.listeners.indexOf(component);

        if (idx !== -1) {
            this.listeners.splice(idx, 1);
        }

        if (!this.listeners.length) {
            const v = this.component['_$' + this.propertyName];
            delete this.component[this.propertyName];
            this.component[this.propertyName] = v;
        }
    }

    update() {
        const v = this.component['_$' + this.propertyName];
        this.listeners.forEach( c => {
            c.parentsProperties[this.propertyName] = v;

            if(c.changesProperties) {
                c.changesProperties();
            }
        });
    }
}
