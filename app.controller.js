"use strict";

function TodoFunction() {
  const vm = this;
  vm.todos = [];
  

  vm.add = function(newTodo) {
    newTodo.isComplete = false
    vm.todos.push(angular.copy(newTodo))
    console.log(vm.todos)
    
    vm.newTodo = {}
  
  }
  vm.removeTask = function(index) {
    vm.todos.splice(index, 1);
  }
}

angular
  .module("todoApp")
  //Building a controller. 
  .controller("TodoController", TodoFunction);