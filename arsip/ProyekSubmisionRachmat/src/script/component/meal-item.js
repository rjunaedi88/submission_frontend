class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card mb-3">
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="image meal">
        <div class="card-body meal-info">
          <h5 class="card-title">${this._meal.strMeal}</h5>
          <p class="card-text">${this._meal.strInstructions}</p>
        </div>
      </div>`;
  }
}

customElements.define("meal-item", MealItem);