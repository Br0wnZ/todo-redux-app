import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { cleanCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: validFilters = 'all'
  filters: validFilters[] = ['all', 'completed', 'pending']

  pendings: number = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filter => this.actualFilter = filter )
    this.store.subscribe( state => {
      this.actualFilter = state.filter
      this.pendings = state.todos.filter( ({ completed }) => !completed).length
    })
  }

  changeFilter = (filter: validFilters): void => this.store.dispatch(setFilter({ filter }))

  cleanCompleted = (): void => this.store.dispatch(cleanCompleted())

}
