//Llamada a nuevas recetas (página de inicio)
export async function getNewRecipe() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.SECRET_RECIPE_BOOK_API,
      "x-rapidapi-host": import.meta.env.PUBLIC_HOST,
    },
  };
  const url = await fetch(
    "https://recipe-book2.p.rapidapi.com/recipes-new",
    options
  );
  const data = await url.json();
  return data
}
