import { Component, OnInit } from '@angular/core';
import { HealthData } from '../data/healthData';
import { HealthDataEstimated } from '../data/healthData';
import { element } from 'protractor';
@Component({
  selector: 'app-health-report-dynamic',
  templateUrl: './health-report-dynamic.component.html',
  styleUrls: ['./health-report-dynamic.component.scss']
})
export class HealthReportDynamicComponent implements OnInit {

  public options: any;
  public healthData = HealthData;
  constructor() {
    this.healthData = this.preProcessData(this.healthData);
    this.renderChart();
  }

  public preProcessData(data) {
    data.forEach(element => {
      if (element.defectCount > 10 || element.y < 30) {
        element['color'] = 'red'
      } else if (element.y < 39) {
        element['color'] = '#FFBF00'
      } else {
        element['color'] = 'green'
      }
    });
    return data;
  }

  ngOnInit() {
  }

  renderChart() {
    this.options = {
      chart: {
        type: "column"
      },
      credits: false,
      maintainAspectRatio: false,
      title: {
        text: "Health Report",
        style: {
          color: '#6d7fcc',
          fontWeight: 'bold'
        }
      },
      legend: {
        itemStyle: {
          fontSize: '14px',
          color: "#6d7fcc"
        }
      },
      xAxis: {
        type: 'category',
        allowDecimals: false,
        title: {
          text: ""
        }
      },
      yAxis: {
        title: {
          text: "Storie Points",
          style: {
            color: '#6d7fcc',
            fontWeight: 'bold'
          }
        }
      },
      tooltip: {
        pointFormatter: function () {
          let s = "";
          if (this.y < 35 || this.defectCount > 10) {
            s += this.tooltip
          } else {
            s += 'Point Delivered ' + this.y;
          }
          return s;
        }
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true
          }
        },
        column: {
          // zones: [{
          //   value: 35, // Values up to 10 (not including) ...
          //   color: 'red' // ... have the color blue.
          // }, {
          //   value: 39,
          //   color: '#FFBF00' // Values from 10 (including) and up have the color red
          // },
          // {
          //   color: 'green' // Values from 10 (including) and up have the color red
          // }]
        }
      },
      responsive: {
        rules: [{
            condition: {
                maxWidth: 768
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
                xAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -2
                    },
                    title: {
                        text: ''
                    }
                }
            }
        }]
    },
      series: [{
        name: 'Sprints',
        data: this.healthData
      },
      {
        type: 'spline',
        name: 'Number of Defects',
        data: HealthDataEstimated,
        tooltip: {
          pointFormatter: function () {
            return "Defects Count: " + this.y
          }
        }
      }]
    }
  }

}
