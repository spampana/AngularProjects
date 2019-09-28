import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sep-home',
  templateUrl: './sep-home.component.html',
  styleUrls: ['./sep-home.component.css']
})
export class SepHomeComponent implements OnInit {

  constructor() { }
  title:string="Welcome to synechron Events Portal";
  subTitle:string="Designed and Developed by Synechron Developers";

  ngOnInit() {
  }

}
