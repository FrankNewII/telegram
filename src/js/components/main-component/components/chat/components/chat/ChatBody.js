import template from "./chat-body.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class ChatBody extends PrototypeComponent {

    static get outputs() {
        return {toggleProfile: null};
    }

    static get components() {
        return [];
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
            click: {
                method: 'changeState',
                targets: ['search', 'menu']
            },
            scroll: {
                method: 'loadMessages',
                targets: ['messages']
            }
        }
    }

    changeState(event) {
        if (event.target === this.$references['menu']) {
            this.$outputs.toggleProfile();
        }

        if (event.target === this.$references['search']) {
            this.$tag.classList.toggle('show-search-input');
        }
    }

    init() {
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
    }

    loadMessages() {

    }
}
