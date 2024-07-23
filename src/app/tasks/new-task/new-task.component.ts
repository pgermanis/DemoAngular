import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../../task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelButtonClickEvent = new EventEmitter<void>();
  @Output() onSubmitFormEvent = new EventEmitter<NewTaskData>();
  titleFormField!:string;
  summaryFormField!:string;
  dueDateFromField!:string;

  onCancelButtonClick(){
    this.cancelButtonClickEvent.emit();
  }

  onFormSubmit(){
    if (this.titleFormField && this.summaryFormField && this.dueDateFromField) {
      this.onSubmitFormEvent.emit({
        title: this.titleFormField,
        summary: this.summaryFormField,
        date: this.dueDateFromField
      });
    }
  }
}
