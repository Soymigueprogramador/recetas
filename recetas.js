const buscadorDeRecetas = document.getElementById('buscador-de-recetas');
const resultadosRecetas = document.getElementById('resultados-recetas');

const apiKey = 'a26c5cd030mshf4c83b59529df9fp1561d2jsna89d460bdc40';
const baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';

function buscarRecetas() {
  const queryParameters = {
    query: 'pasta',
    cuisine: 'italian',
    excludeCuisine: 'greek',
    diet: 'vegetarian',
    intolerances: 'gluten',
    equipment: 'pan',
    includeIngredients: 'tomato,cheese',
    excludeIngredients: 'eggs',
    type: 'main course',
    instructionsRequired: true,
    fillIngredients: false,
    addRecipeInformation: false,
    titleMatch: 'Crock Pot',
    maxReadyTime: 20,
    ignorePantry: true,
    sort: 'calories',
    sortDirection: 'asc',
    minCarbs: 10,
    maxCarbs: 100,
    minProtein: 10,
    maxProtein: 100,
    minCalories: 50,
    maxCalories: 800,
    minFat: 10,
    maxFat: 100,
    minAlcohol: 0,
    maxAlcohol: 100,
    minCaffeine: 0,
    maxCaffeine: 100,
    minCopper: 0,
    maxCopper: 100,
    minCalcium: 0,
    maxCalcium: 100,
    minCholine: 0,
    maxCholine: 100,
    minCholesterol: 0,
    maxCholesterol: 100,
    minFluoride: 0,
    maxFluoride: 100,
    minSaturatedFat: 0,
    maxSaturatedFat: 100,
    minVitaminA: 0,
    maxVitaminA: 100,
    minVitaminC: 0,
    maxVitaminC: 100,
    minVitaminD: 0,
    maxVitaminD: 100,
    minVitaminE: 0,
    maxVitaminE: 100,
    minVitaminK: 0,
    maxVitaminK: 100,
    minVitaminB1: 0,
    maxVitaminB1: 100,
    minVitaminB2: 0,
    maxVitaminB2: 100,
    minVitaminB5: 0,
    maxVitaminB5: 100,
    minVitaminB3: 0,
    maxVitaminB3: 100,
    minVitaminB6: 0,
    maxVitaminB6: 100,
    minVitaminB12: 0,
    maxVitaminB12: 100,
    minFiber: 0,
    maxFiber: 100,
    minFolate: 0,
    maxFolate: 100,
    minFolicAcid: 0,
    maxFolicAcid: 100,
    minIodine: 0,
    maxIodine: 100,
    minIron: 0,
    maxIron: 100,
    minMagnesium: 0,
    maxMagnesium: 100,
    minManganese: 0,
    maxManganese: 100,
    minPhosphorus: 0,
    maxPhosphorus: 100,
    minPotassium: 0,
    maxPotassium: 100,
    minSelenium: 0,
    maxSelenium: 100,
    minSodium: 0,
    maxSodium: 100,
    minSugar: 0,
    maxSugar: 100,
    minZinc: 0,
    maxZinc: 100,
    offset: 0,
    number: 10,
    limitLicense: false,
    ranking: 2,
  };

  const queryParams = new URLSearchParams(queryParameters);
  const fullUrl = `${baseUrl}?${queryParams.toString()}`;

  fetch(fullUrl, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      actualizarRecetas(data);
    })
    .catch((error) => {
      console.log('Error al buscar recetas:', error);
      alert('Error al buscar recetas:');
    });
}

function actualizarRecetas(data) {
  let listaRecetas = '';
  for (let i = 0; i < data.results.length; i++) {
    listaRecetas += `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${data.results[i].title}
    </li>`;
  }
  resultadosRecetas.innerHTML = `<ul class="list-group">${listaRecetas}</ul>`;
}

buscadorDeRecetas.addEventListener('submit', function (e) {
  e.preventDefault();
  buscarRecetas();
});