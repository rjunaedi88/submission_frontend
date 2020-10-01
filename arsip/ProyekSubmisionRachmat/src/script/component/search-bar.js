class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="input-group mb-3">
            <input type="search" class="form-control" placeholder="Seacrh Food" id="searchElement">
            <div class="input-group-append">
                <button class="btn btn-primary" type="submit" id="searchButtonElement">Button</button>
            </div>
        </div>
       `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);