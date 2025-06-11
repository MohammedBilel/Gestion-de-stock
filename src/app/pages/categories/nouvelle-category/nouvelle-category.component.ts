import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-category',
  standalone: false,
  templateUrl: './nouvelle-category.component.html',
  styleUrl: './nouvelle-category.component.scss'
})
export class NouvelleCategoryComponent implements OnInit{
  
  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }

}
