import Emitter from "./Emitter";
import {makePropertyObservable} from "../functions/makePropertyObservable";

function updateChildrenProperties(c, v) {
    c.inputs[this.componentPropertyName] = v;

    if (c.changesProperties) {
        c.changesProperties(this.componentPropertyName);
    }
}

export default class CheckerProperties extends Emitter {
    _parentsListenProperties(component, parent, listenProperties) {

        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => {
            makePropertyObservable(parent, parentProperty, component, updateChildrenProperties, childrenProperty);
        });
    }

    _parentsPropertiesData(instance, parent, listenProperties, defaultParams) {
        const objectData = {};
        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => objectData[childrenProperty] = parent[parentProperty]);
        instance.inputs = Object.assign({}, defaultParams, objectData);
        console.log(instance.inputs);
    }


}

