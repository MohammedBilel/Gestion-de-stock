import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  standalone: false,
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit {

constructor(private router:Router){}  

ngOnInit(): void {
  throw new Error('Method not implemented.');
}



nouvelClient() {
  this.router.navigate(['nouveauclient']);
}

}
