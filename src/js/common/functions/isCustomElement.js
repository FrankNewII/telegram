export function isCustomElement(element) {
    try {
        return (/HTMLElement/).test(element.constructor);
    } catch (ignore) {
        return false;
    }
}
