import { Component } from '@angular/core';
import { NgbModal, NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [NgbTypeaheadConfig],
})
export class AppComponent {

	activeNavItem: number = 1;

	setActiveNavItem(navItem: number) {
		this.activeNavItem = navItem;
	}
	public model: any;

	constructor(config: NgbTypeaheadConfig) {
		config.showHint = true;
	}
}