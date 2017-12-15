import { Component, OnInit } from '@angular/core';
import { HealthData } from '../data/healthData';

export function createPopup() {
  var popup = open("", "Popup", "width=300,height=200");
  var txtOk = popup.document.createElement("TEXTAREA");
  var aOk = popup.document.createElement("a");
  aOk.innerHTML = "Click here";

  popup.document.body.appendChild(txtOk);
  popup.document.body.appendChild(aOk);
}


@Component({
  selector: 'app-healthreport',
  templateUrl: './healthreport.component.html',
  styleUrls: ['./healthreport.component.scss']
})

export class HealthreportComponent implements OnInit {
  private options: any;
  constructor() {
    console.log(HealthData);
    this.renderGraph();
  }


  ngOnInit() {

  }

  public renderGraph() {
    this.options = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Health Report'
      },
      xAxis: {
        title: {
          text: 'Sprints-->'
        },
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e %b',
        },
        tickInterval: 3600 * 1000 * 24 * 15,
        tickmarkPlacement: 'on'
      },
      yAxis: {
        title: {
          text: 'Story Points'
        },
        text: 'Points'
      },

      legend: {
        enabled: true
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
        type: 'column',
        name: 'Actual',
        colorByPoint: true,
        point: {
          events: {
            click: function () {
              //createPopup();
              alert('Here it can be into a good looking popup');
            }
          }
        },

        tooltip: {
          pointFormatter: function () {
            var s = '<b>';
            if (this.y < 35) {
              s += 'Estimated Story Points have not been deliverd'
            } else {
              s += 'Point Delivered ' + this.y;
            }

            s += '</b>';
            return s;
          },
          //shared: true
        },
        data: [
          {
            name: 'Points Achieved',
            y: 40,
            healthParams: 'good'
          },
          {
            name: 'Points Achieved',
            y: 38
          },
          {
            name: 'Points Achieved',
            y: 20
          },
          {
            name: 'Points Achieved',
            y: 30
          },
          {
            name: 'Points Achieved',
            y: 10
          },
          {
            name: 'Points Achieved',
            y: 20
          }
        ],
        pointStart: Date.UTC(2017, 1, 1),
        pointInterval: 24 * 3600 * 1000 * 15
      },
      {
        type: 'spline',
        name: 'Average',
        data: [40, 45, 50, 40, 50, 60],
        pointStart: Date.UTC(2017, 1, 1),
        pointInterval: 24 * 3600 * 1000 * 15,
        tooltip: {
          pointFormatter: function () {
            return "Estimated Value" + this.y
          }
        }
      }
      ],
      // drilldown: {
      //   series: [{
      //     id: 'animals',
      //     data: [
      //       ['Cats', 4],
      //       ['Dogs', 2],
      //       ['Cows', 1],
      //       ['Sheep', 2],
      //       ['Pigs', 1]
      //     ]
      //   }, {
      //     id: 'fruits',
      //     data: [
      //       ['Apples', 4],
      //       ['Oranges', 2]
      //     ]
      //   }, {
      //     id: 'cars',
      //     data: [
      //       ['Toyota', 4],
      //       ['Opel', 2],
      //       ['Volkswagen', 2]
      //     ]
      //   }]
      // }
    }
  }

}
