import template from "./create-account-form.pug"
import InputsWrapper from "../../../../../shared/inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../../../../../shared/autocomplete-component/AutocompleteComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";
import Http from "../../../../../../services/Http";
import Auth from "../../../../../../services/Auth";
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class CreateAccountForm extends PrototypeComponent {

    static get outputs() {
        return {createAccount: null};
    }

    static get inputs() {
        return {phoneNumber: null};
    }

    static get components() {
        return [InputsWrapper, AutocompleteComponent, ButtonComponent];
    }

    static get name() {
        return 'create-account-form';
    }

    static get dependencies() {
        return [Http, Auth];
    }

    static get template() {
        return template();
    }

    init() {
        this.countryPlaceholder = 'Country';
        this.phoneCode = '';
        this.selectedCountry = '';
        this.buttonTitle = 'NEXT';
    }

    countryChanged(idx) {
        this.phoneCode = this.countries[idx].phoneCode;
        this.$references['inputPhoneNumber'].value = this.countries[idx].phoneCode;
        this.selectedCountry = this.countries[idx].country;
    }

    checkCode(event) {
        console.log(event.target.value.length);
        if (event.target.value.length === 3) {
            this.$outputs.approved();
        }
    }

    search(value) {
        this.countries = this._countries.filter(v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true);
    }

    submit() {
        console.log(this.$references['lastname'].value, this.$references['name'].value);
        this.$outputs.createAccount();
    }
}
