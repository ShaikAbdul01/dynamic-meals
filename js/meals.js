const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const cardContainer = document.getElementById("card-Container");
  cardContainer.innerText = "";
  // console.log(meals)
  meals.forEach((meal) => {
    console.log(meal);

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <button onclick="loadMealsDetails(${meal.idMeal})" type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#mealsDetails">
    Details
  </button>
      </div>
    </div>
    

    `;
    cardContainer.appendChild(div);
  });
};
const searchMeals = () => {
  const searchField1 = document.getElementById("input-field");
  const searchField = searchField1.value;
  //   searchField.innerText=""
  console.log(searchField);
  loadMeals(searchField);
};

const loadMealsDetails =idMeal=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  console.log(url)
  fetch(url)
  .then(res=> res.json())
  .then(data=>displayMealsDetails(data.meals[0]))

}
const displayMealsDetails=meal=>{
  document.getElementById('mealsDetailsLabel').innerText=meal.strMeal;
  const mealsMoreDetails=document.getElementById('mealsMoreDetails');
  mealsMoreDetails.innerHTML=`
  <img class="img-fluid" src="${meal.strMealThumb}" alt="">
  `
}

loadMeals("fish");
