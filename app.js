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

  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Your are a talented AI assistant who loves to cook and learn about recipes worldwide. The recipe must be provided in HTML format. Example: <p>this is a recipe</p>";
  let prompt = "Generate a recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let responseElement = document.querySelector("#response");

  responseElement.innerHTML =
    "Generating a recipe... Please get ready to cook and eat 🍽️ ";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayRecipe);
}

let submitButton = document.querySelector(".btn btn-primary");
submitButton.addEventListener("submit", findRecipe);
