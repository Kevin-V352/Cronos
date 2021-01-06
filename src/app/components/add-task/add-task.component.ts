import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  inputTask: any = {
    title: '',
    description: '',
  }

  constructor(private _firebaseService: FirebaseService) { }

  addTask() {
    console.log(this.inputTask)
    /* this._firebaseService.addItem() */
  }

}
