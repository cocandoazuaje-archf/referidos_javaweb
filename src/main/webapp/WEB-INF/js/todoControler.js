/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


    app.controller('MainCtrl', function () {

                        var vm = this;
                        vm.nombre = "";
                        vm.mensaje = "Esperando...";

                        vm.saludar = function () {
                            alert("AngularJS está funcionando correctamente!");

//                            if (vm.nombre) {
//                                vm.mensaje = "Hola " + vm.nombre + " 👋";
//                            } else {
//                                vm.mensaje = "Escribe tu nombre primero";
//                            }
                        };
                    });