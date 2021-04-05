
import {Pipe, PipeTransform} from "@angular/core";
import { Todo } from "../models/Todo";

@Pipe({
    name:'filTertext'
})
export class filTertext implements PipeTransform{
    transform( todos:Todo[], searchTodo: string):Todo[]{
        if (!todos || !searchTodo) {
            return todos;
        }
        return todos.filter(todos => 
            todos.content.toLocaleLowerCase().indexOf(searchTodo.toLocaleLowerCase()) !== -1);


    }
}