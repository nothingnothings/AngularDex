import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './spinner.component.html',
  selector: 'app-spinner',
})
export class SpinnerComponent implements OnInit {
  @Input() isSpin!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
