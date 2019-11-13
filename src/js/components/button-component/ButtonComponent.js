import PrototypeComponent from "../../common/PrototypeComponent";
import template from "./button-component.pug";

export default class ButtonComponent extends PrototypeComponent {

    static get listenEvents() {
        return {
            click: {
                targets: ['button']
            }
        }
    }

    static get name() {
        return 'button-component';
    }

    static get inputs() {
        return {
            title: 'Button'
        }
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
        this.title = this.inputs.title;
    }

    click(eve) {
        this.createWave(eve.offsetX, eve.offsetY);
        this.outputs.click();
    }

    createWave(x, y) {
        const div = document.createElement('div');
        div.classList.add('wave');
        div.style.left = x + "px";
        div.style.top = y + "px";
        this.$references['waveContainer'].appendChild(div);

        setTimeout(() => div.classList.add('rise'), 100);
        setTimeout(() => div.remove(), 400);
    }


}
