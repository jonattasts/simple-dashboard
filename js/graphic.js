// Obtém o elemento canvas
const graficoCanvas = document.getElementById("monitoringChart").getContext("2d");

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
      backgroundColor: "#7380ec",
      borderColor: "#7380ec",
      data: [3, 5, 10, 7, 12, 15],
    },
  ];

  // Define os dados do gráfico
  const dados = {
    labels: labels,
    datasets: datasets,
  };

  // Configura o gráfico
  const config = {
    type: "line",
    data: dados,
  };

  // Cria o gráfico
  const myGraphic = new Chart(graficoCanvas, config);
});
