import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Task} from 'src/app/models/Task';
import {faTimes, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Input() task:Task;
  @Output() onTaskDeletionInvoked:EventEmitter<Task> = new EventEmitter();

  crossImage: IconDefinition = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onTaskDelete(task: Task): void {
    this.onTaskDeletionInvoked.emit();
  }
}
