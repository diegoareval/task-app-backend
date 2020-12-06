
import { TaskStatus } from "../enums/status.enum";


export interface Task{
    id: string,
    title: string,
    description: string,
    status: TaskStatus
}