(function() {
  var app = angular.module('todo-ng', []);

  app.controller('homeController', function() {
    var vm = this;
    vm.todos = [
      {
        id: 1,
        todoText: 'learn angularjs',
        status: false
      },
      {
        id: 2,
        todoText: 'learn reactjs',
        status: false
      },
      {
        id: 3,
        todoText: 'learn c#',
        status: true
      }
    ];
  });
})();
