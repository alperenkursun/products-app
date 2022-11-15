var idd = localStorage.getItem("idd");

$(document).ready(function () {
  $.get(
    "https://course-api.com/javascript-store-products",
    function (data, status) {
      $(".row").html("");
      var products = data;
      console.log(products);
      for (let i = 0; i < 12; i++) {
        if (products[i].id == idd) {
          var text = `
<div class="col-6">
<img src="${
            products[i].fields.image[0].url
          }" class="w-100" style="height: 500px" />
</div>
<div class="col-6 p-3 text-start">
<h3 class="text-capitalize">${products[i].fields.name}</h3>
<h4 class="text-muted fw-light text-capitalize">${
            products[i].fields.company
          }</h4>
<h5 class="fw-normal">$${priceedit(products[i].fields.price)}</h5>
<div class="d-flex">
<div
class="rounded-circle m-1"
style="width: 20px; height: 20px; background-color:${
            products[i].fields.colors[0]
          };"
></div>
<div
class="rounded-circle m-1"
style="width: 20px; height: 20px; background-color:${
            products[i].fields.colors[1]
          }!important"
></div>
<div
class="rounded-circle m-1"
style="width: 20px; height: 20px; background-color:${
            products[i].fields.colors[2]
          };"
></div>
</div>
<p class="mt-2">
Cloud bread VHS hell of banjo bicycle rights jianbing umami
mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
waistcoat, authentic chillwave trust fund. Viral typewriter
fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
kinfolk microdosing gochujang live-edge
</p>
<button class="btn btn-primary">Add To Cart</button>
</div>
`;

          $(".row").append(text);
        }
      }
    }
  );
  function priceedit(pricee) {
    return pricee.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
  }
});
