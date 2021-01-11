import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent} from '../modal-edit/modal-edit.component';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

    tasks: any;

    constructor(private _firebaseService: FirebaseService, public dialog: MatDialog) {
        _firebaseService.taskList().subscribe(task => {
            this.tasks = task;
            console.log(this.tasks)
        })
    }

    deleteTask (taskId: string) {
        this._firebaseService.deleteTask(taskId)
    }

    openModal(title: string, description: string, id: string) {
        let dataTask = {
            title,
            description,
            id
        };
        let dialogRef = this.dialog.open(ModalEditComponent, {data: dataTask});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result)
        })
    }
}
