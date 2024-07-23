import {Injectable} from "@angular/core";
import {DUMMY_USER_TASKS} from "../DUMMY_USER_TASKS";
import {Task} from "../task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = DUMMY_USER_TASKS;

  getAllTasks(){
    return this.tasks;
  }

  getTasksFromUser(userId : string){
    return this.tasks.filter(x => x.userId === userId);
  }

  addTask(task : Task){
    this.tasks.push(task);
  }

  removeTask(task : Task){
    if (task) {
      this.tasks = this.tasks.filter(x => x.id !== task.id);
    }
  }
}
