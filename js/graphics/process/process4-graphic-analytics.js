const process4CpuGraphicCanvas = document
  .getElementById("process4-cpu-percent")
  .getContext("2d");

const process4RamGraphicCanvas = document
  .getElementById("process4-ram-percent")
  .getContext("2d");

const themeToggler7 = document.querySelector(".theme-toggler");

let process4CpuGraphic = null;
let process4RamGraphic = null;

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

  process4CpuGraphic = new Chart(process4CpuGraphicCanvas, cpuPercentConfig);
  process4RamGraphic = new Chart(process4RamGraphicCanvas, ramPercentConfig);
});

//Change Doughnut graphic color by Theme
themeToggler7.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = process4CpuGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  process4CpuGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  process4RamGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  process4CpuGraphic.update();
  process4RamGraphic.update();
});
