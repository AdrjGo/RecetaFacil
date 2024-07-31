//Llamada a receta específica
export async function getRecipeBySlug(slug) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.SECRET_RECIPE_BOOK_API,
      "x-rapidapi-host": import.meta.env.PUBLIC_HOST,
    },
  };
  const url = `https://recipe-book2.p.rapidapi.com/recipe-details?path=${slug}`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
