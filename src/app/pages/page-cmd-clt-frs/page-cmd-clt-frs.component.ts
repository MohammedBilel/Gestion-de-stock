import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: false,
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.scss'
})
export class PageCmdCltFrsComponent implements OnInit{

  origin = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin']
    })
  }

  nouvelleCommande(): void {
    if (this.origin === 'client') {
       this.router.navigate(['nouvellecommandesclient']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouvellecommandesfournisseur']);
    }
    
  }

}
