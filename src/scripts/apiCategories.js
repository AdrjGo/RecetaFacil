const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2bb8e7996bmshe414886ace39900p126ac3jsnff9f1437217b",
      "x-rapidapi-host": "recipe-book2.p.rapidapi.com",
    },
  };
  const url = await fetch ("https://recipe-book2.p.rapidapi.com/categories", options);
  const data = await url.json()
  console.log(data)
  
//   fetch("https://recipe-book2.p.rapidapi.com/categories", options)
//     .then((res) => res.json())
//     .then((responde) => {
//       console.log(responde);
//     });