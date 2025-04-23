import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./features/hero-section/hero-section.component";
import { FooterComponent } from "./features/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'logo-frontend';
}
