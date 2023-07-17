import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from '../detalle/detalle.component';
import { CharactersServiceService } from './characters-service.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],

})
export class CharactersComponent {
  characters : any = [];
  constructor(private modalService: NgbModal, private characterService: CharactersServiceService) {
    this.characterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

	open(character: any) {
		const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.character = character;
	}
}