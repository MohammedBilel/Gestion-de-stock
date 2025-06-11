import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: false,
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  
  origin ='';
  constructor(private activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    })
  }

}
