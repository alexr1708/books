import { LitElement, html, css } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export class SingleCard extends LitElement {
    static get properties() {
        return {
            book: { type: Object },
        };
    }

    static styles = [
        css`
        :host{
            display:flex;
            flex-direction:column;
            width: fit-content;
            border-radius: 0.625rem;
            border: 0.125rem solid transparent;
            display: flex;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.2s ease 0s, outline 1e-06s ease 0s;
        }
        
        
        :host(:hover){
            border-color: #DE6061;
            transform: scale(0.98);
            .card-link{
                opacity:1;
            }
        }

        .card-img{
            width:100%;
            height:12rem;
            box-shadow: rgba(185, 185, 185, 0.4) 0px 0.1875rem 1.25rem;
        }

        img{
            width: 15rem;
            height: auto;
        }
        
        .card-description{
            width:15rem;
            background-color: white;
            padding-bottom: 2rem;
        }
        
        .card-description>*{
            padding-left:1rem;
        }

        .card-description>p{
            margin-bottom:0;
        }

        .card-description>span{
            color: #898989
        }
        
        .card-link{
            color:#DE6061 !important;
            display:block;
            margin-top:2rem;
            opacity:0;
        }

        
    `,
    ];

    constructor(){
        super();
        this.book = {};
    }

    render() {
        console.log(this.book.attributes)
        return html`
        <div class="card-img">
            <img src=${ifDefined(this.book.attributes.cover)}>
        </div>
        <div class="card-description">
            <p>
                ${this.book.attributes.title}
            </p>
            <span>
                ${this.book.attributes.author} - ${this.book.attributes.release_date}
            </span>
            <span class="card-link">
                Conoce más
            </span>
        </div>
        `;
    }
}
customElements.define("single-card", SingleCard);
