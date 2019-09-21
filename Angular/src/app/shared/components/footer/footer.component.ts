import { GameService } from 'src/app/shared/services/game.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  constructor(public readonly gameService: GameService) { }
}

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
