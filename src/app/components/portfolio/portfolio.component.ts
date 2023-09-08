import { Component, OnInit } from '@angular/core';
import { faCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { Portfolio, PortfolioType } from 'src/app/models/portfolio';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	faCodeIcon: IconDefinition = faCode;
	portfolio: Portfolio[] = [];
	portfolioPrincipal: Portfolio[] = [];
	portfolioSecundario: Portfolio[] = [];
	openKillerRabbitModal: Subject<void> = new Subject();
	openfastFuriousModal: Subject<void> = new Subject();
	openFrikiBombModal: Subject<void> = new Subject();
	openLoeModal: Subject<void> = new Subject();
	openMagicaVoxelModal: Subject<void> = new Subject();
	openPalatinusModal: Subject<void> = new Subject();
	openStalhvikModal: Subject<void> = new Subject();
	openTankArModal: Subject<void> = new Subject();
	openUnrealEngineModal: Subject<void> = new Subject();
	openModularDroneXModal: Subject<void> = new Subject();
	openCoquitoModal: Subject<void> = new Subject();

	verMasPortfolio: boolean = false;

	constructor() {
		this.createPortfolioItems();
		this.portfolioPrincipal = this.portfolio.slice(0, 6);
		this.portfolioSecundario = this.portfolio.slice(6, this.portfolio.length);
	}

	ngOnInit(): void {
	}

	private createPortfolioItems(): void {
		this.portfolio.push(new Portfolio(
			'ModularDroneX',
			'assets/images/portfolio/modulardronex.jpg',
			'modulardronexModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Stalhvik',
			'assets/images/portfolio/Stalhvik.jpg',
			'stalhvikModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Rabbit Killer',
			'assets/images/portfolio/RabbitKiller.jpg',
			'rabbitKillerModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Friki Bomb',
			'assets/images/portfolio/FrikiBomb.jpg',
			'frikiBombModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Coquito',
			'assets/images/portfolio/cocos.jpg',
			'coquitoModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'LoE',
			'assets/images/portfolio/LogoLoE.jpg',
			'loeModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Palatinus',
			'assets/images/portfolio/Palatinus.jpg',
			'palatinusModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'TankAR',
			'assets/images/portfolio/TankAR.jpg',
			'tankArModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'Unreal Engine',
			'assets/images/portfolio/UE.jpg',
			'unrealEngineModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'FastFurious',
			'assets/images/portfolio/FastFurious.jpg',
			'fastFuriousModal',
			PortfolioType.GAMEDEV
		));

		this.portfolio.push(new Portfolio(
			'MagicaVoxel',
			'assets/images/portfolio/CrossyVoxel.jpg',
			'magicaVoxelModal',
			PortfolioType.GAMEDEV
		));
	}

	openModal(modalReference: string) {
		switch (modalReference) {
			case 'rabbitKillerModal':
				this.openKillerRabbitModal.next();
				break;
			case 'stalhvikModal':
				this.openStalhvikModal.next();
				break;
			case 'fastFuriousModal':
				this.openfastFuriousModal.next();
				break;
			case 'frikiBombModal':
				this.openFrikiBombModal.next();
				break;
			case 'loeModal':
				this.openLoeModal.next();
				break;
			case 'magicaVoxelModal':
				this.openMagicaVoxelModal.next();
				break;
			case 'palatinusModal':
				this.openPalatinusModal.next();
				break;
			case 'tankArModal':
				this.openTankArModal.next();
				break;
			case 'unrealEngineModal':
				this.openUnrealEngineModal.next();
				break;
			case 'modulardronexModal':
				this.openModularDroneXModal.next();
				break;
			case 'coquitoModal':
				this.openCoquitoModal.next();
				break;
		}
	}

	abrirMasPortfolio($event: MouseEvent) {
		$event.preventDefault();
		this.verMasPortfolio = true;
	}
}
