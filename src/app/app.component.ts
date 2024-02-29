import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  message !: string;
  articles = [
    {
      titreArticle :"velo",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/velo.webp",
      description : "En parfaite état",
      disponibilite : true
    },
    {
      titreArticle :"Télévision",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/tv.webp",
      description : "Au bon prix",
      disponibilite : false
    },
    {
      titreArticle :"Lit",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/lit.jpg",
      description : "Super confortable",
      disponibilite : true
    }
  ];
  ngOnInit(): void {
    console.log(this.articles);
  }
  affiche(articleItem: string) {
    return this.message = "Merci d'avoir voté pour "+articleItem;
  }
}
