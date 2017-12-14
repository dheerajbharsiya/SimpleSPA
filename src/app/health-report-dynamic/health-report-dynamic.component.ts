import { Component, OnInit } from '@angular/core';
import { HealthData } from '../data/healthData';
import { HealthDataEstimated } from '../data/healthData';
@Component({
  selector: 'app-health-report-dynamic',
  templateUrl: './health-report-dynamic.component.html',
  styleUrls: ['./health-report-dynamic.component.scss']
})
export class HealthReportDynamicComponent implements OnInit {

  public options: any;
  constructor() {
    this.renderChart();
  }

  ngOnInit() {
  }

  renderChart() {
    this.options = {
      chart: {
        type: "column"
      },
      title: {
        text: "Health Report"
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
          text: "Scores"
        }
      },
      tooltip: {
        pointFormatter: function () {
          var s = '<b>';
          if (this.y < 35) {
            s += 'Baseline Story Points have not been deliverd'
          } else {
            s += 'Point Delivered ' + this.y;
          }

          s += '</b>';
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
          zones: [{
            value: 35, // Values up to 10 (not including) ...
            color: 'red' // ... have the color blue.
          }, {
            value: 39,
            color: '#FFBF00' // Values from 10 (including) and up have the color red
          },
          {
            color: 'green' // Values from 10 (including) and up have the color red
          }]
        }
      },
      series: [{
        name: 'Sprints',
        data: HealthData
      },
      {
        type: 'spline',
        name: 'Estimated Points',
        data: HealthDataEstimated,
        tooltip: {
          pointFormatter: function () {
            return "Estimated Value: " + this.y
          }
        }
      }]
    }
  }

}
