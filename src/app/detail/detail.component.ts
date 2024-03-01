import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit{
  id?:number;
  titreArticle?:string;
  prixArticle?:number;
  altImage?: string;
  imageSrc?: string;
  description?: string;
  comment :string = "Ceci est un commentaire";
  router? : Router;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ){}
    
   ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    const article = this.dataService.getArticle(id);

    
    this.titreArticle = article?.titreArticle;
    this.prixArticle = article?.prixArticle;
    this.altImage = article?.altImage;
    this.description = article?.description;
    this.imageSrc = article?.imageSrc;
   }

   
}
