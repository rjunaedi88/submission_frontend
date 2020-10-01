class DataSource {
    static searchMeal(keyword) {
        debugger;
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} not available`);
                }
            })
    }
}

export default DataSource;