import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
     return this.taskService.getAllTasks()
    }
}
