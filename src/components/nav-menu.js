import { LitElement, html, css } from 'lit';

// const logo = new URL('../assets/File-01.svg', import.meta.url).href;
// const logo = new URL('../assets/lit.svg', import.meta.url).href;
const logo = new URL('../assets/logo-white.2d8b986c.svg', import.meta.url).href;

export class NavMenu extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            header{
                width:100%;
                height: 4.375rem;
                background: rgba(0, 0, 0, 0.4);
                color: white;
                top: 0%;
                z-index: 999;
            }

            .menu{
                width:100%;
                padding: 0.625rem 1.25rem;
            }
            
            .menu-container{
                display: flex
            }

            img{
                width: 12.5rem;
                height: auto;
            }
            nav{
                padding: 1rem 0;
                position: relative;
            }
            
            nav>ul{
                display: flex;
                gap: 1.25rem;
                justify-content: end;
                margin:0;
                padding:0;
            }
        `
    ];

    render() {
        return html`
        <header>
            <div class="menu">
                <div class="menu-container">
                    <img title="Harry Potter" src=${logo}>
                    <nav>
                        <ul>
                            <li class="libros">libros</li>
                            <li class="peliculas">peliculas</li>
                            <li class="personajes">personajes</li>
                            <li class="contacto">contacto</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }
}
customElements.define('nav-menu', NavMenu);
