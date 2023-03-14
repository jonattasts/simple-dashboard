const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const themeToggler = document.querySelector(".theme-toggler");
const sideBarItem = document.querySelector(".sidebar a");
const returnToTop = document.getElementById("return-to-top");

function getNameBrowser() {
  let browser = "";

  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) !== -1
  ) {
    browser = "Opera";
  } else if (navigator.userAgent.indexOf("Edg") !== -1) {
    browser = "Edge";
  } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    browser = "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") !== -1) {
    browser = "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    browser = "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
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

// Scroll to Top
window.addEventListener("scroll", (event) => {
  height = window.scrollY;

  if (height >= 200) {
    returnToTop.style.display = "block";
  } else {
    returnToTop.style.display = "none";
  }
});

returnToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// window.addEventListener("resize", () => {
//   width = document.body.clientWidth;

//   console.clear();
//   console.log(width);
// });
