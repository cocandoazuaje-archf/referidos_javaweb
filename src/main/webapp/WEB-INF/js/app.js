'use strict';

/**
 * Módulo principal con dependencias
 */
var app = angular.module('app', [
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngCookies',
    'ui.utils'
]);

/**
 * Configuración global
 */
app.config(function($routeProvider) {
    // rutas si usas ngRoute
});

/**
 * Inicialización
 */
app.run(function($rootScope) {
    console.log("App iniciada");
});