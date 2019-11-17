import PrototypeComponent from "../../../common/PrototypeComponent";
import template from "./button-component.pug";
import {createWave} from "../../../common/functions/createWave";

export default class ButtonComponent extends PrototypeComponent {

    static get listenEvents() {
        return {
            click: {}
        }
    }

    static get name() {
        return 'button-component';
    }

    static get outputs() {
        return {
            click: null
        }
    }

    static get template() {
        return template();
    }

    init() {
    }

    click(eve) {
        createWave(eve.offsetX, eve.offsetY, this.$references['waveContainer']);
        this.$outputs.click(event);
    }

}
