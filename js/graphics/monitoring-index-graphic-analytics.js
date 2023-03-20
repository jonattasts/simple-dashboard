const monitoringIndexGraphicCanvas = document
  .getElementById("monitoringChart")
  .getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  const monitoringIndexConfig = {
    type: "line",
    data: {
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
    },
    options: {},
  };

  const monitoringIndexGraphic = new Chart(
    monitoringIndexGraphicCanvas,
    monitoringIndexConfig
  );
});
