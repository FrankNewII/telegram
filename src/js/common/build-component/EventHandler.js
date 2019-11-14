export default class EventHandler {
    appendEventsListeners(tag, listenEvents, instance) {
        Object.entries(listenEvents).forEach(([eventName, eventParams]) => {
            tag.addEventListener(eventName, (event) => this.callMethod(event, eventParams, instance, eventName));
        });
    }

    callMethod(event, testEventParams, instance, eventName) {
        event.stopPropagation();
        if (testEventParams.targets) {
            const idx = testEventParams.targets.indexOf(event.target.getAttribute('data-element-ref'));
            if (idx === -1) return;
        }
        if (testEventParams.method) instance[testEventParams.method](event);
        else if (instance[eventName]) instance[eventName](event);
    }
}
