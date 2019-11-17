import template from "./chat-body.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";

export default class ChatBody extends PrototypeComponent {

    static get outputs() {
        return {toggleProfile: null};
    }

    static get inputs() {
        return {
            user: null
        }
    }
    static get components() {
        return [ButtonComponent];
    }

    static get name() {
        return 'chat-body';
    }

    static get dependencies() {
        return [];
    }

    static get template() {
        return template();
    }

    static get listenEvents() {
        return {
            scroll: {
                method: 'loadMessages',
                targets: ['messages']
            }
        }
    }

    toggleProfile() {
        this.$outputs.toggleProfile();
    }

    search() {
        this.$tag.classList.toggle('show-search-input');
    }

    sendMessage() {

    }

    init() {
        this.$tag.classList.add('no-selected-chat');
        this.openChat = '';
        this.name = '';
        this.time = '';
        this.isOnline = null;
        this.photo = '';
        this.messages = [];
    }

    reset() {
        this.$references['messages'].scrollTop = 1000;
    }

    loadMessages() {

    }

    viewInited() {
        this.reset();
    }
    changesProperties() {
        this.$tag.classList.remove('no-selected-chat');
        this.name = this.$inputs.user.name;
        this.isOnline = this.$inputs.user.online;
        this.photo = this.$inputs.user.photo;
        this.messages = this.$inputs.user.chat;
        this.time = this.$inputs.user.lastSeen;
    }
}
