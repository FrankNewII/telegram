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
                targets: ['closeProfile', 'menu']
            }
        }
    }

    changeState(event) {
        this.$outputs.toggleProfile();
    }
}
