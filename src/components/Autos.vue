<template>
    <div class="container mt-5">
      <b-breadcrumb :items="items"></b-breadcrumb>
      <b-link href="/#/formulario/text/form">Registro</b-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Formulario',
            href: '/#/formulario',
            name:'formulario'
          },
          {
            text: "Vehiculos",
            href: "/#/formulario/autos",
            name: "text",
          },
        ],
      };
    },
  };
  </script>
      
  <style>
  </style>