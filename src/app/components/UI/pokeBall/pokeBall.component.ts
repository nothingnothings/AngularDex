import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './pokeBall.component.html',
  styleUrls: ['./pokeBall.component.scss'],
  selector: 'app-pokeball',
})
export class PokeBallComponent implements OnInit {
  @Input() isSpin!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
