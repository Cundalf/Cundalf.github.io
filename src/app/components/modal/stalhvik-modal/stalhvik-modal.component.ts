import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-stalhvik-modal',
	templateUrl: './stalhvik-modal.component.html',
	styleUrls: ['./stalhvik-modal.component.css']
})
export class StalhvikModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('stalhvikModal') stalhvikModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.stalhvikModal, {
				animation: true,
				size: 'lg'
			});
		})
	}

}
