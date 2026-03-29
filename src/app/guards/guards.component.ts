import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-guards',
    templateUrl: './guards.component.html',
    styleUrls: ['./guards.component.css'],
    standalone: false
})
export class GuardsComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

   ngOnInit(): void {
     console.log('Resolve guard:::',this.activatedRoute.snapshot.data['userData']);
   }
}
