export default class Component {
    get $template() {
        return this._$template;
    }

    set $template(template) {
        this._$template = template;
    }

    set $propertyChanged(b) {
        this._$propertyChanged = b;
    }

    get $propertyChanged() {
        return this._$propertyChanged;
    }

    $injectTag(tag) {
        this.tag = tag;
    }

    $render() {
        let template = this.$template;
        template = template.replace(/\[(\w)+\]/g, v => {
            const propertyName = v.substring(1, v.length - 1);
            return (this[propertyName]) ? this[propertyName].toString() : '';
        });
        return template;
    }
}
