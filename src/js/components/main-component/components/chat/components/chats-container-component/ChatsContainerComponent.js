import template from "./chats-container-component.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";

export default class ChatsContainerComponent extends PrototypeComponent {

    static get outputs() {
        return {loggedOut: null, selectChat: null, searchChat: null};
    }

    static get components() {
        return [ButtonComponent];
    }

    static get name() {
        return 'chats-container-component';
    }

    static get dependencies() {
        return [];
    }

    static get template() {
        return template();
    }

    static get listenEvents() {
        return {
            click: {
                method: 'click',
                targets: ['selectChat']
            },
            input: {
                method: 'search',
                targets: ['search']
            }
        }
    }

    click(event) {
        if (event.target === this.$references['selectChat']) {
            this.$outputs.selectChat(event.target.dataset.forIndex);
        }
    }

    search(event) {
        if (event.target === this.$references.search) {
            this.$outputs.searchChat(event.target.value);
        }
    }
}
