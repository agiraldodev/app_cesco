<script setup>
import BarraNavegacion from '@/components/BarraNavegacion.vue';
</script>

<template>
  <BarraNavegacion />
  <h1>Listado de clientes</h1>

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        Lista clientes
      </div>
      <div class="col-md-6 bg-warning p-2">
        <h3>Crear cliente</h3>
        <form>
          <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" class="form-control" id="nombres">
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" class="form-control" id="apellidos">
          </div>
          <div class="form-group">
            <label for="cedula">Cédula</label>
            <input type="number" class="form-control" id="cedula">
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="number" class="form-control" id="telefono">
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email">
          </div>
          <button class="btn btn-success w-100 mt-2">Registrar Cliente</button>
        </form>
      </div>
    </div>
  </div>
</template>