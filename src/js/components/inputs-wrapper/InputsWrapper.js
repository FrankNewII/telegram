import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./inputs-wrapper.pug"

export default class InputsWrapper extends PrototypeComponent {

    static get inputs() {
        return {label: 'Check', class: null};
    }

    static get listenEvents() {
        return {
            focusin: {
                method: 'focus'
            },
            focusout: {
                method: 'blur'
            }
        }
    }

    static get components() {
        return [];
    }

    static get name() {
        return 'inputs-wrapper';
    }

    static get template() {
        return template();
    }

    init() {
        this.label = this.inputs.label;
    }

    focus(ev) {
        this.$tag.classList.add('active');
    }

    blur() {
        this.$tag.classList.remove('active');
    }
}
