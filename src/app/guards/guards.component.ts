import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-guards',
    templateUrl: './guards.component.html',
    styleUrls: ['./guards.component.css'],
    standalone: true,
    imports: [RouterModule]
})
export class GuardsComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

   ngOnInit(): void {
     console.log('Resolve guard:::',this.activatedRoute.snapshot.data['userData']);
   }
}
