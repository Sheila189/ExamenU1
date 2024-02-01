<template>
    <div class="container-fluid">
        <b-row class="nav">
            <b-col cols="12">
            <b-nav tabs align="center" type="dark" variant="dark" id="navbar">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item href="/#/inicio/formulario">Formulario</b-nav-item>
                <b-nav-item href="/#/inicio/paginacion">Paginación </b-nav-item>
                <b-nav-item href="/#/inicio/formulario/autos">Autos</b-nav-item>
            </b-nav>
            </b-col>
        </b-row>
    </div>
</template>
    
<script>
export default {
      data() {
        return {
          items: [
            {
              text: 'Inicio',
              href: '/#/inicio',
              name:"inicio"
            },
            {
              text: 'Formulario',
              href: '/#/formulario',
              name:'formulario'
            },
            {
              text: 'Paginación',
              href: '/#/paginacion',
              name:'paginacion'
            }
          ]
        }
      }
      };
</script>

<style>
</style>