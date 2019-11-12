import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./autocomplete-component.pug"

export default class AutocompleteComponent extends PrototypeComponent {

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
            }
        }
    }

    static get outputs() {
        return {changed: null};
    }

    static get inputs() {
        return {
            data: []
        }
    }

    static get name() {
        return 'autocomplete-component';
    }

    static get template() {
        return template();
    }

    init() {
        this.data= this.inputs.data;
    }

    focus(ev) {
        this.$tag.classList.add('active');
    }

    blur() {
        this.$tag.classList.remove('active');
    }

    select(event) {
        const id = event.target.dataset.forIndex;
        this.outputs.changed(id);
    }
}
