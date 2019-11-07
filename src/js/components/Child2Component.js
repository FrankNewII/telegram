import Http from "../services/http";
import PrototypeComponent from "../common/PrototypeComponent";
import template from "../../templates/sing-in.pug"

export default class Child2Component extends PrototypeComponent {

    static get inputs() {
        return {test: '12121', ass: null};
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
        this.bass = this.inputs.bass;
        this.ass = this.inputs.ass;
        this.test = this.inputs.test;
    }

    changesProperties() {
        this.ass = this.inputs.bass;
        this.test = this.inputs.test;
        this.tag.innerHTML = this.$render();
    }
}
