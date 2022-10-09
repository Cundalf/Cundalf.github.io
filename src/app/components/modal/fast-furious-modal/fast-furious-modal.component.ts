import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-fast-furious-modal',
	templateUrl: './fast-furious-modal.component.html',
	styleUrls: ['./fast-furious-modal.component.css']
})
export class FastFuriousModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('fastFuriousModal') fastFuriousModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.fastFuriousModal, {
				animation: true,
				size: 'lg'
			});
		})
	}

}
