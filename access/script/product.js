const minPriceSlider = document.getElementById("minPrice");
const maxPriceSlider = document.getElementById("maxPrice");
const minPriceValue = document.getElementById("minPriceValue");
const maxPriceValue = document.getElementById("maxPriceValue");
const sliderTrackActive = document.querySelector(".slider-track-active");
const sliderTrackContainer = document.querySelector(".slider-track-container");

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
    .format(amount)
    .replace("₫", "đ");
}

function updateSlider() {
  let minVal = parseInt(minPriceSlider.value);
  let maxVal = parseInt(maxPriceSlider.value);

  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
    minPriceSlider.value = minVal;
    maxPriceSlider.value = maxVal;
  }

  minPriceValue.textContent = formatCurrency(minVal);
  maxPriceValue.textContent = formatCurrency(maxVal);

  const rangeMax = parseInt(maxPriceSlider.max);
  const minPercent = (minVal / rangeMax) * 100;
  const maxPercent = (maxVal / rangeMax) * 100;

  sliderTrackActive.style.left = minPercent + "%";
  sliderTrackActive.style.width = maxPercent - minPercent + "%";
}

minPriceSlider.addEventListener("input", updateSlider);
maxPriceSlider.addEventListener("input", updateSlider);

updateSlider();

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalProductImage");
const modalTitle = document.getElementById("modalProductTitle");
const modalCategory = document.getElementById("modalProductCategory");
const modalPrice = document.getElementById("modalProductPrice");
const closeBtn = document.querySelector(".modal .close");

const viewButtons = document.querySelectorAll(".product-card .add-to-cart");

const addToCart = document.getElementById("addToCartModal");

let currentProduct = null;
viewButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".product-card");
    const img = card.querySelector("img").src;
    const title = card.querySelector(".product-title").textContent;
    const category = card.querySelector(".product-category").textContent;
    const price = card.querySelector(".product-price").textContent;

    modalImage.src = img;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalPrice.textContent = price;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    currentProduct = {
      img: img,
      name: title,
      price: price,
      quantity: 1,
    };
  });
});

addToCart.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item.name === currentProduct.name
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(currentProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
