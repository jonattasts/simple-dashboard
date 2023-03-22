const process2CpuGraphicCanvas = document
  .getElementById("process2-cpu-percent")
  .getContext("2d");

const process2RamGraphicCanvas = document
  .getElementById("process2-ram-percent")
  .getContext("2d");

const themeToggler5 = document.querySelector(".theme-toggler");

let process2CpuGraphic = null;
let process2RamGraphic = null;

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
          data: [4.0, 96],
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
          data: [0.19, 99.81],
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

  process2CpuGraphic = new Chart(process2CpuGraphicCanvas, cpuPercentConfig);
  process2RamGraphic = new Chart(process2RamGraphicCanvas, ramPercentConfig);
});

//Change Doughnut graphic color by Theme
themeToggler5.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = process2CpuGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  process2CpuGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  process2RamGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  process2CpuGraphic.update();
  process2RamGraphic.update();
});
