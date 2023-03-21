const ramGraphicCanvas = document
  .getElementById("ram-percent")
  .getContext("2d");
const swapGraphicCanvas = document
  .getElementById("swap-percent")
  .getContext("2d");

const themeToggler2 = document.querySelector(".theme-toggler");

let ramGraphic = null;
let swapGraphic = null;

const configOptions = {
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        if (context.dataIndex === 0) {
          let sum = context.dataset._meta[0].total;
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
        } else return "";
      },
    },
  },
};

//Doughnut Graphic - MEMORY
document.addEventListener("DOMContentLoaded", () => {
  const backgroundColors = ["#7380ec", "rgba(255, 255, 255, 0.1)"];

  Chart.defaults.datasets.doughnut.cutout = "87%";

  const ramConfig = {
    type: "doughnut",
    data: {
      labels: ["RAM"],
      datasets: [
        {
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
          borderColor: "transparent",
          borderWidth: [0, 0],
          borderRadius: Number.MAX_VALUE,
          data: [70, 30],
        },
      ],
    },
    options: {
      legend: {},
      animation: {
        animationRotate: true,
        duration: 1500,
      },
      plugins: {
        datalabels: {},
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  const swapConfig = {
    type: "doughnut",
    data: {
      labels: ["SWAP"],
      datasets: [
        {
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
          borderColor: "transparent",
          borderWidth: [0, 0],
          borderRadius: Number.MAX_VALUE,
          data: [30, 70],
        },
      ],
    },
    options: {
      legend: {},
      animation: {
        animationRotate: true,
        duration: 1500,
      },
      plugins: {
        datalabels: {},
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  ramGraphic = new Chart(ramGraphicCanvas, ramConfig);
  swapGraphic = new Chart(swapGraphicCanvas, swapConfig);
});

//Change Doughnut graphic color by Theme
themeToggler2.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = ramGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  ramGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  swapGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  ramGraphic.update();
  swapGraphic.update();
});
