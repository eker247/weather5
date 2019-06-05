import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-chart-wide',
  templateUrl: './chart-wide.component.html',
  styleUrls: ['./chart-wide.component.scss']
})
export class ChartWideComponent implements OnInit {

  @Input() set chartData(nums: number[]) {
    this.chartValues = nums;
    this.drawChart();
  }

  @Input() chartDataLabel: string;
  @Input() chartLabels: string[];
  @Input() chartValuesLabel: string;
  @ViewChild('bigDashboardChart', {static: true}) bigDashboardChart: ElementRef<HTMLCanvasElement>;

  public chartValues: number[];
  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>;

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  public lineChartType;
  public lineChartOptions: any;
  public lineChartLabels: Array<any>;
  public lineChartColors: Array<any>;

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public hexToRGB(hex, alpha) {
    const
      r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.drawChart();
  }

  drawChart() {
    this.chartColor = '#FFFFFF';
    this.canvas = this.bigDashboardChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.lineBigDashboardChartData = [
      {
        label: this.chartValuesLabel || 'Data',

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: this.chartValues,
      }
    ];
    this.lineBigDashboardChartColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: '#2c2c2c',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartLabels = this.chartLabels;
    this.lineBigDashboardChartOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(255,255,255,0.4)',
            fontStyle: 'bold',
            beginAtZero: false,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgba(255,255,255,0.4)',
            fontStyle: 'bold'
          }
        }]
      }
    };

    this.lineBigDashboardChartType = 'line';


    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.lineChartColors = [
      {
        borderColor: '#f96332',
        pointBorderColor: '#FFF',
        pointBackgroundColor: '#f96332',
        backgroundColor: this.gradientFill
      }
    ];
    this.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.lineChartOptions = this.gradientChartOptionsConfiguration;

    this.lineChartType = 'line';
  }
}
