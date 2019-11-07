export default class PropertyListener {
    constructor(component, childrenPropertyName, parentPropertyName) {
        this.listeners = [];
        this.component = component;
        this.childrenPropertyName = childrenPropertyName;
        this.parentPropertyName = parentPropertyName;
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
        console.log(this.parentPropertyName, this.component);
        const v = this.component['_$' + this.parentPropertyName];
        this.listeners.forEach( c => {
            c.inputs[this.childrenPropertyName] = v;

            if(c.changesProperties) {
                c.changesProperties();
            }
        });
    }
}
