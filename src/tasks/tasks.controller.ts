import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
     return this.taskService.getAllTasks()
    }

    @Post()
    createTask(@Body() body: Task){
       console.log(body);
       return []
    }

}
