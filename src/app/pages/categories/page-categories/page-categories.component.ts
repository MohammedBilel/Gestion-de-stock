import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  standalone: false,
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent implements OnInit  {

  constructor(private router:Router){}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}


nouvelCategory() : void {
  this.router.navigate(['nouvellecategorie']);
}

}
