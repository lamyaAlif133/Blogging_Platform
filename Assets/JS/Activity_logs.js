
const logs = [
  { date: "2025-04-27", user: "john_doe", action: "Login" },
  { date: "2025-04-27", user: "jane_smith", action: "Post Created" },
  { date: "2025-04-28", user: "john_doe", action: "Commented" },
  { date: "2025-04-28", user: "alice", action: "Post Deleted" },
];

const tableBody = document.querySelector("#logsTable tbody");

function renderLogs(logsToRender) {
  tableBody.innerHTML = "";
  logsToRender.forEach(log => {
    const row = `<tr>
      <td>${log.date}</td>
      <td>${log.user}</td>
      <td>${log.action}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function applyFilters() {
  const filterDate = document.getElementById("filterDate").value;
  const filterUser = document.getElementById("filterUser").value.toLowerCase();
  const filterAction = document.getElementById("filterAction").value;

  const filteredLogs = logs.filter(log => {
    return (!filterDate || log.date === filterDate) &&
           (!filterUser || log.user.toLowerCase().includes(filterUser)) &&
           (!filterAction || log.action === filterAction);
  });

  renderLogs(filteredLogs);
}

function exportLogs() {
  let csvContent = "data:text/csv;charset=utf-8,Date,User,Action\n";
  logs.forEach(log => {
    csvContent += `${log.date},${log.user},${log.action}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "activity_logs.csv");
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
}

renderLogs(logs);