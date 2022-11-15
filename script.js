$(document).ready(function () {
  $.get(
    "https://course-api.com/javascript-store-products",
    function (data, status) {
      $(".row").html("");
      var products = data;
      for (let i = 0; i < 12; i++) {
        var text = `
          <div id="${
            products[i].id
          }" class="col-4 text-center" onclick="pd(id)">
            <img src="${
              products[i].fields.image[0].url
            }" class="w-100 rounded" "/>
            <div class="text-secondary m-2 text-capitalize">${
              products[i].fields.name
            }</div>
            <div class="text-secondary m-2 fw-bold">$${priceedit(
              products[i].fields.price
            )}</div>
          </div>
          `;

        $(".row").append(text);
      }
    }
  );

  function priceedit(pricee) {
    return pricee.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  }
});

function pd(idd) {
  localStorage.setItem("idd", idd);
  location.href = "productdetails.html";
}
