import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './NavigationItem.component.html',
  styleUrls: ['./NavigationItem.component.scss'],
  selector: 'app-navigation-item',
})
export class NavigationItemComponent implements OnInit {
  @Input() link!: string;
  @Input() text!: string;
  @Input() imagePath!: string;
  @Input() key!: string;

  constructor() {}

  ngOnInit(): void {}
}
