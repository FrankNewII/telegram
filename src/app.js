import './styles/index.scss'
import components from "./js/common/build-component/ComponentsBuilder";
import MainComponent from "./js/components/main-component/MainComponent";
const t = document.querySelector('main-component');
const fr = document.createDocumentFragment();
fr.appendChild(t);
const t1 = performance.now();
components.build(MainComponent, fr.querySelector('main-component'), null);
document.body.appendChild(fr);
console.log(t1 - performance.now());
