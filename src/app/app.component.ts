import { Component } from '@angular/core';
import { NgbModal, NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTypeaheadConfig], // add NgbTypeaheadConfig to the component providers
})
export class AppComponent {

  activeNavItem: number = 1;

  setActiveNavItem(navItem: number) {
    this.activeNavItem = navItem;}
  public model: any;

	constructor(config: NgbTypeaheadConfig) {
		// customize default values of typeaheads used by this component tree
		config.showHint = true;
	}

	// search = (text$: Observable<string>) =>
	// 	text$.pipe(
	// 		debounceTime(200),
	// 		distinctUntilChanged(),
	// 		map((term) =>
	// 			term.length < 2 ? [] : characters.splice(0, 10),
	// 		),
	// 	);
}