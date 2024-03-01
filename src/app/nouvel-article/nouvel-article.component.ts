import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class NouvelArticleComponent implements OnInit{

  titreArticle?:string = "";
  prixArticle?:number = 0;
  imageSrc?: string = "";

  ngOnInit(): void {
  }

  creerArticle(){
    console.log(this.titreArticle)
  }

}
