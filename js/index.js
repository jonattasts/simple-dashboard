const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show Sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//Close Sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Change Theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const shippingColor =
    order.shipping === "Recusado"
      ? "danger"
      : order.shipping === "Pendente"
      ? "warning"
      : "primary";
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${shippingColor}">${order.shipping}</td>
    <td class="info">
      <a href="#">
        <span class="material-icons-sharp">info</span>
      </a>
    </td>
  `;
  
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
