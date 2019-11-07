export default class PrototypeComponent {
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

    $init(tag) {
        this.tag = tag;
        this.innerHtml = tag.innerHTML;
        console.log(this.innerHtml);
        this._$previousParsedtemplate = null;
    }

    $render() {
        if (this.$options && this.$options.compareTemplateBeforeInsert) {
            const parsedTemplate = this.$getParsedTemplate();
            if (parsedTemplate !== this._$previousParsedtemplate) {
                this.$updateView(this._$previousParsedtemplate = parsedTemplate);
            }
        } else {
            this.$updateView();
        }
    }

    $getParsedTemplate() {
        let template = this.$template;
        template = template.replace('[[insertComponent]]', this.innerHtml)
            .replace(/\[(\w)+\]/g, v => {
                const propertyName = v.substring(1, v.length - 1);
                return (this[propertyName]) ? this[propertyName].toString() : '';
            });
        return template;
    }

    $updateView(view = this.$getParsedTemplate()) {
        this._$previousParsedtemplate = this.tag.innerHTML = view;
    }
}
