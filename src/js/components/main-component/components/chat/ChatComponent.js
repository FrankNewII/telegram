import PrototypeComponent from "../../../../common/PrototypeComponent";
import template from "./chat-component.pug"
import Messages from "../../../../services/Messages";
import ChatBody from "./components/chat/ChatBody";
import ChatsComponent from "./components/chats-component/ChatsComponent";
import ProfileComponent from "./components/profile/ProfileComponent";

export default class ChatComponent extends PrototypeComponent {

    static get outputs() {
        return {loggedOut: null};
    }

    static get components() {
        return [ChatBody, ChatsComponent, ProfileComponent];
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
        this._chats = this.chats = [{
            name: 'Karen',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: false,
            muted: true
        }, {
            name: 'Jack Rassel',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: true,
            muted: true
        }, {
            name: 'Celin Dion',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: false,
            muted: true
        }, {
            name: 'Bred Pitt',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: false,
            muted: true
        }, {
            name: 'Silvester Stallone',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: true,
            muted: true
        }, {
            name: 'Karen',
            messages: 2,
            writing: true,
            lastMessage: 'Hi',
            lastMassageTime: '00:20',
            pinned: true,
            photo: 'none',
            online: false,
            muted: true
        }];

        this._chats = this.chats = this.chats.concat(this.chats);
        this._chats = this.chats = this.chats.concat(this.chats);
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

    selectChat(i) {
        console.log(this.chats[i]);
        this.openChat = this.chats[i];
    }

    searchChat(v) {
        this.chats = this._chats.filter(c => c.name.toLowerCase().indexOf(v.toLowerCase()) !== -1);
    }
}
