import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// INTERFACES.
import { Task } from '../../interfaces/task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // Input Properties.
  @Input() task: Task;

  // Output Properties.
  @Output() edit = new EventEmitter;

  constructor() {}

  ngOnInit() {}
}
