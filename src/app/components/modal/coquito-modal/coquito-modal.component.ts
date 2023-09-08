import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {faGithub, faItchIo, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-coquito-modal',
  templateUrl: './coquito-modal.component.html',
  styleUrls: ['./coquito-modal.component.css']
})
export class CoquitoModalComponent implements OnInit {
	faYoutube: IconDefinition = faYoutube;
	faItchIcon: IconDefinition = faItchIo;
	faGithubIcon: IconDefinition = faGithub;

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('CoquitoModal') coquitoModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.coquitoModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
