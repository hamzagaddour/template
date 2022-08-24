import { Logigram } from './../../chart/interfaces/Logigram';
import { TopClient } from './../../chart/topClient';
import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from '../../chart/support-chart-data-1';
import { SupportChartData2} from '../../chart/support-chart-data-2';
import { SeoChart1 } from '../../chart/seo-chart-1';
import { SeoChart2 } from '../../chart/seo-chart-2';
import { SeoChart3 } from '../../chart/seo-chart-3';
import { PowerCardChart1 } from '../../chart/power-card-chart-1';
import { PowerCardChart2 } from '../../chart/power-card-chart-2';
import { ChartDB } from 'src/app/fack-db/chart-data';
import { LogigramCommerce } from '../../chart/logigramScale';
import { RadialBar } from '../../chart/radialBar';
import { RadialBarTeams } from '../../chart/radialBarTeams';
import * as ApexCharts from 'apexcharts';


@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  public chartDB: any;
  public topClient : any
  public topClient2 : any
  public topClient3 : any
  public logigram : LogigramCommerce
  public radialBar : any
  public radialBarTeams : RadialBarTeams

  constructor() {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.chartDB = ChartDB
    this.topClient = TopClient.topClient
    this.topClient2 = TopClient.topClient
    this.topClient3 = TopClient.topClient
    this.logigram = LogigramCommerce.logigramCommerce
    this.radialBar = RadialBar.radialBar
    this.radialBarTeams = RadialBarTeams.radialBarTeams

  }

  ngOnInit() {
    this.logigram.series = [
      {
        name: "Net test",
        data: [44, 55, 57, 56, 61, 58, 63, 100 , 41, 52, 70, 99]
      },
      {
        name: "Revenue test",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 33, 44, 55]
      },
      {
        name: "Free Cash Flow test",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 90, 70, 80]
      }
    ]

  }


}
