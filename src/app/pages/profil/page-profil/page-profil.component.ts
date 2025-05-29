import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  standalone: false,
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})

export class PageProfilComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  modifierMotDePasse() {
    this.router.navigate(['changermotdepasse']);
  }

}
