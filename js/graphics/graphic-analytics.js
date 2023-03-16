// Obtém o elemento canvas
const ramGraphicCanvas = document
  .getElementById("ram-percent")
  .getContext("2d");
const swapGraphicCanvas = document
  .getElementById("swap-percent")
  .getContext("2d");
const themeTogglerElement = document.querySelector(".theme-toggler");
let ramGraphic = null;
let swapGraphic = null;

document.addEventListener("DOMContentLoaded", () => {
  const backgroundColors = ["#7380ec", "rgba(255, 255, 255, 0.1)"];

  const configRam = {
    type: "doughnut",
    data: {
      labels: ["RAM"],
      datasets: [
        {
          backgroundColor: backgroundColors,
          borderColor: "transparent",
          data: [70, 30],
          hoverBackgroundColor: backgroundColors,
        },
      ],
    },
    options: {
      cutoutPercentage: 63,
      legend: {
        display: true,
        labels: {
          fontColor: "#edeffd",
          fontSize: 13,
          boxWidth: 15,
          pieceLabel: { mode: "percentage", render: "value" },
        },
      },
      animation: {
        animationRotate: true, // duration: 1000,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const label =
              tooltipItem.index === 0 ? data.labels[tooltipItem.index] : "Free";

            return (
              label + " : " + data.datasets[0].data[tooltipItem.index] + " %"
            );
          },
        },
      },
      plugins: {
        datalabels: {
          color: "#edeffd",
          font: {
            weight: "bold",
            size: 13,
          },
        },
      },
    },
  };

  const configSwap = {
    type: "doughnut",
    data: {
      labels: ["SWAP"],
      datasets: [
        {
          backgroundColor: backgroundColors,
          borderColor: "transparent",
          data: [30, 70],
          hoverBackgroundColor: backgroundColors,
        },
      ],
    },
    options: {
      cutoutPercentage: 63,
      legend: {
        display: true,
        labels: {
          fontColor: "#edeffd",
          fontSize: 13,
          boxWidth: 15,
          fontWeight: "bold",
        },
      },
      animation: {
        animationRotate: true, // duration: 1000,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const label =
              tooltipItem.index === 0 ? data.labels[tooltipItem.index] : "Free";

            return (
              label + " : " + data.datasets[0].data[tooltipItem.index] + " %"
            );
          },
        },
      },
      plugins: {
        datalabels: {
          color: "#edeffd",
          font: {
            weight: "bold",
            size: 13,
          },
        },
      },
    },
  };

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

  ramGraphic = new Chart(ramGraphicCanvas, configRam);
  swapGraphic = new Chart(swapGraphicCanvas, configSwap);
});

//Change graphic color by Theme
themeTogglerElement.addEventListener("click", () => {
  const colorLegend = ramGraphic.options.legend.labels.fontColor;
  const colorLabelGraphic = ramGraphic.options.plugins.datalabels.color;
  const colorDoughnut = ramGraphic.data.datasets[0].backgroundColor[1];

  const colorLegendLight = "#edeffd";
  const colorLegendDark = "#363949";
  const doughnutLight = "rgba(0, 0, 0, 0.1)";
  const doughnutDark = "rgba(255, 255, 255, 0.1)";

  //Change legend color
  ramGraphic.options.legend.labels.fontColor =
    colorLegend === colorLegendLight ? colorLegendDark : colorLegendLight;
  swapGraphic.options.legend.labels.fontColor =
    colorLegend === colorLegendLight ? colorLegendDark : colorLegendLight;

  //Change graphic label color
  ramGraphic.options.plugins.datalabels.color =
    colorLabelGraphic === colorLegendLight ? colorLegendDark : colorLegendLight;
  swapGraphic.options.plugins.datalabels.color =
    colorLabelGraphic === colorLegendLight ? colorLegendDark : colorLegendLight;

  //Change graphic background color
  ramGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;
  swapGraphic.data.datasets[0].backgroundColor[1] =
    colorDoughnut === doughnutLight ? doughnutDark : doughnutLight;

  ramGraphic.update();
  swapGraphic.update();
});
