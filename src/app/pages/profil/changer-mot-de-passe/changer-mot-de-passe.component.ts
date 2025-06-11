import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: false,
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  cancel(): void {
    this.router.navigate(['profil'])
  }

}
