import './styles/index.scss'
import DI from './js/common/DI.js'
import Http from './js/services/http.js'
import components from "./js/common/Components";
import MainComponent from "./js/components/MainComponent";

console.log(DI.get(Http));
setImmediate( () => {
    components.get(MainComponent, document.querySelector('main-component'), null);
});
