import { LitElement, html, css } from "lit";
import "./single-card.js";

export class CardsList extends LitElement {
    static get properties() {
        return {
            books: { type: Array },
        };
    }

    static styles = [
        css`
      :host {
        display: flex;
        width:100%;
      }

      .card-container{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 20px;
      }
    `,
    ];

    constructor() {
        super();
        this.books = [];
    }

    async connectedCallback() {
      super.connectedCallback()
      let info = await this._getData();
      this.books = info.data
    }
  
    async _getData() {
      const response = await fetch("https://api.potterdb.com/v1/books")
      const data = await response.json()
      return data
    }

    render() {
        // let { books } = this;
        return html`
        <div class="card-container">
          ${this.books.map(
              (libro) => html` <single-card class="card" book=${JSON.stringify(libro)}></single-card> `
          )}
        </div>
      `;
    }
}
customElements.define("cards-list", CardsList);
