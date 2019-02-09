"use strict";

function TodoFunction() {
  const vm = this;
  vm.todos = [
    {task:"Finish Angular ToDo App", isComplete: true},
    {task: "Create fake tasks", isComplete: true},
    {task: "Make tasks editable", isComplete: true},
    {task: "Learn Angular", isComplete: false}
  ];
  

  vm.add = function(newTodo) {
    newTodo.isComplete = false
    vm.todos.push(angular.copy(newTodo))
    
    vm.newTodo = {}
  
  }
  vm.removeTask = function(index) {
    vm.todos.splice(index, 1);
  }
  vm.completeTask = function(index) {
    vm.todos[index].isComplete = true
  }

  vm.updateText = function(index, e) {
    vm.todos[index].task = e.target.textContent;
  }
}


angular
  .module("todoApp")
  //Building a controller. 
  .controller("TodoController", TodoFunction);