import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_USER_TASKS} from "../DUMMY_USER_TASKS";
import {User} from "../user.model";
import {NewTaskData, Task} from "../task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "../services/tasks-service";



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

  constructor(private tasksService : TasksService) {

  }

  isAddNewTaskClicked : boolean = false;
  getTasksOfSelectedUser(){
    return this.tasksService.getTasksFromUser(this.user.id);
  }

  onTaskCompletion(task: Task){
    this.tasksService.removeTask(task);
  }

  onAddNewTaskButtonClicked(){
    this.isAddNewTaskClicked = true;
  }

  onCancelNewTask(){
    this.isAddNewTaskClicked = false;
  }

  onAddNewTask(taskData:NewTaskData){
    let sortedArray = this.tasksService.getAllTasks().sort((a,b) => {
      let num1 = this.getNumberFromString(a.id);
      let num2 = this.getNumberFromString(b.id);
      return num1 - num2;
    });
    let lastId = sortedArray.slice(-1)[0].id??0;
    let numId = this.getNumberFromString(lastId);
    this.tasksService.addTask({
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
