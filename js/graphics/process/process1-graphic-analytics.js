const process1CpuGraphicCanvas = document
  .getElementById("process1-cpu-percent")
  .getContext("2d");

const process1RamGraphicCanvas = document
  .getElementById("process1-ram-percent")
  .getContext("2d");

const themeToggler4 = document.querySelector(".theme-toggler");

let process1CpuGraphic = null;
let process1RamGraphic = null;

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
          data: [4.7, 95.3],
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
          data: [0.14, 99.86],
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

  process1CpuGraphic = new Chart(process1CpuGraphicCanvas, cpuPercentConfig);
  process1RamGraphic = new Chart(process1RamGraphicCanvas, ramPercentConfig);
});

//Change Doughnut graphic color by Theme
themeToggler4.addEventListener("click", () => {
  const colorLegend = Chart.defaults.color;
  const colorDoughnut = process1CpuGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#666";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  // Change legend color
  Chart.defaults.color =
    colorLegend === colorLegendDark ? colorLegendLight : colorLegendDark;

  //Change graphic background color
  process1CpuGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  process1RamGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  process1CpuGraphic.update();
  process1RamGraphic.update();
});
