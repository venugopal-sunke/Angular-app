import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.css'],
    standalone: true,
    imports: []
})

export class SignalsComponent implements OnInit {

    mySignal = signal(0);

    constructor() {
        effect(() => {
            console.log('Signal value changed constructor function:', this.mySignal());
        });
    }

    ngOnInit(): void {}

    increase() {
      this.mySignal.update(value => value + 1);
    }

}