import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-social-button',
	templateUrl: './social-button.component.html',
	styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent implements OnInit {
	
	@Input()
	url: string = '';
	
	@Input()
	icon!: IconDefinition;
	
	constructor() { }

	ngOnInit(): void {
	}

}
