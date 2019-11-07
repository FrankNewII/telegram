import Http from "../services/http";
import PrototypeComponent from "../common/PrototypeComponent";
import template from "../../templates/main-component.pug";
import ChildComponent from "./ChildComponent";

export default class MainComponent extends PrototypeComponent {

    static get components() {
        return [ChildComponent];
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

    event(data) {
        this.bass2 = data.event;
        console.log(data);
    }
}
