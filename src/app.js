import './styles/index.scss'
import components from "./js/common/build-component/ComponentsBuilder";
import MainComponent from "./js/components/main-component/MainComponent";
const t1 = performance.now();
components.build(MainComponent, document.querySelector('main-component'), null);
console.log(t1 - performance.now());
