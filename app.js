function displayRecipe(response) {
  console.log(response.data.answer);

  new Typewriter("#response", {
    strings: response.data.answer,
    cursor: null,
    autostart: true,
    delay: 5,
  });
}

function findRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
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
    instructionsInput.value +
    "! Please get ready to cook and eat 🍽️";

  console.log("processing AI api");
  axios.get(apiUrl).then(displayRecipe);
}

let submitButton = document.querySelector("#recipe-search-engine");
submitButton.addEventListener("submit", findRecipe);
