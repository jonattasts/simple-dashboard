// Load data of monitoring cards
Monitorings.reverse().forEach((monitoring) => {
  const card = document.createElement("div");
  card.classList.add("card");

  let users = ``;

  monitoring.users_info.forEach((user) => {
    users += `
        <div class="user">
            <div class="name">
                <span class="material-icons-sharp">person_outline</span>
                <p>${user.name}</p>
            </div>

            <div class="time-boot">
                <span class="material-icons-sharp">schedule</span>
                <p>${user.boot_time_user}</p>
            </div>
        </div>
    `;
  });

  const cardContent = `
    <div class="card">
        <div class="header">
            <img src="./assets/computer.png" alt="Item de monitoramento" />
            <h2>${monitoring.system_specifications.hostname}</h2>
        </div>

        <div class="content">
            <div class="networking-info">
                <h3>Rede</h3>
                <p>
                    <span>IP V4: </span>${monitoring.networking_info.ip_v4}<br />
                    <span>MÁSCARA V4: </span>${monitoring.networking_info.mask_v4}<br />
                    <span>IP V6: </span>${monitoring.networking_info.ip_v6}<br />
                    <span>MÁSCARA V6: </span>${monitoring.networking_info.mask_v6}<br />
                    <span>BYTES ENVIADOS: </span>${monitoring.networking_info.bytes_sent}<br />
                    <span>BYTES RECEBIDOS: </span>${monitoring.networking_info.bytes_recv}<br />
                </p>
            </div>

            <div class="users">
                <h3>Usuários</h3>

                ${users}
            </div>

            <div class="system-specifications">
                <h3>Especificações do sistema</h3>
                <p>
                    <span>HOSTNAME: </span>${monitoring.system_specifications.hostname}<br />
                    <span>PROCESSADOR: </span>${monitoring.system_specifications.processor}<br />
                    <span>SISTEMA OPERACIONAL: </span>${monitoring.system_specifications.platform} ${monitoring.system_specifications["platform-release"]}
                    <br />
                    <span>RAM: </span>${monitoring.system_specifications.ram}<br />
                    <span>DISCO RÍGIDO: </span>${monitoring.partitions[0].disk_usage_total}<br />
                    <span>ARQUITERURA: </span>${monitoring.system_specifications.architecture}<br />
                </p>
            </div>
        </div>

        <div class="time-execution primary">
            <span class="material-icons-sharp">calendar_month</span>${monitoring.execution_time}
        </div>
    </div>`;

  card.innerHTML = cardContent;
  document.querySelector(".monitoring-cards").appendChild(card);
});
