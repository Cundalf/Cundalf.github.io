import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-loe-modal',
	templateUrl: './loe-modal.component.html',
	styleUrls: ['./loe-modal.component.css']
})
export class LoeModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('loeModal') loeModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.loeModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
