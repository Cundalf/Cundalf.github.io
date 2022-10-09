import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-rabbit-killer-modal',
	templateUrl: './rabbit-killer-modal.component.html',
	styleUrls: ['./rabbit-killer-modal.component.css']
})
export class RabbitKillerModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();
	
	@ViewChild('killerRabbitModal') killerRabbitModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
		
		this.openModal.subscribe(() => {
			this.modalService.open(this.killerRabbitModal, {
				animation: true,
				size: 'lg'
			});
		})
	}

}
