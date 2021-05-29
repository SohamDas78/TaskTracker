import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/Task';
import { TaskService } from '../../services/taskservice.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  @Output() onTaskAdditionInvoked:EventEmitter<Task> = new EventEmitter();

  description: string;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.description)
    {
      alert('Please give a valid Task Description!');
      return;
    }

    const newTask: Task = {
      description: this.description
    };

    //Emit to base page of SPA (so that state change can also be caught there)
    this.onTaskAdditionInvoked.emit(newTask);

    this.description = '';
  }

}