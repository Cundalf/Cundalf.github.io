import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-friki-bomb-modal',
	templateUrl: './friki-bomb-modal.component.html',
	styleUrls: ['./friki-bomb-modal.component.css']
})
export class FrikiBombModalComponent implements OnInit {

	faGithubIcon: IconDefinition = faGithub;
	faItchIcon: IconDefinition = faItchIo;

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
