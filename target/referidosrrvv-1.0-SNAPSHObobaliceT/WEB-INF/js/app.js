'use strict';

/**
 * ============================================================
 * TÍTULO: Bootstrap manual de AngularJS con autenticación Keycloak
 * ============================================================
 *
 * DESCRIPCIÓN:
 * Este archivo configura el módulo AngularJS "todo" e integra
 * autenticación mediante Keycloak. La aplicación se inicia
 * (angular.bootstrap) únicamente cuando Keycloak se inicializa
 * correctamente.
 *
 * CORRECCIONES APLICADAS:
 * - Uso de promesas modernas (.then / .catch)
 * - Mejora en indentación y legibilidad
 */

(function () {

    // Definición del módulo principal con dependencias
    var app = angular.module("todo", [
        'ngMaterial',
        'ngMessages',
        'ngCookies',
        'ngResource',
        'angular-js-xlsx',
        'ui.utils'
    ]);

    alert("**** Ok -> app.module... ENTRO a app.module");

    /**
     * Inicializa Keycloak y luego arranca Angular
     */
    function initializeKeycloak() {
        alert("**** Ok -> initializeKeycloak... ENTRO a initializeKeycloak");

        // // Instancia de Keycloak con configuración
        // var keycloak = Keycloak('keycloak.json');
        // // var keycloak = Keycloak('keycloak_OLD.json'); // alternativa

        // // Inicialización con login obligatorio
        // keycloak.init({
        //     onLoad: 'login-required'
        // })
        // .then(function () {

        //     // Éxito en autenticación
        //     console.log("**** Ok -> keycloak.init");

        //     // Exposición de Keycloak como servicio Angular
        //     app.factory('Auth', function () {
        //         console.log("**** Ok -> entro a return auth");
        //         return keycloak;
        //     });

        //     // Bootstrap manual de Angular
        //     console.log("**** Ok -> angular.bootstrap");
        //     angular.bootstrap(document, ["todo"]);
        //     console.log("**** Ok -> paso angular.bootstrap");

        // })
        // .catch(function (err) {

        //     // Error en autenticación
        //     console.log("**** Err -> keycloak.init", err);

        // });
    }

    /**
     * Punto de entrada cuando el DOM está listo
     */

    alert("**** Ok -> document.ready... ENTRARA a document.ready");
    // angular.element(document).ready(function () {
    //     alert("**** Ok -> document.ready... ENTRO a document.ready... paso 1");
    //     // Inicializa flujo de autenticación + arranque de la app
    //     initializeKeycloak();
    //     alert("**** paso ... Ok -> document.ready ... PASO angular.bootstrap");

    //     // angular.bootstrap(document, ["todo"]); // no usar aquí

    // });

}());