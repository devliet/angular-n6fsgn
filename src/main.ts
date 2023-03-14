import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApphelloworldComponent } from './apphelloworld/apphelloworld.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ApphelloworldComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
   
      <app-apphelloworld title=""></app-apphelloworld>
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
