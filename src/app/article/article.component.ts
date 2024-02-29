import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  imports: [FormsModule],
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
  

  //parametrer les composants
  @Input() titreArticle!:string;
  @Input() prixArticle!:number;
  
  @Input() altImage!: string;
  @Input() imageSrc!: string;
  @Input() dispo!: boolean;

  ngOnInit(): void {
    
  }

  onLike(){
    this.likes++;
    this.dislikes--;
    this.dislikes<=0 ? this.dislikes = 0 : this.dislikes; 
    this.addNewItem(this.titreArticle);
  }

  onDisLike(){
    this.dislikes++;
    this.likes--;
    this.likes<=0 ? this.likes = 0 : this.likes; 
    this.addNewItem(this.titreArticle);
  }

  addNewItem(value: string) {
    this.message.emit(value);
  }
}
