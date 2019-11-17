import template from "./profile-component.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";
import ButtonComponent from "../../../../../shared/button-component/ButtonComponent";

export default class ProfileComponent extends PrototypeComponent {

    static get outputs() {
        return {toggleProfile: null};
    }

    static get inputs() {
        return {user: null};
    }

    static get components() {
        return [ButtonComponent];
    }

    static get name() {
        return 'profile-component';
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
                targets: ['tabs']
            },

        }
    }

    changeState(event) {
        console.log(event);
        if (this.$references['tabs'] === event.target) {
            console.log(new FormData(event.target));
        }
    }

    closeProfile() {
        this.$outputs.toggleProfile();
    }

    openAdditionalMenu() {

    }

    init() {
        this.reset();
        this.name = '';
        this.photo = '';
        this.bio = '';
        this.username = '';
        this.phone = '';
        this.lastSeen = '';
        this.isOnline = null;
        this.shared = [{
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:25'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:20'
        }, {
            type: 'image',
            src: 'ass',
            time: '0:20'
        }];

        this.shared = this.shared.concat(this.shared);
        this.shared = this.shared.concat(this.shared);
        this.shared = this.shared.concat(this.shared);
        this.isEnabledNotification = true;
    }

    reset() {
        this.sharedType = 'media';
    }

    viewInited() {

    }

    changesProperties() {

        this.name = this.$inputs.user.name;
        this.photo = this.$inputs.user.photo;
        this.bio = this.$inputs.user.bio;
        this.username = this.$inputs.user.username;
        this.phone = this.$inputs.user.phoneNumber;
        this.isOnline = this.$inputs.user.online;
        this.lastSeen = this.$inputs.user.lastSeen;

        this.photo = this.$inputs.user.photo;
        this.photo = this.$inputs.user.photo;

    }
}
