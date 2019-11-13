import Observable from "../Observable";

export function addPropertyEventEmitter(component, propertyName, componentPropertyName) {
    return component['$listeners' + propertyName] = new Observable(component, propertyName, componentPropertyName);
}
