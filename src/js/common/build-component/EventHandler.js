export default class EventHandler {
    appendEventsListeners(tag, listenEvents, instance) {
        Object.entries(listenEvents).forEach(([eventName, eventParams]) => {
            tag.addEventListener(eventName, (event) => this.callMethod(event, eventParams, instance, event));
        });
    }

    callMethod(event, testEventParams, instance) {
        if (testEventParams.targets) {
            const idx = testEventParams.targets.indexOf(event.target.getAttribute('data-element-ref'));
            if (idx === -1) return;
        }
        instance[testEventParams.method](event);

    }
}
