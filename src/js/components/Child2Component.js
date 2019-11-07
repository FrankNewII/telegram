import Components from '../common/Components'
import Http from "../services/http";
import Component from "./Component";
import template from "../../templates/sing-in.pug"

export default class Child2Component extends Component {

    static get inputs() {
        return {bass: null, ass: null};
    }

    static get name() {
        return 'child2-component';
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
        this.bass = this.inputs.bass;
        this.ass = this.inputs.ass;
    }
}

Components.add(Child2Component);
