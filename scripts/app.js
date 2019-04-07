(function() {
  var app = angular.module('todo-ng', []);

  app.controller('homeController', function() {
    this.vm = this;
    this.vm.name = { firstName: 'Narendiran', lastName: 'Dorairaj' };
  });
})();
