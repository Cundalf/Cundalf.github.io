import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Certification } from 'src/app/models/certification';

@Component({
	selector: 'app-certviewer',
	templateUrl: './certviewer.component.html',
	styleUrls: ['./certviewer.component.css']
})
export class CertviewerComponent implements OnInit {

	@Input()
	openModal: Subject<Certification> = new Subject();

	@ViewChild('certViewerModal')
	certViewerModal!: ElementRef;
	
	imagePath: string = '';
	imageTitle: string = '';

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe((cert: Certification) => {
			if (cert.title && cert.imagePath) {
				this.imagePath = cert.imagePath;
				this.imageTitle = cert.title;
				
				this.modalService.open(this.certViewerModal, {
					animation: true,
					size: 'xl'
				});
			}
		})
	}

}
