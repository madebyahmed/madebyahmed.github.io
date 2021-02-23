var d = new Date(),
  month = new Array();
(month[0] = "January"),
  (month[1] = "February"),
  (month[2] = "March"),
  (month[3] = "April"),
  (month[4] = "May"),
  (month[5] = "June"),
  (month[6] = "July"),
  (month[7] = "August"),
  (month[8] = "September"),
  (month[9] = "October"),
  (month[10] = "November"),
  (month[11] = "December");
var month_name = month[d.getMonth()],
  day_of_month = d.getDate(),
  current_year = d.getFullYear(),
  dayOfMonthElement = document.getElementById("current_day"),
  currentMonthElement = document.getElementById("current_month"),
  currentYearElement = document.getElementById("current_year");
!(function () {
  (currentMonthElement.innerHTML = month_name),
    (dayOfMonthElement.innerHTML = day_of_month),
    (currentYearElement.innerHTML = current_year);
})();



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var cty = document.getElementById("Chart").getContext('2d');
var Chart = new Chart(cty, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  }
});
