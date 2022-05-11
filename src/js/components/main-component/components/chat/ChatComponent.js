import PrototypeComponent from "../../../../common/PrototypeComponent";
import template from "./chat-component.pug"
import Messages from "../../../../services/Messages";
import ChatBody from "./components/chat/ChatBody";
import ChatsComponent from "./components/chats-component/ChatsComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import ButtonComponent from "../../../shared/button-component/ButtonComponent";
import chats from "./chats";
import users from "./users";
import ChatsContainerComponent from "./components/chats-container-component/ChatsContainerComponent";

export default class ChatComponent extends PrototypeComponent {

    static get outputs() {
        return {loggedOut: null};
    }

    static get components() {
        return [ChatBody, ChatsComponent, ProfileComponent, ButtonComponent, ChatsContainerComponent];
    }

    static get name() {
        return 'chat-component';
    }

    static get dependencies() {
        return [Messages];
    }

    static get template() {
        return template();
    }

    init() {
        this._chats = this.chats = users;

        this._chats = this.chats = this.chats.concat(this.chats);
        this._chats = this.chats = this.chats.concat(this.chats);

        this.openChat = '';
    }

    toggleProfile() {
        this.$tag.classList.toggle('profile-component');
    }

    loggedOut() {
        this.$outputs.loggedOut();
    }

    selectChat(event) {
        const i = event.path.find(n => n.dataset.forIndex !== undefined).dataset.forIndex;
        if (this.chats[i] !== this.openChat) {
            this.chats[i].chat = chats.reverse().map(v => v);
            this.openChat = this.chats[i];
        }
    }

    searchChat(v) {
        this.chats = this._chats.filter(c => c.name.toLowerCase().indexOf(v.toLowerCase()) !== -1);
    }
}
