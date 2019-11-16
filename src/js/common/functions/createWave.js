export function createWave(x, y, target) {
    const div = document.createElement('div');
    div.classList.add('wave');
    div.style['transitionDuration'] = '.5s';
    div.style.left = x + "px";
    div.style.top = y + "px";
    target.appendChild(div);

    setTimeout(() => div.classList.add('rise'), 10);
    setTimeout(() => div.remove(), 500);
}
