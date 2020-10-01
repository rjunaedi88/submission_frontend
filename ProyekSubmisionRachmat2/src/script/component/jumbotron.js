class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="container mt-5">
        <div class="jumbotron text-center">
            <h1 class="display-4">Welcome to The Resto</h1>
            <p class="lead">Exclusive Perks Just For You When You Join Fridays Rewards!</p>
            <hr class="my-4">
            <p>Opening at 6:00 PM</p>
            <a class="btn btn-primary btn-lg" href="#searchElement" role="button">GET MENU</a>
        </div>
    </div>`;
    }
}

customElements.define("jumbotron-app", Jumbotron);