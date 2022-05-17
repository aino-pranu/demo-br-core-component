import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export class State {
  name: string;
  type: string;
  payload: {}
}

/** Grid state store which manages the state of the application through Rxjs library. */
@Injectable({
  providedIn: 'root'
})
export class GridStateStoreService {

  states$: Observable<State[]>;
  private _states: ReplaySubject<State[]>;
  private dataStore: {
    states: State[]
  };

  constructor() { 
    this.dataStore = {states: []};
    this._states = <ReplaySubject<State[]>> new ReplaySubject(3);
    this.states$ = this._states.asObservable().pipe(shareReplay(3));
  }

  addState(state: State) {
    this.dataStore.states.push(state);
    console.log(this.dataStore.states);
    // this.states = [
    //   ...this.states,
    //   {name: state.name, type: state.type, payload: state.payload}
    // ];
    this._states.next(this.dataStore.states);
  }

  // get states(): State[] {
  //   return this._states.getValue();
  // }

  // set states(value: State[]) {
  //   this._states.next(value);
  // }
}