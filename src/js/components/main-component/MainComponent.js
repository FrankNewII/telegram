import Http from "../../services/Http";
import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./main-component.pug";
import SingIn from "./components/sing-in/SingIn";
import Auth from "../../services/Auth";
import ChatComponent from "./components/chat/ChatComponent";

export default class MainComponent extends PrototypeComponent {

    static get components() {
        return [SingIn, ChatComponent];
    }

    static get name() {
        return 'main-component';
    }

    static get dependencies() {
        return [Http, Auth];
    }

    static get template() {
        return template();
    }

    init() {
        this.$tag.classList.add('logged');
        //this.checkState();
    }

    checkState() {
        if (this.$dependencies[1].isLoggined()) {
            this.$tag.classList.add('logged');
        } else {
            this.$tag.classList.remove('logged');
        }
    }
}
