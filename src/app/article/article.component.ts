import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [FormsModule, NgStyle, NgIf, NgClass, CurrencyPipe],
  standalone: true,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  //titreArticle: string = "nom de l'article";
  //prixArticle: number = 12;

  @Output() message = new EventEmitter<string>();
  likes: number = 0;
  dislikes: number = 0;
  comment?: string;
  hideBtnLike: boolean = false;
  hideBtnDisLike: boolean = false;
  

  //parametrer les composants
  @Input() titreArticle!:string;
  @Input() prixArticle!:number;
  @Input() altImage!: string;
  @Input() imageSrc!: string;
  @Input() description!: string;
  @Input() disponibilite!: boolean;

  ngOnInit(): void {
    
  }

  onLike(){
    this.likes++;
    this.dislikes--;
    this.dislikes<=0 ? this.dislikes = 0 : this.dislikes; 
    this.addNewItem(this.titreArticle);
    this.hideBtnDisLike = true;
  }

  onDisLike(){
    this.dislikes++;
    this.likes--;
    this.likes<=0 ? this.likes = 0 : this.likes; 
    this.addNewItem(this.titreArticle);
    this.hideBtnLike = true;
  }

  addNewItem(value: string) {
    this.message.emit(value);
  }

  getColor() {
    return this.disponibilite ? "green" : "red";
  }

  hideLikeBtn() {
    return this.disponibilite ? "green" : "red";
  }
}
