import { Component, OnInit } from '@angular/core';
import { NouvelleEditionService } from 'src/app/services/nouvelle-edition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-edition',
  templateUrl: './nouvelle-edition.component.html',
  styleUrls: ['./nouvelle-edition.component.css']
})
export class NouvelleEditionComponent implements OnInit {
  file;
  constructor(private nouvelleEditionService: NouvelleEditionService, private router: Router) { }

  ngOnInit() {
  }
  sections = [];
  changeFile(files){
    //console.log(files);
    this.file = files[0];
  }
  ajouterSection(titre, description)
  {
    const formData = new FormData();
    formData.append('titre', titre);
    formData.append('description', description);
    formData.append('file', this.file);
    //this.sections = [titre, description]
    this.sections.push({titre: titre, description: description, image: this.file});


  }

 
  
  ajouterEdition(date, numero) {

   // const edition= { date, numero, section }
   let edition = { numero: numero, date: date, sections: this.sections }
  
    this.nouvelleEditionService.ajouterEdition(edition).subscribe(
      (data) => {
        console.log("tableau trouvé", edition.sections[0]);

        //this.router.navigateByUrl('/accueil-admin')
        alert(' Edition ajouté avec succes');


      },
      (error) => {
        alert('Pas ajouté réessayer ')
      }
    )

  }
}
