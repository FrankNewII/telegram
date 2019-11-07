const noop = () => console.log('Event');
export default class Emitter {
    parentsListenFunctions(component, parent, listenEvents) {
        component.outputs = listenEvents;
        Object.entries(listenEvents).forEach(([childrenOutput, parentListener]) => {

            component.outputs[childrenOutput] = parentListener ? parent[parentListener].bind(parent) : noop;

        });
    }

    getBoundAttributes(tag, listenProperties, outputs = true) {
        const nameProperties = {};
        Object.keys(listenProperties).forEach(k => {
            const propertyName = tag.getAttribute(k + ( outputs ? '?' : '|' ));

            if (propertyName) nameProperties[k] = propertyName;

        });
        return nameProperties;
    }

}

