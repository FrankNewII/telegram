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
        this.openChat = this.$inputs.openChat;
        this.name = 'Bred Pitt';
        this.time = 'last seen recently';
        console.log(this.openChat);
        this.messages = [
            {
                message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +
                    'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +
                    'sad sadasfaskjf :sasa asddsffsdds',
                type: 'message',
                from: 'them',
                time: '0:21',
                isRead: false
            },
            {
                message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds',
                type: 'message',
                from: 'me',
                time: '0:21',
                isRead: false
            },
            {
                message: 'Lorem ipsum dollor assd sds sdsds',
                type: 'message',
                from: 'them',
                time: '0:21',
                isRead: false
            },
            {
                message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +
                    'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +
                    'sad sadasfaskjf :sasa asddsffsdds',
                type: 'message',
                from: 'them',
                time: '0:21',
                isRead: false
            },
            {
                message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +
                    'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +
                    'sad sadasfaskjf :sasa asddsffsdds',
                type: 'message',
                from: 'me',
                time: '0:21',
                isRead: false
            }
        ];

        this.messages = this.messages.concat(this.messages);
        this.messages = this.messages.concat(this.messages);
        this.messages = this.messages.concat(this.messages);
        this.messages = this.messages.concat(this.messages);
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
        this.name = this.$inputs.user.name;
        console.log(this.name);
    }
}
