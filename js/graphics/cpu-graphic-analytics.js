const cpuGraphicCanvas = document
  .getElementById("cpu-percent")
  .getContext("2d");

const themeToggler3 = document.querySelector(".theme-toggler");

let cpuGraphic = null;

document.addEventListener("DOMContentLoaded", () => {
  const cpuConfig = {
    type: "bar",
    data: {
      labels: [
        "Core Principal",
        "Core 0",
        "Core 1",
        "Core 2",
        "Core 3",
        "Core 4",
        "Core 5",
        "Core 6",
        "Core 7",
      ],
      datasets: [
        {
          label: ["CPU"],
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          backgroundColor: [
            "rgba(115, 128, 236, 0.2)",
            "rgba(115, 128, 236, 0.3)",
            "rgba(115, 128, 236, 0.4)",
            "rgba(115, 128, 236, 0.5)",
            "rgba(115, 128, 236, 0.6)",
            "rgba(115, 128, 236, 0.7)",
            "rgba(115, 128, 236, 0.8)",
            "rgba(115, 128, 236, 0.9)",
            "rgb(115, 128, 236)",
          ],
          hoverBackgroundColor: "rgba(115, 128, 236, 0.1)",
        },
      ],
    },
    options: {
      legend: {},
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.data[context.dataIndex] + "%";
            },
          },
        },
      },
      indexAxis: "y",
    },
  };

  const cpuGraphic = new Chart(cpuGraphicCanvas, cpuConfig);
});
