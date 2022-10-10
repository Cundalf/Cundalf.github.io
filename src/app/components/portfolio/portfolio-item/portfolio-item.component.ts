import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-portfolio-item',
	templateUrl: './portfolio-item.component.html',
	styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

	readonly faPlusIcon: IconDefinition = faPlus;

	@Input()
	imagePath: string = '';
	
	@Output()
	openInformationEvent: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	emitOpenInformationEvent(): void {
		this.openInformationEvent.emit();
	}
}
