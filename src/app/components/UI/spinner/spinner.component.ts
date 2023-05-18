import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  templateUrl: './spinner.component.html',
  selector: 'app-spinner',
})
export class SpinnerComponent implements OnInit {
  @Input() isSpin!: boolean;

  constructor(public loader: LoaderService) {}

  ngOnInit(): void {}
}
