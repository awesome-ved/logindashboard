const ctx1 = document.getElementById('job_location').getContext('2d');
const job_location = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
        datasets: [{
            label: 'Salary',
            data: [80000, 75000, 49500, 47000, 46000, 34000],
            backgroundColor: [
                'rgb(5, 201, 152)'
            ],
            borderColor: [
                'rgb(5, 201, 152)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Revenue for November 2019',
                position: 'bottom',
            }
        },
        scales: {
           y:{
               grid:{
                   display:false
               }
           }
        }
    }
});


const ctx2 = document.getElementById('job_type').getContext('2d');
const myjob_type = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Service Plumbing', 'SeaBid Work HVAC', 'Service HVAC', 'HWT Replacement', 'Maintenance', 'Material Sale'],
        datasets: [{
            label: 'Salary',
            data: [180000, 130000, 80000, 75000, 48000, 45000],
            backgroundColor: [
                'rgb(5, 201, 152)'
            ],
            borderColor: [
                'rgb(5, 201, 152)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Revenue for November 2019',
                position: 'bottom',
            }
        },
        scales: {
           y:{
               grid:{
                   display:false
               }
           }
        }
    }
});
