import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  standalone: false,
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.scss'
})
export class NouveauCltFrsComponent implements OnInit{ 

  origin = '';
constructor( private activatedRoute : ActivatedRoute, private router : Router){

}
  
ngOnInit(): void {
  this.activatedRoute.data.subscribe(data => {
    this.origin = data['origin'];
  })
}


saveClick() {
throw new Error('Method not implemented.');
}


cancelClick() {
if (this.origin === 'client') {
  this.router.navigate(['clients']);
} else if (this.origin === 'fournisseur') {
  this.router.navigate(['fournisseurs']);
}
}

}
