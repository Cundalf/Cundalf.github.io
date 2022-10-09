import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-friki-bomb-modal',
	templateUrl: './friki-bomb-modal.component.html',
	styleUrls: ['./friki-bomb-modal.component.css']
})
export class FrikiBombModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('frikiBombModal') frikiBombModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.frikiBombModal, {
				animation: true,
				size: 'lg'
			});
		})
	}

}
