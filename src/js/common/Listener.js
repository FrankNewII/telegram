import PropertyListener from "./PropertyListener";
import Emitter from "./Emitter";

export default class Listener extends Emitter {
    _parentsListenProperties(component, parent, listenProperties) {

        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => {
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

    _parentsPropertiesData(instance, parent, listenProperties, defaultParams) {
        const objectData = {};
        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => objectData[childrenProperty] = parent[parentProperty]);
        instance.inputs = Object.assign({}, defaultParams, objectData);
    }

    _addPropertyListener(component, childrenPropertyName, parentPropertyName) {
        return component['$listeners' + parentPropertyName] = new PropertyListener(component, childrenPropertyName, parentPropertyName);
    }

}

