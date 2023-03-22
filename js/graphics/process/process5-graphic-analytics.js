const process5CpuGraphicCanvas = document
  .getElementById("process5-cpu-percent")
  .getContext("2d");

const process5RamGraphicCanvas = document
  .getElementById("process5-ram-percent")
  .getContext("2d");

const themeToggler8 = document.querySelector(".theme-toggler");

let process5CpuGraphic = null;
let process5RamGraphic = null;

//Doughnut Graphic - MEMORY
document.addEventListener("DOMContentLoaded", () => {
  const backgroundColors = ["#7380ec", "rgba(255, 255, 255, 0.1)"];

  Chart.defaults.datasets.doughnut.cutout = "87%";

  const cpuPercentConfig = {
    type: "doughnut",
    data: {
      labels: [],
      datasets: [
        {
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
          borderColor: "transparent",
          borderWidth: [0, 0],
          borderRadius: Number.MAX_VALUE,
          data: [1.3, 98.7],
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

  const ramPercentConfig = {
    type: "doughnut",
    data: {
      labels: [],
      datasets: [
        {
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
          borderColor: "transparent",
          borderWidth: [0, 0],
          borderRadius: Number.MAX_VALUE,
          data: [0.12, 99.88],
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

  process5CpuGraphic = new Chart(process5CpuGraphicCanvas, cpuPercentConfig);
  process5RamGraphic = new Chart(process5RamGraphicCanvas, ramPercentConfig);
});

//Change Doughnut graphic color by Theme
themeToggler8.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = process5CpuGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  process5CpuGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  process5RamGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  process5CpuGraphic.update();
  process5RamGraphic.update();
});
