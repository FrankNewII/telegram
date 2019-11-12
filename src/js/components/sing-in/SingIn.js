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

        setTimeout( v => this.countriesLabel = 'aaa', 2000);
        this.phoneNumberLabel = 'Phone Number';
        this.phoneCode = '';
        this.countries = [{
            country: 'France',
            code: 'fr',
            phoneCode: '+1'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+2'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+3'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+4'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+5'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+6'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+7'
        }, {
            country: 'France',
            code: 'fr',
            phoneCode: '+8'
        }];
    }

    countryChanged(idx) {
        this.phoneCode = this.countries[idx].phoneCode;
    }

    clickHandler(event) {
        console.log(event);
    }
}
