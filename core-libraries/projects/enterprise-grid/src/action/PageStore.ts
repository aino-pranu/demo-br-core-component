import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { BaseGridDataStore } from './BaseGridStateStore';
import { shareReplay } from 'rxjs/operators';

export class PageState {
    id: number;
    actionToken: string;
    payload: Object;
}

@Injectable({
    providedIn: 'root',
})
export class PageStore extends BaseGridDataStore {

    private readonly _pages = new BehaviorSubject<PageState[]>([]);
    readonly pages$ = this._pages.asObservable().pipe(
        shareReplay(1)
    )

    constructor() {
        super();
    }

    get pages(): PageState[] {
        return this._pages.getValue();
    }

    set pages(val: PageState[]) {
        this._pages.next(val);
    }

    addPageState(actionToken, payload) {
        this.pages = [
            ...this.pages,
            {id: this.pages.length + 1, actionToken, payload}
        ];

        console.log(this.pages);
    }

    removePageState(id: number) {
        this.pages = this.pages.filter(page => page.id !== id);
    }
    
}