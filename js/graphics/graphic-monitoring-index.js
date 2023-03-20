const graphicCanvas = document
  .getElementById("monitoringChart")
  .getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  const data = {
    labels: [
      "Outubro",
      "Novembro",
      "Dezembro",
      "Janeiro",
      "Fevereiro",
      "Março",
    ],
    datasets: [
      {
        label: "Indice de Monitoramento",
        data: [3, 75, 65, 100, 120, 200],
        backgroundColor: "#7380ec",
        borderColor: "#7380ec",
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
  };

  const myGraphic = new Chart(graphicCanvas, config);
});
