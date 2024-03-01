import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id:1,
      titreArticle :"Beau vélo",
      prixArticle :70,
      altImage : "productImage",
      imageSrc : "../assets/velo.webp",
      description : "En parfaite état",
      disponibilite : true
    },
    {
      id:2,
      titreArticle :"Télévision",
      prixArticle :200,
      altImage : "productImage",
      imageSrc : "../assets/tv.webp",
      description : "Au bon prix",
      disponibilite : false
    },
    {
      id:3,
      titreArticle :"Lit",
      prixArticle :750,
      altImage : "productImage",
      imageSrc : "../assets/lit.jpg",
      description : "Super confortable",
      disponibilite : true
    },
    {
      id:4,
      titreArticle :"Maillot de Zidane",
      prixArticle :500,
      altImage : "productImage",
      imageSrc : "../assets/zizou.webp",
      description : "Authentique maillot de zizou",
      disponibilite : true
    },
    {
      id:5,
      titreArticle :"Ballon Barcelone FC",
      prixArticle :36,
      altImage : "productImage",
      imageSrc : "../assets/ballon.jpg",
      description : "Ideal pour un match de foot",
      disponibilite : true
    },
    {
      id:6,
      titreArticle :"Chaise sofa",
      prixArticle :36,
      altImage : "productImage",
      imageSrc : "../assets/chaise.jpg",
      description : "Parfait pour votre salon",
      disponibilite : true
    }
  ];
  
  constructor() { }

  getArticle(id: number){
    const article = this.listeArticles.find((a) => {return a.id == id});
    return article;
  }
}
