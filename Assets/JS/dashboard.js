const ctx = document.getElementById('viewsChart').getContext('2d');
const viewsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Views',
      data: [120, 190, 300, 500, 200, 300, 400],
      backgroundColor: 'rgba(141, 175, 155, 0.2)',
      borderColor: '#688a65',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
