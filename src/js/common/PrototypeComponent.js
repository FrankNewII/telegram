import {addPropertyEventEmitter} from "./functions/addPropertyEventEmitter";

function updateNode(template) {
    return function (v) {
        v.nodeValue = template.replace('[' + this.propertyName + ']', this.component[this.propertyName])
    }
}

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
        const fr = document.createDocumentFragment();
        const children = tag.childNodes;

        while (children.length) fr.appendChild(children[children.length - 1]);

        this.innerNodes = fr;
        tag.innerHTML = '';
        this._$previousParsedtemplate = null;
    }

    $render() {

        const div = document.createElement('div');

        div.innerHTML = this.$insertComponents();

        if (this.$options && this.$options.compareTemplateBeforeInsert) {
            this.$getParsedTemplate(div);
            const parsedTemplate = this._$checkStructuralDirectives(div);


            if (parsedTemplate !== this._$previousParsedtemplate) {
                this.$updateView(this._$previousParsedtemplate = parsedTemplate);
            }

        } else {
            this._$checkStructuralDirectives(div);
            this.$getParsedTemplate(div);
            const parsedTemplate = div.childNodes[0];
            this.$updateView(parsedTemplate);
        }
    }

    $insertComponents(template = this.$template) {
        return template;
    }

    $getParsedTemplate(container, data = this, doAddListeners = true) {
        const children = container.childNodes;
        const len = children.length;
        for (let i = 0; i < len; i++) {
            if (children[i].nodeType === 3) {

                if (children[i].nodeValue.indexOf('[[insertComponent]]') !== -1) {
                    this._$insertComponent(children[i]);
                } else {
                    this._$insertDataToTemplate(children[i], data, doAddListeners);
                }

            } else {
                if (!this._$isStructural(children[i])) {
                    this.$getParsedTemplate(children[i], data, doAddListeners);
                }
            }
        }
    }

    $updateView(view) {
        this.$tag.innerHTML = '';
        this.$tag.appendChild(view);
        this._$previousParsedtemplate = view;
    }

    _$checkStructuralDirectives(node) {
        const structuralDirectives = node.querySelectorAll('[data-for]:not([data-for-index])'); // todo: increase time twice

        if (structuralDirectives.length) {
            structuralDirectives
                .forEach(node => {
                    const propertyName = node.getAttribute('data-for');
                    this[propertyName]
                        .forEach((v, i) => {
                            const newNode = node.cloneNode(true);
                            this.$getParsedTemplate(newNode, v, false);
                            newNode.setAttribute('data-for-index', i);
                            node.after(newNode)
                        });
                    node.remove();

                });
            console.log(node);
        };
    }

    _$isStructural(node) {
        return !!node.getAttribute('data-for');
    }

    _$addListenerToUpdateBlock(node, propertyName) {
        if (this['$listeners' + propertyName]) {
            this['$listeners' + propertyName].add(node, updateNode(node.nodeValue));
        } else {
            const lastValue = this[propertyName];

            Object.defineProperty(this, propertyName, {
                get: () => this['_$' + propertyName],
                set: newValue => {
                    this['_$' + propertyName] = newValue;
                    this['$listeners' + propertyName].update();
                }
            });

            this['_$' + propertyName] = lastValue;

            addPropertyEventEmitter(this, propertyName).add(node, updateNode(node.nodeValue));
        }
    }

    _$insertComponent(node) {
        const parent = node.parentElement;
        node.remove();
        parent.appendChild(this.innerNodes);
    }

    _$insertDataToTemplate(node, data, doAddListeners) {
        node.nodeValue = node.nodeValue
            .replace(/\[(\w)+\]/g, v => {
                const propertyName = v.substring(1, v.length - 1);

                if (doAddListeners && this[propertyName] !== undefined) {
                    this._$addListenerToUpdateBlock(node, propertyName);
                }

                return (data[propertyName] !== undefined) ? data[propertyName] : v;
            });
    }
}
