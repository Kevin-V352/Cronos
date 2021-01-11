import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {

  currentData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _firebaseService: FirebaseService) { 
    this.currentData = data;
  }

  editTask() {
    this._firebaseService.editTask(this.currentData)
  }
  
}
