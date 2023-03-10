const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const themeToggler = document.querySelector(".theme-toggler");

function getNameBrowser() {
  let browser = "";

  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    browser = "Opera";
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    browser = "Edge";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    browser = "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    browser = "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    browser = "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    browser = "IE";
  } else {
    browser = "unknown";
  }

  return browser;
}

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
  document.body.classList.toggle("light-theme");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Load orders on recent orders table
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
  document.querySelector("table tbody#recentOrders").appendChild(tr);
});

// Verify Browser type to render correct input date
document.addEventListener("DOMContentLoaded", () => {
  const browser = getNameBrowser();
  const initRangeDate = document.getElementById("initRangeDate");
  const limitRangeDate = document.getElementById("limitRangeDate");

  if (browser === "Firefox") {
    initRangeDate.type = "date";
    initRangeDate.min = "2022-10-01";
    initRangeDate.value = "2022-10-01";

    limitRangeDate.type = "date";
    limitRangeDate.min = "2022-11-01";
    limitRangeDate.value = "2023-03-10";
  }
});
