import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_USER_TASKS} from "../DUMMY_USER_TASKS";
import {User} from "../user.model";
import {Task} from "../task.model";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required : true}) user! : User;
  tasks = DUMMY_USER_TASKS;

  getTasksOfSelectedUser(){
    return this.tasks.filter(x => x.userId === this.user.id);
  }

  onTaskCompletion(task: Task){
    if (task) {
      this.tasks = this.tasks.filter(x => x.id !== task.id);
    } else {
      alert('You must select a task!');
    }
  }
}
