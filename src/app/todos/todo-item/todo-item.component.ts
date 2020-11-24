import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { edit, toggle, remove } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @ViewChild('inputText') inputText: ElementRef

  checkCompleted: FormControl
  txtInput: FormControl

  editing: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl( this.todo.completed )
    this.txtInput = new FormControl(this.todo.text, Validators.required)
    this.checkCompleted.valueChanges.subscribe(() => this.store.dispatch(toggle({ id: this.todo.id })))
  }

  edit = (): void => {
    this.editing = true
    this.txtInput.setValue(this.todo.text)
    setTimeout(() => {
      this.inputText.nativeElement.select()
    }, 0);
  }

  endEdition = (): void => {
    this.editing = false
    this.txtInput.value !== this.todo.text && this.txtInput.valid ? this.store.dispatch(edit({id: this.todo.id, text: this.txtInput.value})) : ''
  }

  remove = (): void => this.store.dispatch(remove({ id: this.todo.id })) 

}
