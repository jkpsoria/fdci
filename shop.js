const ajaxGet = (endpoint, method) => {
  const baseUrl = "https://fakestoreapi.com/";
  return $.ajax({
    url: baseUrl + endpoint,
    method: method,
    dataType: "json",
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log(error);
    },
  });
};

const createCard = (product) => {
  return `<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="p-8 rounded-t-lg h-80 w-80 m-auto object-cover" src="${product.image}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
          <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 ">5.0</span>
      </div>
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$ ${product.price}</span>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Add to cart</a>
      </div>
  </div>
</div>`;
};

const getProducts = () => {
  ajaxGet("products", "GET").then((data) => {
    const cards = $(data)
      .map((index, product) => {
        return createCard(product);
      })
      .get();

    $("#dataShop").append(cards);
  });
};

getProducts();
