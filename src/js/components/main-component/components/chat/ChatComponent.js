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
        this.chats = [
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: false
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            },
            {
                name: 'Karen',
                messages: 2,
                writing: true,
                lastMessage: 'Hi',
                lastMassageTime: '00:20',
                pinned: true,
                photo: 'none',
                online: true,
                muted: true
            }];
    }

    toggleProfile() {
        this.$tag.classList.toggle('profile-component');
    }

    loggedOut() {
        this.$outputs.loggedOut();
    }
}
