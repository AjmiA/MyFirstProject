import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
    

  }
}
  







@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos= [
    new Todo(1,'learn to dance',false,new Date()),
    new Todo(2,'become an expert at angular',false,new Date()),
    new Todo(3,'visit paris',false,new Date()),
    
    /* {id:1,description:'learn to dance'},
     {id:2,description:'become an expert at angular'},
     {id:3,description:'visit paris'},
     {id:4,description:'have a pfe'}*/




  ]




   // todo={
     //  id:1,
       //description:'learn to Dance'

   // }
  constructor() { }

  ngOnInit() {
  }

}
