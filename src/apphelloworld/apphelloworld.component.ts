import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-apphelloworld',
  templateUrl: './apphelloworld.component.html',
  styleUrls: ['./apphelloworld.component.css'],
})
export class ApphelloworldComponent implements OnInit {
  title: string;
  constructor(title = 'ABCD') {
    this.title = title;
  }

  ngOnInit() {}
}
