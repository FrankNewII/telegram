import template from "./code-form.pug"
import InputsWrapper from "../../../../../shared/inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../../../../../shared/autocomplete-component/AutocompleteComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";
import Http from "../../../../../../services/Http";
import Auth from "../../../../../../services/Auth";
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class CodeForm extends PrototypeComponent {

    static get outputs() {
        return {approved: null};
    }

    static get inputs() {
        return {phoneNumber: null};
    }

    static get components() {
        return [InputsWrapper, AutocompleteComponent, ButtonComponent];
    }

    static get name() {
        return 'code-form';
    }

    static get dependencies() {
        return [];
    }

    static get template() {
        return template();
    }

    static get listenEvents() {
        return {
            input: {
                method: 'checkCode',
                targets: ['input']
            }
        }
    }

    init() {
        this.phoneNumber = this.$inputs.phoneNumber;
    }

    changesProperties(input) {
        if (input) {
            this.phoneNumber = this.$inputs.phoneNumber
        }
    }

    checkCode(event) {
        console.log(event.target.value.length);
        if (event.target.value.length === 3) {
            this.$outputs.approved();
        }
    }
}
