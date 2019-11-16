import Render from "./Render";

export default class PrototypeComponent extends Render {

    get $propertyChanged() {
        return this._$propertyChanged;
    }

    set $propertyChanged(b) {
        this._$propertyChanged = b;
    }

    get $outputs() {
        return this.outputs;
    }

    get $inputs() {
        return this.inputs
    }

    get $dependencies() {
        return this.dependencies;
    }

    $init(tag) {
        this.$tag = tag;
        const fr = document.createDocumentFragment();
        const children = tag.childNodes;

        while (children.length) fr.appendChild(children[0]);

        this.innerNodes = fr;
        this._$previousParsedtemplate = null;
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
