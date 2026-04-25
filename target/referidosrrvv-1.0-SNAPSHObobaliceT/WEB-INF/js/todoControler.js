'use strict';
//var app = angular.module('app', []);
app.controller('todoControler', function () {
    var vm = this;
    vm.nombre = "";
    vm.mensaje = "Esperando...";
    vm.saludar = function () {
        alert("redeploy v.8 -> AngularJS está funcionando correctamente!");

    };
});
