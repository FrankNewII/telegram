import Components from '../common/Components'
import Http from "../services/http";
import PrototypeComponent from "../common/PrototypeComponent";
import template from "../../templates/child-component.pug"
import Child2Component from "./Child2Component";

export default class ChildComponent extends PrototypeComponent {

    static get inputs() {
        return {bass: null};
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
        console.log(this);
        window.bbb = this;
        this.bass = this.inputs.bass;
        this.ass = 'Child1';
    }
}

Components.add(ChildComponent);
