// Load data of recent monitoring table
Monitorings.reverse().forEach((monitoring) => {
  const tr = document.createElement("tr");
  // const shippingColor =
  //   monitoring.shipping === "Recusado"
  //     ? "danger"
  //     : monitoring.shipping === "Pendente"
  //     ? "warning"
  //     : "primary";
  const trContent = `
      <td>${monitoring.system_specifications.hostname}</td>
      <td>${monitoring.system_specifications.platform} ${monitoring.system_specifications["platform-release"]}</td>
      <td>${monitoring.execution_time}</td>
      <td class="">${monitoring.networking_info.ip_v4}</td>
      <td class="info">
        <a href="#">
          <span class="material-icons-sharp">info</span>
        </a>
      </td>
    `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody#recentMonitoring").appendChild(tr);
});
