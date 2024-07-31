//Llamada a las categorías
export async function getCategories() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.SECRET_RECIPE_BOOK_API,
      "x-rapidapi-host": import.meta.env.PUBLIC_HOST,
    },
  };
  const url = await fetch(
    "https://recipe-book2.p.rapidapi.com/categories",
    options
  );
  const data = await url.json();
  return data;
}
