import { Component, OnInit } from '@angular/core';
import { NouvelleEditionService } from 'src/app/services/nouvelle-edition.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  editions = []
  constructor(private nouvelleEditionService: NouvelleEditionService,) { }

  ngOnInit() {
    this.nouvelleEditionService.listeEdition().subscribe(
      (editions: any)=>{
        console.log('mes editions ',editions)
        this.editions = editions.message
      }
    )
  }

}
