import Http from "../../services/http";
import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./sing-in.pug"
import InputsWrapper from "../inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../autocomplete-component/AutocompleteComponent";
import ButtonComponent from "../button-component/ButtonComponent";

export default class SingIn extends PrototypeComponent {

    static get inputs() {
        return {bass: null};
    }

    static get outputs() {
        return {test: null};
    }

    static get components() {
        return [InputsWrapper, AutocompleteComponent, ButtonComponent];
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
        this.countryPlaceholder = 'Country';
        this.phoneCode = '';
        this.selectedCountry = '';
        this.buttonTitle = 'NEXT';

        this._countries = this.countries = [{
            country: 'France',
            code: 'fr',
            phoneCode: '+1'
        }, {
            country: 'Germany',
            code: 'fr',
            phoneCode: '+2'
        }, {
            country: 'Ukraine',
            code: 'fr',
            phoneCode: '+3'
        }, {
            country: 'Russian',
            code: 'fr',
            phoneCode: '+4'
        }, {
            country: 'Italy',
            code: 'fr',
            phoneCode: '+5'
        }, {
            country: 'Georgia',
            code: 'fr',
            phoneCode: '+6'
        }, {
            country: 'Iraq',
            code: 'fr',
            phoneCode: '+7'
        }, {
            country: 'USA',
            code: 'fr',
            phoneCode: '+8'
        }];
    }

    countryChanged(idx) {
        this.phoneCode = this.countries[idx].phoneCode;
        this.$references['inputPhoneNumber'].value = this.countries[idx].phoneCode;
        this.selectedCountry = this.countries[idx].country;
    }

    clickHandler(event) {
        console.log(event);
    }

    search(value) {
        this.countries = this._countries.filter( v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true );
    }

    submit() {
        console.log(this.$references['inputPhoneNumber'].value);
    }
}
