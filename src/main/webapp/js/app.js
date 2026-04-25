'use strict';

/**
 * Módulo principal con dependencias
 */
var app = angular.module('app', []);
app.controller('MainCtrl', function () {

    var vm = this;
    vm.nombre = "";
    vm.mensaje = "Esperando...";

    vm.saludar = function () {
        alert("AngularJS -> 6, está funcionando correctamente!");

    };
});



