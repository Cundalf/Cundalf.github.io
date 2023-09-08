import {Component, OnInit} from '@angular/core';
import {faCode, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-experiencias',
	templateUrl: './experiencias.component.html',
	styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
	faCodeIcon: IconDefinition = faCode;

	constructor() {
	}

	ngOnInit(): void {
	}

}
