import { Component, OnInit } from '@angular/core';
import { NouvelleEditionService } from 'src/app/services/nouvelle-edition.service';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { from } from 'rxjs';
@Component({
  selector: 'app-nouvelle-edition',
  templateUrl: './nouvelle-edition.component.html',
  styleUrls: ['./nouvelle-edition.component.css']
})
export class NouvelleEditionComponent implements OnInit {

  htmlContent = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '0',
    maxHeight: 'auto',
    width: '100%',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: '',
    sanitize: true,
    toolbarPosition: 'top',
  };
  file;
  sections: [{ title: String, description: String }];

  constructor(private nouvelleEditionService: NouvelleEditionService, private router: Router) { }
  ngOnInit() {
    this.sections = [{ title: '', description: '' }];
  }

  changeFile(files) {
    //console.log(files);
    this.file = files[0];
  }
  // ajouterSection(titre, description)
  //{
  /* const formData = new FormData();
   formData.append('titre', titre);
   formData.append('description', description);
   formData.append('file', this.file);
   //this.sections = [titre, description]
   this.sections.push({titre: titre, description: description, image: this.file});


 }*/
  addSection() {
    this.sections.push(
      {
        title: '',
        description: ''
      }
    );
    console.log(this.sections);
  }



  ajouterEdition(date, numero, ) {
    console.log(this.htmlContent);
    // const edition= { date, numero, section }
    let edition = { numero: numero, date: date, sections: this.htmlContent}

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
