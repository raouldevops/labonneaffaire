import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message !: string;
  articles : any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.articles = this.dataService.listeArticles;
  }
  affiche(articleItem: string) {
    return this.message = "Merci d'avoir voté pour "+articleItem;
  }

}
