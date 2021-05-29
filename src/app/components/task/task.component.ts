import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/taskservice.service';
import {Task} from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe(tasks=>this.tasks = tasks);
  }

  addTask(task: Task): void {
    this.taskService.addTaskService(task).subscribe(task=>this.tasks.push(task));
  }

  deleteTask(task: Task): void {
    //console.log("Deletion invoked for : "+task.description);
    this.taskService.deleteTaskService(task).subscribe(() => this.tasks = this.tasks.filter(x=>x.id!==task.id));
  }
}