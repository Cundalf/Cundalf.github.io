import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-unreal-engine-modal',
	templateUrl: './unreal-engine-modal.component.html',
	styleUrls: ['./unreal-engine-modal.component.css']
})
export class UnrealEngineModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('unrealEngineModal') unrealEngineModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.unrealEngineModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
