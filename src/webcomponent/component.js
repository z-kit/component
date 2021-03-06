// Set currentScript, mind the polyfill
document.polyfillCurrentScript = document.currentScript || document.polyfillCurrentScript;

const name = 'z-hello';

class Component extends HTMLElement {
  constructor() {
    super();
    const ctx = document.polyfillCurrentScript.parentElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = ctx.querySelector('template');
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

// Register the new element/component
window.customElements.define(name, Component);
