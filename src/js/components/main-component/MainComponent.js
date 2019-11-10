import Http from "../../services/http";
import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./main-component.pug";
import SingIn from "../sing-in/SingIn";

export default class MainComponent extends PrototypeComponent {

    static get components() {
        return [SingIn];
    }

    static get name() {
        return 'main-component';
    }

    static get dependencies() {
        return [Http];
    }

    static get template() {
        return template();
    }

    inject(dependencies) {
        this.services = dependencies;
    }

    init() {
        window.ttt = this;
        this.ass = 'Bad ass';
        this.bass2 = 'Super Bass parent';

    }
}
