import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Task} from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskUrl:string = "http://localhost:5000/tasks";

  constructor(private apiConsumer:HttpClient) { }

  loadTasks(): Observable<Task[]> {
    return this.apiConsumer.get<Task[]>(this.taskUrl);
  }

  addTaskService(newTask: Task): Observable<Task> {
    return this.apiConsumer.post<Task>(this.taskUrl, newTask);
  }

  deleteTaskService(task: Task): Observable<Task> {
    const deleteUrl = `${this.taskUrl}/${task.id}`;
    return this.apiConsumer.delete<Task>(deleteUrl);
  }

}