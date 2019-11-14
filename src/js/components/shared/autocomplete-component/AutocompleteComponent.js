import PrototypeComponent from "../../../common/PrototypeComponent";
import template from "./autocomplete-component.pug"

export default class AutocompleteComponent extends PrototypeComponent {

    static get inputs() {
        return {
            placeholder: '',
            selectedLabel: ''
        }
    }

    static get listenEvents() {
        return {
            focusin: {
                method: 'focus'
            },
            focusout: {
                method: 'blur'
            },
            click: {
                method: 'select',
                targets: ['option']
            },
            input: {
                method: 'inputChanged',
                targets: ['input']
            }
        }
    }

    static get outputs() {
        return {changed: null, search: null};
    }

    static get name() {
        return 'autocomplete-component';
    }

    static get template() {
        return template();
    }

    init() {
        this.selectedLabel = '';
    }
    viewInited() {
        this.input = this.$tag.querySelector('input');
        this.input.setAttribute('placeholder', this.inputs.placeholder);
    }
    focus(ev) {
        this.$outputs.search('');
        this.$tag.classList.add('active');
        this.input.value = '';
    }

    blur() {
        this.$tag.classList.remove('active');
        if (this._selectedLabel) {
            this.selectedLabel = this._selectedLabel;
        }
    }

    select(event) {
        const id = event.target.dataset.forIndex;
        this.$outputs.changed(id);
    }

    inputChanged(ev) {
        this.$outputs.search(ev.target.value);
    }

    changesProperties(propertyName) {
        if (propertyName === 'selectedLabel') {
            this.selectedLabel = this.$inputs.selectedLabel;
            this.input.value = this.$inputs.selectedLabel;
        }
    }
}
