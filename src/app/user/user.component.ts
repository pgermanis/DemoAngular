//import {Component, computed, input} from '@angular/core'; //input signals
import {Component, EventEmitter, Input, Output} from '@angular/core'; //simple input
//import { Component, computed, signal } from '@angular/core'; //signals

//import {DUMMY_USERS} from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Implementation with Input
  @Input({ required : true }) id! : string;
  @Input({ required : true }) avatar!: string;
  @Input({ required : true }) name!: string;
  @Output() userSelectedEvent = new EventEmitter<string>();
  //Implementation with input signals
  // avatar = input.required<string>();  //read only!!!
  // name = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.avatar()); //this.selectedUser.avatar()

  // get imagePath(){
  //   return 'assets/users/' + this.avatar();
  // }

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  onClickUserButton(){
    console.log('clicked');
    this.userSelectedEvent.emit(this.id);
  }

  // Implementation with signals
  // onClickUserButton(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
