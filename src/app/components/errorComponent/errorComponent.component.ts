import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './errorComponent.component.html',
  selector: 'app-error-component',
  styleUrls: ['./errorComponent.component.scss'],
})


export class ErrorComponent implements OnInit {
  @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void {}
}
