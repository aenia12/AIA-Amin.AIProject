function displayRecipe(response) {
  let recipeElement = document.querySelector("#response");
  recipeElement.innerHTML = response.data.answer;
}

//function displayRecipe(response) {
// const responseElement = document.querySelector("#response");
//responseElement.innerHTML = ""; // Clear any existing content
//console.log(response.data.answer);

//new Typewriter(responseElement, {
//  strings: [response.data.answer],
//  autostart: true,
//  delay: 1,
//  cursor: "",
// });
//}

function findRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "6a9f30b4789fac54069af012tof0d950";
  let context =
    "Your are a talented AI assistant who loves to cook and learn about recipes worldwide. Your job is to generate a recipe in basic HTML format and each line must be separated by a <br />. Follow user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt =
    "User instructions: Please generate a recipe about" +
    instructionsInput.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#response");
  recipeElement.classList.remove("hidden");

  recipeElement.innerHTML =
    "Generating a recipe about " +
    instructionsInput.value.toLowerCase() +
    "! Please get ready to cook and eat 🍽️";

  //new Typewriter("#response", {
  //strings:
  //"Generating a recipe about " +
  //instructionsInput.value.toLowerCase() +
  //"! Please get ready to cook and eat 🍽️",
  //autostart: true,
  //delay: 1,
  //cursor: "",
  //});

  axios.get(apiUrl).then(displayRecipe);
}

let submitButton = document.querySelector("#recipe-search-engine");
submitButton.addEventListener("submit", findRecipe);
