import React, {Component} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Scale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Latinx', 'Caucasian', 'African American', 'Asian'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  class Chart extends Component{
      render(){
          return(
              <div class="chartBody">
                  <Doughnut
                  data={data}
                  options={{
                      title:{
                          display:true,
                          text:'Largest'
                      }
                  }}
                  >
                  </Doughnut>
              </div>
          )
      }
  }

  export default Chart;