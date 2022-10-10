import { Component, OnInit } from '@angular/core';
import { faCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
	faCodeIcon: IconDefinition = faCode;
	
	constructor() { }

	ngOnInit(): void {
	}

}
