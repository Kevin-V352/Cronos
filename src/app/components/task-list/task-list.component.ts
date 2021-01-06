import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

    items: any;

    constructor(private _firebaseService: FirebaseService) {
        _firebaseService.itemList().subscribe(item => {
            this.items = item;
            console.log(this.items)
        })
    }
}
