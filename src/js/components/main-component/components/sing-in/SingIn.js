import Http from "../../../../services/Http";
import PrototypeComponent from "../../../../common/PrototypeComponent";
import template from "./sing-in.pug"
import Auth from "../../../../services/Auth";
import SingInForm from "./components/sing-in-form/SingInForm";
import CodeForm from "./components/code-form/CodeForm";
import CreateAccountForm from "./components/create-account-form/CreateAccountForm";
import PasswordForm from "./components/password-form/PasswordForm";

export default class SingIn extends PrototypeComponent {

    static get inputs() {
        return {bass: null};
    }

    static get outputs() {
        return {loginned: null};
    }

    static get components() {
        return [SingInForm, CodeForm, CreateAccountForm, PasswordForm];
    }

    static get name() {
        return 'sing-in';
    }

    static get dependencies() {
        return [Http, Auth];
    }

    static get template() {
        return template();
    }

    init() {
        this.phoneNumber = '';
    }

    clickHandler(event) {
        console.log(event);
    }

    search(value) {
        this.countries = this._countries.filter(v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true);
    }

    submit() {
        console.log(this.$references['inputPhoneNumber'].value);
        this.$dependencies[1].login();
        this.$outputs.loginned();
    }

    sentCode(phoneNumber) {
        this.$tag.classList.add('code-form');
        console.log(phoneNumber);
        this.phoneNumber = phoneNumber;
    }

    isRegisteredUser() {
        this.$tag.classList.remove('code-form');
        this.$tag.classList.add('create-account-form');
    }

    enteredPassword() {
        this.$tag.classList.remove('password-form');
    }

    createAccount() {
        this.$tag.classList.remove('create-account-form');
        this.$tag.classList.add('password-form');
    }

    openChat() {
        this.$tag.classList.remove('password-form');
        this.$outputs.loginned();
    }
}
