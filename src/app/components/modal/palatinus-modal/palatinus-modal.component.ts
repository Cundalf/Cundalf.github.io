import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-palatinus-modal',
	templateUrl: './palatinus-modal.component.html',
	styleUrls: ['./palatinus-modal.component.css']
})
export class PalatinusModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('palatinusModal') palatinusModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.palatinusModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
