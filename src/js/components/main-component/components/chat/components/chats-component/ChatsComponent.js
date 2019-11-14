import template from "./chats-component.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class ChatsComponent extends PrototypeComponent {

    static get outputs() {
        return {loggedOut: null};
    }

    static get components() {
        return [];
    }

    static get name() {
        return 'chats-component';
    }

    static get dependencies() {
        return [];
    }

    static get template() {
        return template();
    }
}
