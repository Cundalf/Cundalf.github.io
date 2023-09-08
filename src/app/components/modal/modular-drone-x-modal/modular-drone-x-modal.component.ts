import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {faItchIo, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-modular-drone-x-modal',
  templateUrl: './modular-drone-x-modal.component.html',
  styleUrls: ['./modular-drone-x-modal.component.css']
})
export class ModularDroneXModalComponent implements OnInit {

	faYoutube: IconDefinition = faYoutube;
	faItchIcon: IconDefinition = faItchIo;

	@Input()
	openModal: Subject<void> = new Subject();

	@ViewChild('ModularDroneXModal') modularDroneXModal!: ElementRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {

		this.openModal.subscribe(() => {
			this.modalService.open(this.modularDroneXModal, {
				animation: true,
				size: 'lg'
			});
		})
	}
}
