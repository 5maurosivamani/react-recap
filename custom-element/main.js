/**
 * Custom element
 */

/** customize the existing html element */
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Element functionality written in here
  connectedCallback() {
    console.log("This is a customized html element");
  }
}

customElements.define("word-count", WordCount, { extends: "p" });

/** create a element from scratch */
class PopupInfo extends HTMLElement {
  constructor() {
    super();
    console.log("PopupInfo element");
  }
  // Element functionality written in here

  connectedCallback() {
    console.log("PopupInfo element connected");
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "./img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);
    style.textContent = `
    .wrapper {
      position: relative;
    }

    .info {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid black;
      padding: 10px;
      background: white;
      border-radius: 10px;
      opacity: 0;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
      color:black;
    }

    img {
      width: 1.2rem;
    }

    .icon:hover + .info, .icon:focus + .info {
      opacity: 1;
    }
  `;

    // Attach the created elements to the shadow dom

    wrapper.appendChild(icon);
    wrapper.appendChild(info);

    shadow.appendChild(wrapper);
    shadow.appendChild(style);
    console.log(style.isConnected);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
  }
}

customElements.define("popup-info", PopupInfo);
