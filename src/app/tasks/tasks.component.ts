import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_USER_TASKS} from "../DUMMY_USER_TASKS";
import {User} from "../user.model";
import {NewTaskData, Task} from "../task.model";
import {NewTaskComponent} from "./new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required : true}) user! : User;
  tasks = DUMMY_USER_TASKS;
  isAddNewTaskClicked : boolean = false;
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

  onAddNewTaskButtonClicked(){
    this.isAddNewTaskClicked = true;
  }

  onCancelNewTask(){
    this.isAddNewTaskClicked = false;
  }

  onAddNewTask(taskData:NewTaskData){
    let sortedArray = this.tasks.sort((a,b) => {
      let num1 = this.getNumberFromString(a.id);
      let num2 = this.getNumberFromString(b.id);
      return num1 - num2;
    });
    let lastId = sortedArray.slice(-1)[0].id??0;
    let numId = this.getNumberFromString(lastId);
    this.tasks.push({
      id: 't' + (numId + 1).toString(),
      userId: this.user.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.isAddNewTaskClicked = false;
  }

  private getNumberFromString(strVal:string): number{
    return parseInt(strVal.replace ( /[^\d.]/g, '' ))
  }
}
