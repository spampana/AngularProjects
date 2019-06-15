import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-about-component',
    template: `
      <h2>The About Component</h2>  
      <div>{{message}}</div>
      <br/>
      <input type="button" value="Navigate" (click)="navigateTo()"/> 
    ` 
})
export class AboutComponent implements OnInit {
    message: string;
    constructor(private router: Router, private act: ActivatedRoute) { 
        this.message = 'This is the About Component';
    }

    ngOnInit(): void { 
        this.act.params.subscribe((p) => {
            this.message += p.id;
        });
    }

    navigateTo(): void {
        this.router.navigate(['contact']);
    }
}