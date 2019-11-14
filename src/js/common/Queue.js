export class Queue {
    constructor() {
        this.queue = [];
    }

    add(i) {
        this.queue.push(i);
    }

    get() {
        return this.queue.shift();
    }

    hasItems() {
        return !!this.queue.length;
    }
}
