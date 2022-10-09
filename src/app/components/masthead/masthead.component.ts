import { Component, OnInit } from '@angular/core';
import { faCode, IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-masthead',
	templateUrl: './masthead.component.html',
	styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {
	readonly faCodeIcon: IconDefinition = faCode;
	readonly faLinkedInIcon: IconDefinition = faLinkedinIn
	readonly faGithubIcon: IconDefinition = faGithub;
	readonly faEnvelopeIcon: IconDefinition = faEnvelope;
	readonly faItchIo: IconDefinition = faItchIo;
	readonly name: string = 'Agustín Cundari';
	readonly profession: string = 'Full Stack Developer - GameDev';
	readonly linkedInProfileUrl: string = 'https://www.linkedin.com/in/cundalf/';
	readonly githubProfileUrl: string = 'https://github.com/Cundalf/';
	readonly mailToUrl: string = 'mailto:acundari95@gmail.com';
	readonly itchIoProfileUrl: string = 'https://cundalf.itch.io/';
	
	constructor() { }

	ngOnInit(): void {
	}

}
