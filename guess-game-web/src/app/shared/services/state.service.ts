import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { MessageService } from "../../modules/message/message.service";
import { StartParameters } from "../models/start-parameters.model";
import { State } from "../models/state.model";
import { PictureNames } from "../models/picture-names.model";
import { NamePictures } from "../models/name-pictures.model";
import { SpeakerTalks } from "../models/speaker-talks.model";
import { TalkSpeakers } from "../models/talk-speakers.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private baseUrl = 'api/state';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  setStartParameters(startParameters: StartParameters): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/parameters`, startParameters)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  getState(): Observable<State> {
    return this.http.get<State>(`${this.baseUrl}/state`)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  setState(state: State): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/state`, state)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  getPictureNames(): Observable<PictureNames> {
    return this.http.get<PictureNames>(`${this.baseUrl}/picture-names`)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  getNamePictures(): Observable<NamePictures> {
    return this.http.get<NamePictures>(`${this.baseUrl}/name-pictures`)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  getSpeakerTalks(): Observable<SpeakerTalks> {
    return this.http.get<SpeakerTalks>(`${this.baseUrl}/speaker-talks`)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }

  getTalkSpeakers(): Observable<TalkSpeakers> {
    return this.http.get<TalkSpeakers>(`${this.baseUrl}/talk-speakers`)
      .pipe(
        catchError((response: Response) => {
          this.messageService.reportMessage(response);
          throw response;
        })
      );
  }
}
