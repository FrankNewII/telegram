import Observable from "../Observable";
import Emitter from "./Emitter";
import {addPropertyEventEmitter} from "../functions/addPropertyEventEmitter";

function updateChildrenProperties(c, v) {
    c.inputs[this.propertyName] = v;

    if(c.changesProperties) {
        c.changesProperties(this.propertyName);
    }
}
export default class CheckerProperties extends Emitter {
    _parentsListenProperties(component, parent, listenProperties) {

        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => {
            if (parent['$listeners' + parentProperty]) {
                parent['$listeners' + parentProperty].add(component, updateChildrenProperties);
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

                addPropertyEventEmitter(parent, parentProperty).add(component, updateChildrenProperties);
            }
        });
    }

    _parentsPropertiesData(instance, parent, listenProperties, defaultParams) {
        const objectData = {};
        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => objectData[childrenProperty] = parent[parentProperty]);
        instance.inputs = Object.assign({}, defaultParams, objectData);
    }


}

