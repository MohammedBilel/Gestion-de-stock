import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseur',
  standalone: false,
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent implements OnInit{

  constructor(private router:Router){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nouveauFournisseur() {
    this.router.navigate(['nouveaufournisseur']);
  }

}
