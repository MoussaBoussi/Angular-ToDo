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
    // Gives every new object a property of isComplete that is false
    newTodo.isComplete = false
    // pushes the newTodo Object into the aray of todos and makes a copy of each
    // angular.copy prevents the array from making duplicates of the new object pushed
    vm.todos.push(angular.copy(newTodo))
    // emptys the object newTodo so that the add button can be disabled when its empty
    vm.newTodo = {}
  }

  vm.removeTask = function(index) {
    // splices todos at the index passed from html
    vm.todos.splice(index, 1);
  }

  vm.completeTask = function(index) {
    // sets the property isComplete = to true at the passed index
    vm.todos[index].isComplete = true
  }

  vm.updateText = function(index, e) {
    // sets the task property of the selected index to equal the text content of the target element
    // :)
    vm.todos[index].task = e.target.textContent;
  }
}


angular
  // links module
  .module("todoApp")
  //Building a controller. 
  .controller("TodoController", TodoFunction);