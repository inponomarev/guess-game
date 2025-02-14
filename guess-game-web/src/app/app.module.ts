import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartModule } from "./modules/start/start.module";
import { GuessModule } from "./modules/guess/guess.module";
import { ResultModule } from "./modules/result/result.module";
import { RouterModule, Routes } from "@angular/router";
import { StartComponent } from "./modules/start/start.component";
import { ResultComponent } from "./modules/result/result.component";
import { GuessNameComponent } from "./modules/guess/guess-name.component";
import { GuessPictureComponent } from "./modules/guess/guess-picture.component";
import { UnknownModule } from "./modules/unknown/unknown.module";
import { NotFoundComponent } from "./modules/unknown/not-found.component";
import { MessageModule } from "./modules/message/message.module";
import { HttpClientModule } from "@angular/common/http";
import { AnswerService } from "./shared/services/answer.service";
import { QuestionService } from "./shared/services/question.service";
import { StateService } from "./shared/services/state.service";
import { StateGuard } from "./shared/guards/state.guard";
import { CancelGameComponent } from "./modules/guess/cancel-game.component";
import { GuessTalkComponent } from "./modules/guess/guess-talk.component";
import { GuessSpeakerComponent } from "./modules/guess/guess-speaker.component";

const routes: Routes = [
  {path: 'start', component: StartComponent, canActivate: [StateGuard]},
  {path: 'guess/name', component: GuessNameComponent, canActivate: [StateGuard]},
  {path: 'guess/picture', component: GuessPictureComponent, canActivate: [StateGuard]},
  {path: 'guess/talk', component: GuessTalkComponent, canActivate: [StateGuard]},
  {path: 'guess/speaker', component: GuessSpeakerComponent, canActivate: [StateGuard]},
  {path: 'result', component: ResultComponent, canActivate: [StateGuard]},
  {path: 'cancel', component: CancelGameComponent},
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    GuessModule,
    MessageModule,
    ResultModule,
    StartModule,
    UnknownModule
  ],
  providers: [AnswerService, QuestionService, StateService, StateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
