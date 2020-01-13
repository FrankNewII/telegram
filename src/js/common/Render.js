import {makePropertyObservable} from "./functions/makePropertyObservable";
import components from "./build-component/ComponentsBuilder";

function updateNode(template) {
    return function (v) {
        v.nodeValue = template.replace('[' + this.propertyName + ']', this.component[this.propertyName])
    }
}

function updateStructural(node, place, parentInstance) {
    const fragment = document.createDocumentFragment();
    return function (v) {
        let n = null;
        this.component[this.propertyName]
            .forEach((v, i) => {
                const newNode = node.cloneNode(true);
                this.component.$getParsedTemplate(newNode, v, false);
                components.rebuild(parentInstance.$class, newNode, v, parentInstance);
                newNode.dataset.forIndex = i;
                n = newNode;
                fragment.appendChild(newNode)
            });

        place.innerHTML = '';
        place.appendChild(fragment);
    }
}

function updateClasses(node, exp) {
    let previousClass = null;
    return function (v) {
        const calc = doExp(exp, this.component);

        if (previousClass !== calc) {
            node.classList.remove(previousClass);
            console.log(previousClass, calc, node);
            calc && node.classList.add(calc);
            previousClass = calc;
        }
    }
}

function updateAttribute(node, attrValue, attrName) {
    return function (v) {
        if (attrValue !== this.component[this.propertyName]) {
            node.removeAttribute(doExp(attrName, this.component));
            node.setAttribute(attrName, this.component[this.propertyName]);
            attrValue = this.component[this.propertyName];
        }
    }
}


function doExp(exp, ctx) {
    const fn = new Function('', 'return ' + exp.replace(/(?<=^([^"']|("|')[^"']*("|'))*)[a-zA-Z]+([0-9]?)/g, (v) => 'this.' + v));
    return fn.call(ctx);
}
export default class Render {
    get $template() {
        return this._$template;
    }

    set $template(template) {
        this._$template = template;
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
                const ref = children[i].dataset.elementRef;
                const klass = children[i].dataset.class;
                const attr = children[i].dataset.attr;

                if (ref) {
                    this._$insertReferences(ref, children[i]);
                }


                if (klass) {
                    if (data instanceof Render) {
                        makePropertyObservable(this, klass, children[i], updateClasses(children[i], klass), klass);
                    }
                    const exp = doExp(klass, data);

                    if (exp) {
                        if (typeof (exp) === 'object') {
                            children[i].classList.add.apply(children[i].classList, exp.filter(v => v));
                        } else {
                            children[i].classList.add(exp)
                        }

                    }
                }

                if (attr) {
                    const attrs = attr.split('::');

                    if (data instanceof Render) {
                        makePropertyObservable(this, attrs[1], children[i], updateAttribute(children[i], attrs[1], attrs[0]), klass);
                    }

                    children[i].setAttribute(attrs[0], data[attrs[1]]);
                }

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

    _$checkStructuralDirectives(parentNode) {
        const conditional = parentNode.querySelectorAll('[data-if]');

        conditional.forEach(node => {
            const calc = doExp(node.dataset.if, this);
            if (!calc) {
                node.remove();
            }
        });

        const cycles = parentNode.querySelectorAll('[data-for]'); // todo: increase time twice

        cycles
            .forEach(node => {
                const propertyName = node.dataset.for;
                let n = null;
                this[propertyName]
                    .forEach((v, i) => {
                        const newNode = node.cloneNode(true);
                        this.$getParsedTemplate(newNode, v, false);
                        newNode.dataset.forIndex = i;
                        node.before(newNode);
                        n = newNode;
                    });

                makePropertyObservable(this, propertyName, node, updateStructural(node, node.parentElement, this), propertyName);

                node.parentElement.removeChild(node);
            });
    }

    _$isStructural(node) {
        return !!node.dataset.for;
    }

    _$addListenerToUpdateBlock(node, propertyName) {
        makePropertyObservable(this, propertyName, node, updateNode(node.nodeValue), propertyName);
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

    _$insertReferences(referenceName, node) {
        if (this.$references) {
            if (this.$references[referenceName]) {

                if (!this.$references[referenceName].push) {
                    this.$references[referenceName] = [this.$references[referenceName]];
                }

                this.$references[referenceName].push(node);
            } else {
                this.$references[referenceName] = node;
            }
        } else {
            this.$references = {};
            this.$references[referenceName] = node;
        }
    }
}
