import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-magica-voxel-modal',
	templateUrl: './magica-voxel-modal.component.html',
	styleUrls: ['./magica-voxel-modal.component.css']
})
export class MagicaVoxelModalComponent implements OnInit {

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('magicaVoxelModal') magicaVoxelModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.magicaVoxelModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
