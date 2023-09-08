import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MastheadComponent } from './components/masthead/masthead.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio/portfolio-item/portfolio-item.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { RabbitKillerModalComponent } from './components/modal/rabbit-killer-modal/rabbit-killer-modal.component';
import { StalhvikModalComponent } from './components/modal/stalhvik-modal/stalhvik-modal.component';
import { PalatinusModalComponent } from './components/modal/palatinus-modal/palatinus-modal.component';
import { FrikiBombModalComponent } from './components/modal/friki-bomb-modal/friki-bomb-modal.component';
import { LoeModalComponent } from './components/modal/loe-modal/loe-modal.component';
import { TankArModalComponent } from './components/modal/tank-ar-modal/tank-ar-modal.component';
import { UnrealEngineModalComponent } from './components/modal/unreal-engine-modal/unreal-engine-modal.component';
import { FastFuriousModalComponent } from './components/modal/fast-furious-modal/fast-furious-modal.component';
import { MagicaVoxelModalComponent } from './components/modal/magica-voxel-modal/magica-voxel-modal.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CertviewerComponent } from './components/modal/certviewer/certviewer.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ModularDroneXModalComponent } from './components/modal/modular-drone-x-modal/modular-drone-x-modal.component';
import { CoquitoModalComponent } from './components/modal/coquito-modal/coquito-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MastheadComponent,
    SocialButtonComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    AboutMeComponent,
    FooterComponent,
    RabbitKillerModalComponent,
    StalhvikModalComponent,
    PalatinusModalComponent,
    FrikiBombModalComponent,
    LoeModalComponent,
    TankArModalComponent,
    UnrealEngineModalComponent,
    FastFuriousModalComponent,
    MagicaVoxelModalComponent,
    CertificationsComponent,
    CertviewerComponent,
    ExperienciasComponent,
    ModularDroneXModalComponent,
    CoquitoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
