import template from "./profile-component.pug"
import PrototypeComponent from "../../../../../../common/PrototypeComponent";

export default class ProfileComponent extends PrototypeComponent {

    static get outputs() {
        return {toggleProfile: null};
    }

    static get components() {
        return [];
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
                targets: ['closeProfile', 'menu', 'tabs']
            },

        }
    }

    changeState(event) {
        console.log(event);
        if (this.$references['tabs'] === event.target) {
            console.log(new FormData(event.target));
        } else if (this.$references['closeProfile'] === event.target) {
            this.$outputs.toggleProfile();
        }
    }

    init() {
        this.name = 'Karen Faren';
        this.photo = 'Karen Faren';
        this.bio = '25 yrs.o student';
        this.username = 'KarenFarren';
        this.phone = '+380123456789';
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
        this.isEnabledNotification = true;
    }

    reset() {
        this.sharedType = 'media';
        this.$references['tabs'][0].checked = true;
    }

    viewInited() {
        this.reset()
    }
}
