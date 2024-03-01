import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id:1,
      titreArticle :"velo",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/velo.webp",
      description : "En parfaite état",
      disponibilite : true
    },
    {
      id:2,
      titreArticle :"Télévision",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/tv.webp",
      description : "Au bon prix",
      disponibilite : false
    },
    {
      id:3,
      titreArticle :"Lit",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/lit.jpg",
      description : "Super confortable",
      disponibilite : true
    },
    {
      id:4,
      titreArticle :"Télévision",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/tv.webp",
      description : "Au bon prix",
      disponibilite : false
    },
    {
      id:5,
      titreArticle :"Lit",
      prixArticle :2000,
      altImage : "productImage",
      imageSrc : "../assets/lit.jpg",
      description : "Super confortable",
      disponibilite : true
    }
  ];
  constructor() { }

  getArticle(id: number){
    const article = this.listeArticles.find((a) => {return a.id == id});
    return article;
  }
}
