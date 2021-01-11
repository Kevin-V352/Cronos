/* <---- Modules ----> */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from '../material/material.module';

/* <---- Services ----> */
import { FirebaseService } from './services/firebase.service';

/* <---- Components ----> */
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';

/* <---- Environment ----> */
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AddTaskComponent,
    HomepageComponent,
    ModalEditComponent,
    TaskListComponent,
  ],
  entryComponents: [ModalEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule,
  ],
  providers: [FirebaseService],
  exports: [HomepageComponent]
})
export class CoreModule { }
