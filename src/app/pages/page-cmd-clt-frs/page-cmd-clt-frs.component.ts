import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: false,
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.scss'
})
export class PageCmdCltFrsComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nouvelleCommande(): void {
    this.router.navigate(['nouvellecommandesclient']);
  }

}
