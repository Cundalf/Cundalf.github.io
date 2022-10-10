import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-loe-modal',
	templateUrl: './loe-modal.component.html',
	styleUrls: ['./loe-modal.component.css']
})
export class LoeModalComponent implements OnInit {

	faGithubIcon: IconDefinition = faGithub;
	faItchIcon: IconDefinition = faItchIo;

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
