import Http from "../../services/http";
import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./sing-in.pug"
import InputsWrapper from "../inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../autocomplete-component/AutocompleteComponent";

export default class SingIn extends PrototypeComponent {

    static get inputs() {
        return {bass: null};
    }

    static get outputs() {
        return {test: null};
    }

    static get components() {
        return [InputsWrapper, AutocompleteComponent];
    }

    static get name() {
        return 'sing-in';
    }

    static get dependencies() {
        return [Http];
    }

    static get template() {
        return template();
    }

    init() {
        this.countriesLabel = 'Country';
        this.phoneNumberLabel = 'Phone Number';
        this.label = 'Select Country';
        this.phoneCode = '';
        this.countries = [{
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+380'
        }];
    }

    countryChanged(data) {
        this.phoneCode = data.phoneCode;
        this.$render();
    }

    clickHandler(event) {
        console.log(event);
    }
}
