import Components from '../common/Components'
import Http from "../services/http";
import Component from "./Component";
import template from "../../templates/main-component.pug";
import ChildComponent from "./ChildComponent";

export default class MainComponent extends Component {

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
        console.log(this);
        window.ttt = this;
        this.ass = 'Bad ass';
        this.bass2 = 'Super Bass parent';
        setTimeout( () => {
            this.bass2 = 'Super Bass parent Changed';
        }, 2000);

    }
}

Components.add(MainComponent);
