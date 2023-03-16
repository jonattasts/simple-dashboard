const graphicCanvas = document
  .getElementById("monitoringChart")
  .getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  const labels = [
    "Outubro",
    "Novembro",
    "Dezembro",
    "Janeiro",
    "Fevereiro",
    "Março",
  ];

  const datasets = [
    {
      label: "Indice de Monitoramento",
      data: [3, 75, 65, 100, 120, 200],
      backgroundColor: "#7380ec",
      borderColor: "#7380ec",
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const config = {
    type: "line",
    data: data,
  };

  const myGraphic = new Chart(graphicCanvas, config);
});
