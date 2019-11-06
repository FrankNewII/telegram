import Components from '../common/components'
import Http from "../services/http";
import Component from "./Component";
import template from "../../templates/sing-in.pug"

export default class MainComponent extends Component {
    static get name() {
        return 'main-component';
    }

    static get dependencies() {
        return [Http];
    }

    inject(dependencies) {
        this.services = dependencies;
    }

    constructor(tag) {
        super(tag);
        console.log(template);
        this.template = template;
    }

    init() {
        console.log(this);
    }
}

Components.add(MainComponent);
