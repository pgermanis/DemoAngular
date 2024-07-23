import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type Task } from '../../task.model';
import {CardUiComponent} from "../../shared/card-ui/card-ui.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardUiComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true}) task! : Task;
  @Output() completeButtonClickEvent = new EventEmitter<Task>();

  onCompleteButtonClick(){
    this.completeButtonClickEvent.emit(this.task);
  }
}
