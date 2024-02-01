<template>
  <div class="container">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link href="/#/formulario/autos">Autos</b-link>
    <h1 style="text-align: center;">Formulario de registro</h1>
    <form @submit.prevent="validarFormulario" >
      <p v-if="errors.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <div class="row" >
        <div class="col-md-6">
          <div class="form-group">
            <label for="marca">Marca</label>
            <input type="text" class="form-control" id="marca" placeholder="marca" v-model="nombre" required>
            <small class="form-text text-muted">La marca es obligatoria.</small>
          </div>
          <div class="form-group">
            <label for="modelo">Modelo</label>
            <input type="text" class="form-control" id="modelo" placeholder="modelo" v-model="apellidoPaterno" required>
            <small class="form-text text-muted">El modelo es obligatorio.</small>
          </div>
          <div class="col-md-6">
          <div class="form-group">
            <label for="anio">Año de fabricación</label>
            <input type="date" class="form-control" id="anio" v-model="Anio" required>
            <small class="form-text text-muted">El año de fabricación es obligatoria y no debe ser futura.</small>
          </div>
        </div>
          <div class="form-group">
            <label for="serie">Número de serie</label>
            <input type="text" class="form-control" id="serie" placeholder="serie" v-model="apellidoMaterno" required>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      marca: '',
      modelo: '',
      serie: '',
      Anio: '',
      errors: [],
      items: [
          {
              text: 'Formulario',
              href: '/#/formulario',
              name:'formulario'
          },
      ],
    };
  },
  methods: {
    validarFormulario() {
      const camposObligatorios = ['marca', 'modelo', 'anio', 'serie'];
      for (const campo of camposObligatorios) {
        if (!this[campo] || this[campo].trim() === '') {
          this.errors.push(`El campo ${campo} es obligatorio.`);
          return;
        }
      }

      const marca2 = new Dato(this.marca);
      let char_alpha = /^[\w\D-]+$/;        
      if(marca2 == char_alpha){
          this.errors.push('La marca es invalida. No puede llevar signos');
          return false;
      }

      const modelo2 = new Dato(this.modelo);
      let char_alpha2 = /^[\w\D-]+$/;        
      if(modelo2 == char_alpha2){
          this.errors.push('El modelo es invalido. No puede llevar signos');
          return false;
      }

      const fechaDeFabricacion = new Date(this.Anio);
      const fechaActual = new Date();
      const fecha = fechaActual.getFullYear() - fechaDeFabricacion.getFullYear();
      if (fecha < fechaActual) {
        this.errors.push('La fecha es invalida. No puede ser futura');
        return false;
      }
        
      if (this.cp.length !== 12) {
        this.errors.push('El número de serie debe tener 12 dígitos.');
        return false;
      }

      //prueba para El número de serie se debe ver de la siguiente manera donde las X son letras y los 0 números: XXXX000-00XX 
      //Primero in if para que cheque las 4 letras, si esta bien despues checa los 3 numeros, el guion, despues los otros 2 numeros
      //despues las otras 2 letras, si falla en algueno que marque error general

      

      alert('Registro exitoso.:D');
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-right: 400px !important;
}
</style>