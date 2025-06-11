import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  standalone: false,
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent implements OnInit {

  constructor( private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  cancel() {
  this.router.navigate(['utilisateurs']);
  }

}
