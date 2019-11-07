import Http from "../services/http";
import PrototypeComponent from "../common/PrototypeComponent";
import template from "../../templates/child-component.pug"
import Child2Component from "./Child2Component";

export default class ChildComponent extends PrototypeComponent {

    static get inputs() {
        return {bass: null};
    }

    static get outputs() {
        return {test: null};
    }

    static get components() {
        return [Child2Component];
    }

    static get name() {
        return 'child-component';
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
        window.bbb = this;
        this.bass = this.inputs.bass;

        this.ass = 'Child1';

        setTimeout(v => this.outputs.test({event: 'Works'}), 3000);
    }

    changesProperties() {
        this.bass = this.inputs.bass;
    }
}
