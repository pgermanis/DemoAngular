import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type Task } from '../../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true}) task! : Task ;
  @Output() completeButtonClickEvent = new EventEmitter<Task>();

  onCompleteButtonClick(){
    this.completeButtonClickEvent.emit(this.task );
  }
}
