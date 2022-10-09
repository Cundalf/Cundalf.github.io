import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-tank-ar-modal',
	templateUrl: './tank-ar-modal.component.html',
	styleUrls: ['./tank-ar-modal.component.css']
})
export class TankArModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('tankArModal') tankArModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.tankArModal, {
				animation: true,
				size: 'lg'
			});
		})
	}

}
