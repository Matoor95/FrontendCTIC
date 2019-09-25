import { Component, OnInit } from '@angular/core';
import { NouvelleEditionService } from 'src/app/services/nouvelle-edition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-edition',
  templateUrl: './nouvelle-edition.component.html',
  styleUrls: ['./nouvelle-edition.component.css']
})
export class NouvelleEditionComponent implements OnInit {

  constructor(private nouvelleEditionService: NouvelleEditionService, private router: Router) { }

  ngOnInit() {
  }
  sections = [];
  ajouterSection(titre, description)
  {
    //this.sections = [titre, description]
    this.sections.push({titre: titre, description: description});
    //console.log("tableau", this.sections);

  }
  
  ajouterEdition(date, numero, sections) {

   // const edition= { date, numero, section }
   let edition = { numero: numero, date: date, sections: this.sections }
  
    this.nouvelleEditionService.ajouterEdition(edition).subscribe(
      (data) => {
        console.log("tableauuu trouvé", edition.sections[0]);

        //this.router.navigateByUrl('/accueil-admin')
        alert(' Edition ajouté avec succes');


      },
      (error) => {
        alert('Pas ajouté réessayer ')
      }
    )

  }
}
