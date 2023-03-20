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

document.addEventListener("DOMContentLoaded", () => {
  const backgroundColors = ["#7380ec", "rgba(255, 255, 255, 0.1)"];

  Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
  Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function (ease) {
      var ctx = this.chart.chart.ctx;

      var easingDecimal = ease || 1;
      Chart.helpers.each(this.getDataset().metaData, function (arc, index) {
        arc.transition(easingDecimal).draw();

        var vm = arc._view;
        var radius = (vm.outerRadius + vm.innerRadius) / 2;
        var thickness = (vm.outerRadius - vm.innerRadius) / 2;
        var angle = Math.PI - vm.endAngle - Math.PI / 2;

        ctx.save();
        ctx.fillStyle = vm.backgroundColor;
        ctx.translate(vm.x, vm.y);
        ctx.beginPath();
        ctx.arc(
          radius * Math.sin(angle),
          radius * Math.cos(angle),
          thickness,
          0,
          2 * Math.PI
        );
        ctx.arc(
          radius * Math.sin(Math.PI),
          radius * Math.cos(Math.PI),
          thickness,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });
    },
  });

  const configRam = {
    type: "RoundedDoughnut",
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
      cutoutPercentage: 82,
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
        animationRotate: true,
        duration: 1500,
      },
      tooltips: {
        enabled: false,
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
    type: "RoundedDoughnut",
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
      cutoutPercentage: 82,
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
        animationRotate: true,
        duration: 1500,
      },
      tooltips: {
        enabled: false,
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
