export default class Component {
    get template() {
        return this._template;
    }

    set template(template) {
        this._template = template;
    }

    constructor(tag) {
        this.tag = tag;
        this._template = '';
    }

    render() {
        this.template;
    }
}
