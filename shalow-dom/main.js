/**
  Summary
    Shadow DOM is a way to create a component-local DOM.

    shadowRoot = elem.attachShadow({mode: open|closed}) – creates shadow DOM for elem. If mode="open", then it’s accessible as elem.shadowRoot property.
    We can populate shadowRoot using innerHTML or other DOM methods.
    Shadow DOM elements:

    Have their own ids space,
    Invisible to JavaScript selectors from the main document, such as querySelector,
    Use styles only from the shadow tree, not from the main document.
 */

customElements.define(
  "shallo-hello",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = this.innerHTML;
    }
  }
);

const shalloHello = document.querySelector("shallo-hello");

// alert(shalloHello.shadowRoot.host === shalloHello);

// Shadow DOM elements are not visible to querySelector
{
  const shadowElement = document.querySelector("#shadow");
  shadowElement.attachShadow({ mode: "open" });
  shadowElement.shadowRoot.innerHTML = `
   <style> p { font-weight: bold; } </style>
  <p>This is a paragraph inside the shadow DOM.</p>
  <p>This is a paragraph 1 inside the shadow DOM.</p>`;

  const allParagraphs = document.querySelectorAll("p");
  [...allParagraphs].forEach((p) => console.log(p));
}
