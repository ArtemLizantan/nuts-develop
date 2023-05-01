// async function addToCart(productId) {
//   const apiUrl = "http://localhost:1337"; // URL Strapi сервера
//   const product = await fetch(`${apiUrl}/api/products/${productId}`).then(
//     (res) => res.json()
//   );
//   console.log(product);

//   const response = await fetch(`${apiUrl}/api/carts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: {
//         id: product.id,
//       },
//     }),
//   });
//   const cartItem = await response.json();
//   console.log(cartItem);
// }

// addToCart(3);

//   const productsCards = document.querySelectorAll(".products__card");
//   const data = fetch("http://localhost:1337/api/carts?populate=deep")
//     .then((response) => response.json())
//     .then(({ data }) => console.log(data));



