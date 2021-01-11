import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Task {
    title: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    private tasksCollection: AngularFirestoreCollection<Task>;
    private taskDoc: AngularFirestoreDocument<Task> | undefined;
    tasks: Observable<Task[]>;

    constructor(private afs: AngularFirestore) {
        this.tasksCollection = afs.collection<Task>('userTasks');
        this.tasks = this.tasksCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Task;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    taskList() {
        return this.tasks;
    }

    addTask(task: Task) {
        this.tasksCollection.add(task);
    }

    deleteTask(taskId: string) {
        console.log(taskId)
        this.taskDoc = this.afs.doc<Task>(`userTasks/${taskId}`);
        this.taskDoc.delete();
    }

    editTask(task: any) {
        this.taskDoc = this.afs.doc<Task>(`userTasks/${task.id}`);
        this.taskDoc.update(task);
    }
}
