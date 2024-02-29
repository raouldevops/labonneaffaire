import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labonneaffaire';
  prix = 20000;
  message !: string;

  affiche(articleItem: string) {
    return this.message = "Merci d'avoir voté pour "+articleItem;
  }
}
