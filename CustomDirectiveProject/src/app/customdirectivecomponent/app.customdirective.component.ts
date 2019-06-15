import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customdirective-component',
    template: `
      <table class="table table-bordered table-striped">
        <tr>
          <td>
           <input type="radio"  name="color" (click)='color="red"'>Red 
          </td>
          <td>
          <input type="radio" name="color" (click)='color="blue"'>Blue 
         </td>
         <td>
         <input type="radio" name="color" (click)='color="yellow"'>Yellow 
        </td>
        </tr>
      <table>
      <hr/>
      <div class="container" [setColor]="color">First Div</div>
      <br/>
      <div class="container" [setColor]="color">Second Div</div>
      <br/>
      <div class="container" [setColor]="color">Third Div</div>
      <br/>
    ` 
})
export class CustomDirectiveComponent implements OnInit {
    color: string;
    constructor() { 
        this.color = '';
    }

    ngOnInit(): void { }
}