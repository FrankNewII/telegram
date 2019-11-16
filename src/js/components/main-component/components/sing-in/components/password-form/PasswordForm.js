import template from "./password-form.pug"
import InputsWrapper from "../../../../../shared/inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../../../../../shared/autocomplete-component/AutocompleteComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";
import Http from "../../../../../../services/Http";
import Auth from "../../../../../../services/Auth";
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class PasswordForm extends PrototypeComponent {

    static get outputs() {
        return {enteredPassword: null};
    }

    static get components() {
        return [InputsWrapper, ButtonComponent];
    }

    static get listenEvents() {
        return {
            click: {
                method: 'click',
                targets: ['togglePasswordVisibility', 'submit']
            }
        }
    }

    static get name() {
        return 'password-form';
    }

    static get dependencies() {
        return [Http, Auth];
    }

    static get template() {
        return template();
    }

    init() {
        this.countryPlaceholder = 'Country';
        this.buttonTitle = 'NEXT';
    }

    click(ev) {
        if (ev.target === this.$references['togglePasswordVisibility']) {
            if (this.$references['password'].type === 'password') {
                this.$references['password'].type = 'input';
                this.$tag.classList.add('monkey-see');
            } else {
                this.$references['password'].type = 'password';
                this.$tag.classList.remove('monkey-see');
            }

        }
    }

    submit(ev) {
        this.$outputs.enteredPassword();
    }
}
