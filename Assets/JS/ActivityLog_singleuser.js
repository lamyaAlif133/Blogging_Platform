const logs = [
    { date: '2025-04-25', action: 'Login', details: 'User logged in' },
    { date: '2025-04-26', action: 'Create Post', details: 'Created "My First Blog"' },
    { date: '2025-04-27', action: 'Edit Post', details: 'Edited "My First Blog"' },
    { date: '2025-04-28', action: 'Delete Post', details: 'Deleted "Old Draft"' },
];

function loadLogs(data) {
    const tbody = document.querySelector("#logsTable tbody");
    tbody.innerHTML = "";
    data.forEach(log => {
        const row = `<tr>
            <td>${log.date}</td>
            <td>${log.action}</td>
            <td>${log.details}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function applyFilters() {
    const dateFilter = document.getElementById('filterDate').value;
    const actionFilter = document.getElementById('filterAction').value;
    let filtered = logs;
    
    if (dateFilter) {
        filtered = filtered.filter(log => log.date === dateFilter);
    }
    if (actionFilter) {
        filtered = filtered.filter(log => log.action === actionFilter);
    }

    loadLogs(filtered);
}

function resetFilters() {
    document.getElementById('filterDate').value = '';
    document.getElementById('filterAction').value = '';
    loadLogs(logs);
}

function exportLogs() {
    let csv = "Date,Action,Details\n";
    const rows = document.querySelectorAll("#logsTable tbody tr");
    
    rows.forEach(row => {
        const cols = row.querySelectorAll("td");
        const rowData = Array.from(cols).map(td => td.textContent).join(",");
        csv += rowData + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activity_logs.csv";
    a.click();
    window.URL.revokeObjectURL(url);
}


loadLogs(logs);