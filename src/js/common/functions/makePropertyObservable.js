import {addPropertyEventEmitter} from "./addPropertyEventEmitter";

export function makePropertyObservable(observableComponent, propertyName, observerComponent, listener, observerPropertyName) {
    if (observableComponent['$listeners' + propertyName]) {
        observableComponent['$listeners' + propertyName].add(observerComponent, listener);
    } else {
        const lastValue = observableComponent[propertyName];

        Object.defineProperty(observableComponent, propertyName, {
            get: () => observableComponent['_$' + propertyName],
            set: newValue => {
                observableComponent['_$' + propertyName] = newValue;
                observableComponent['$listeners' + propertyName].update();
            }
        });

        observableComponent['_$' + propertyName] = lastValue;

        addPropertyEventEmitter(observableComponent, propertyName, observerPropertyName).add(observerComponent, listener);
    }
}
