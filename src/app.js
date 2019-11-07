import './styles/index.scss'
import components from "./js/common/Components";
import MainComponent from "./js/components/MainComponent";

components.build(MainComponent, document.querySelector('main-component'), null);
