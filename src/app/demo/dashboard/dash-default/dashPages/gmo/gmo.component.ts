import { Component, OnInit } from '@angular/core';
import { SupportChartData1 } from './../../chart/support-chart-data-1';
import { ChartDB } from 'src/app/fack-db/chart-data';
import {SeoChart2} from '../../chart/seo-chart-2';
import {TopClient} from '../../chart/topClient';
import { LogigramCommerce } from '../../chart/logigramScale';

@Component({
  selector: 'app-gmo',
  templateUrl: './gmo.component.html',
  styleUrls: ['./gmo.component.scss']
})
export class GmoComponent implements OnInit {
  public chartDB: any;
  public indiceVente : any;
  public topClient : any;
  public supportChartData1 : any;
  public logigram : any;


  constructor() {
    this.chartDB = ChartDB
    this.indiceVente = SeoChart2.seoChartData
    this.topClient = TopClient.topClient
    this.supportChartData1 = SupportChartData1.supportChartData
    this.logigram = LogigramCommerce.logigramCommerce

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
