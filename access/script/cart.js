const table = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("cart"));

const Total = document.querySelectorAll(".total");

const payment = document
  .getElementById("payment")
  .addEventListener("click", () => {
    localStorage.clear();
  });

function render_table() {
  table.innerHTML = ``;
  let sum = 0;
  if (data === null || data.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "Chưa có sản phẩm";
    td.style.textAlign = "center";

    tr.appendChild(td);
    table.appendChild(tr);

    Total.textContent = "0đ";
    return;
  }
  data.forEach((item, index) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ""));
    const total = item.quantity * priceNum;
    sum += total;

    const tr = document.createElement("tr");
    tr.classList.add("cart-item");
    tr.innerHTML = `

              <td class="product-name">${item.name}</td>
              <td>
                <img
                  src="${item.img}"
                  alt="${item.name}"
                  class="cart-item__image"
                />
              </td>
              <td class="product-price">${item.price}</td>
              <td>
                <button class="cart-item__qty-btn decrease">-</button>
                <span class="cart-item__qty">${item.quantity}</span>
                <button class="cart-item__qty-btn increase">+</button>
              </td>
              <td class="product-price">${
                total.toLocaleString("vi-VN") + "đ"
              }</td>
              <td>
                <button type="button" class="cart-item__remove delete">
                  <!-- SVG icon thùng rác -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-2"
                  >
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </td>

    `;

    tr.querySelector(".increase").addEventListener("click", () => {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(data));
      render_table();
    });
    tr.querySelector(".decrease").addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        if (confirm("Xóa sản phẩm khỏi giỏ hàng?")) {
          data.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(data));
      render_table();
    });
    tr.querySelector(".delete").addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        data.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(data));
      render_table();
    });

    table.appendChild(tr);
  });
  Total.forEach(
    (item) => (item.textContent = sum.toLocaleString("vi-VN") + " đ")
  );
}

render_table();
