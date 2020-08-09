import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThrowStmt } from '@angular/compiler';

declare let TradingView: any;

@Component({
  selector: 'app-company-graph',
  templateUrl: './company-graph.component.html',
  styleUrls: ['./company-graph.component.css'],
  // providers: [DataService]
})


export class CompanyGraphComponent implements OnInit, DoCheck, AfterViewInit {

  tickerPrev: string = '';
  ticker: string = '';
  exchange: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentTicker.subscribe(ticker => this.ticker = ticker)
  }

  ngAfterViewInit() {
    new TradingView.widget({
      // "width": 580,
      // "height": 190,
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "America/Los_Angeles",
      "theme": "light",
      "style": "3",
      "locale": "uk",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": true,
      "container_id": "chart"
      });
  }

  ngDoCheck() {
    if (this.ticker === 'default ticker' || this.ticker === this.tickerPrev) {
    } else {
      new TradingView.widget({
        // "width": 580,
        // "height": 190,
        "autosize": true,
        "symbol": "NASDAQ:" + this.ticker,
        "interval": "D",
        "timezone": "America/Los_Angeles",
        "theme": "light",
        "style": "3",
        "locale": "uk",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": true,
        "container_id": "chart"
        }); 
        this.tickerPrev = this.ticker;
    }
  }

  // ngAfterViewInit() {

  //   new TradingView.widget({
  //   "width": 580,
  //   "height": 190,
  //   "symbol": "NASDAQ:AAPL",
  //   "interval": "D",
  //   "timezone": "America/Los_Angeles",
  //   "theme": "light",
  //   "style": "3",
  //   "locale": "uk",
  //   "toolbar_bg": "#f1f3f6",
  //   "enable_publishing": false,
  //   "hide_top_toolbar": true,
  //   "hide_legend": true,
  //   "allow_symbol_change": true,
  //   "container_id": "chart"
  //   });    
  // }

  //   @Output() displayChart() {
  //     new TradingView.widget({
  //     "width": 580,
  //     "height": 190,
  //     "symbol": "NASDAQ:" + this.ticker,
  //     "interval": "D",
  //     "timezone": "America/Los_Angeles",
  //     "theme": "light",
  //     "style": "3",
  //     "locale": "uk",
  //     "toolbar_bg": "#f1f3f6",
  //     "enable_publishing": false,
  //     "hide_top_toolbar": true,
  //     "hide_legend": true,
  //     "allow_symbol_change": true,
  //     "container_id": "chart"
  //     }); 
  // }
}



// <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
// <script type="text/javascript"></script>