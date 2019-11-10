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
        this.$tag = tag;
        this.innerHtml = tag.innerHTML;
        tag.innerHTML = '';
        this._$previousParsedtemplate = null;
    }

    $render() {
        if (this.$options && this.$options.compareTemplateBeforeInsert) {
            const parsedTemplate = this._$checkStructuralDirectives(this.$getParsedTemplate());


            if (parsedTemplate !== this._$previousParsedtemplate) {
                this.$updateView(this._$previousParsedtemplate = parsedTemplate);
            }

        } else {
            const parsedTemplate = this._$checkStructuralDirectives(this.$getParsedTemplate());
            this.$updateView(parsedTemplate);
        }
    }
 в
    $getParsedTemplate(template = this.$template, data = this) {
        return template.replace('[[insertComponent]]', this.innerHtml)
            .replace(/\[(\w)+\]/g, v => {
                const propertyName = v.substring(1, v.length - 1);
                return (data[propertyName] !== undefined) ? data[propertyName] : v;
            });;
    }

    $updateView(view) {
        this.$tag.innerHTML = view;
        this._$previousParsedtemplate = view;
    }

    _$checkStructuralDirectives(html) {
        const template = document.createElement('div');
        template.innerHTML = html;
        const fragment = document.createDocumentFragment();
        fragment.appendChild(template);
        const structuralDirectives = fragment.querySelectorAll('[data-for]:not([data-for-index])'); // todo: increase time twice

        if (structuralDirectives.length) {
            structuralDirectives
                .forEach(node => {
                    const propertyName = node.getAttribute('data-for');
                    this[propertyName]
                        .forEach((v, i) => {
                            const newNode = node.cloneNode(true);
                            newNode.innerHTML = this.$getParsedTemplate(newNode.innerHTML, v);
                            newNode.setAttribute('data-for-index', i);
                            node.after(newNode)
                        });
                    node.remove();

                });

        }

        return fragment.childNodes[0].innerHTML;
    }
}
