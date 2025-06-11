import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: false,
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrl: './nouvel-utilisateur.component.scss'
})
export class NouvelUtilisateurComponent implements OnInit {

  constructor( private router: Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }

}
