import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { Certification } from 'src/app/models/certification';

@Component({
	selector: 'app-certifications',
	templateUrl: './certifications.component.html',
	styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
	faCodeIcon: IconDefinition = faCode;
	faSearchIcon: IconDefinition = faSearch;
	faGlobeIcon: IconDefinition = faGlobe;
	
	openCertViewer: Subject<Certification> = new Subject();
	private readonly utnUnityCert = new Certification('Diplomatura en desarrollo de videojuegos con Unity', '/assets/images/cert/certutnunity.png');
	private readonly utnCocosCert = new Certification('Desarrollo de videojuegos con Cocos Creator', '/assets/images/cert/certutncocos.png');
	private readonly utnJavaCert = new Certification('Diplomatura en Programación Java', '/assets/images/cert/certutnjava.png');
	private readonly utnFullStackCert = new Certification('Professional Full-Stack Developer', '/assets/images/cert/certfullstack.png');

	constructor() { }

	ngOnInit(): void {
	}

	openUtnUnityCert(event: any): void {
		event.preventDefault();
		this.openCertViewer.next(this.utnUnityCert);
	}

	openUtnCocosCert(event: any): void {
		event.preventDefault();
		this.openCertViewer.next(this.utnCocosCert);
	}
	
	openUtnJavaCert(event: any): void {
		event.preventDefault();
		this.openCertViewer.next(this.utnJavaCert);
	}
	
	openUtnFullStackCert(event: any): void {
		event.preventDefault();
		this.openCertViewer.next(this.utnFullStackCert);
	}
}
