import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.css'
})
export class NouvelArticleComponent implements OnInit{
  ngOnInit(): void {
  }

}
