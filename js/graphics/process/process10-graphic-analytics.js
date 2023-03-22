const process10CpuGraphicCanvas = document
  .getElementById("process10-cpu-percent")
  .getContext("2d");

const process10RamGraphicCanvas = document
  .getElementById("process10-ram-percent")
  .getContext("2d");

const themeToggler13 = document.querySelector(".theme-toggler");

let process10CpuGraphic = null;
let process10RamGraphic = null;

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
          data: [0.8, 99.2],
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
          data: [0.78, 99.22],
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

  process10CpuGraphic = new Chart(process10CpuGraphicCanvas, cpuPercentConfig);
  process10RamGraphic = new Chart(process10RamGraphicCanvas, ramPercentConfig);
});

//Change Doughnut graphic color by Theme
themeToggler13.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = process10CpuGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  process10CpuGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  process10RamGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  process10CpuGraphic.update();
  process10RamGraphic.update();
});
