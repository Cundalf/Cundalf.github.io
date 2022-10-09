import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	faCodeIcon: IconDefinition = faCode;
	
	constructor() { }

	ngOnInit(): void {
	}

}
