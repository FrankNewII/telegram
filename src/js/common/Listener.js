import PropertyListener from "./PropertyListener";

export default class Listener {
    _parentsListenProperties(component, parent, listenProperties) {

        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => {
            console.log(childrenProperty, parentProperty);
            if (parent['$listeners' + parentProperty]) {
                parent['$listeners' + parentProperty].add(component);
            } else {
                const lastValue = parent[parentProperty];

                Object.defineProperty(parent, parentProperty, {
                    get: () => parent['_$' + parentProperty],
                    set: newValue => {
                        parent['_$' + parentProperty] = newValue;
                        parent['$listeners' + parentProperty].update();
                    }
                });

                parent['_$' + parentProperty] = lastValue;

                this._addPropertyListener(parent, childrenProperty, parentProperty).add(component);
            }
        });
    }

    _getBoundAttributes(tag, listenProperties) {
        const nameProperties = {};
        Object.keys(listenProperties).forEach(k => {
            const propertyName = tag.getAttribute(k + '|');

            if (propertyName) nameProperties[k] = propertyName;

        });
        return nameProperties;
    }

    _parentsPropertiesData(instance, parent, listenProperties) {
        const objectData = {};
        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => objectData[childrenProperty] = parent[parentProperty]);
        instance.inputs = objectData;
    }

    _addPropertyListener(component, childrenPropertyName, parentPropertyName) {
        debugger;
        return component['$listeners' + parentPropertyName] = new PropertyListener(component, childrenPropertyName, parentPropertyName);
    }

}

