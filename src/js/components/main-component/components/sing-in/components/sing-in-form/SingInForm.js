import template from "./sing-in-form.pug"
import InputsWrapper from "../../../../../shared/inputs-wrapper/InputsWrapper";
import AutocompleteComponent from "../../../../../shared/autocomplete-component/AutocompleteComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";
import Http from "../../../../../../services/Http";
import Auth from "../../../../../../services/Auth";
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class SingInForm extends PrototypeComponent {

    static get outputs() {
        return {sentCode: null};
    }

    static get components() {
        return [InputsWrapper, AutocompleteComponent, ButtonComponent];
    }

    static get name() {
        return 'sing-in-form';
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
        // /
        // this.$dependencies[1].login();
        this.$outputs.sentCode(this.$references['inputPhoneNumber'].value);
    }
}
