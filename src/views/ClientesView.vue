<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import BarraNavegacion from '@/components/BarraNavegacion.vue';

const clientes = ref([]);

const nuevoCliente = ref({
  nombres: '',
  apellidos: '',
  cedula: '',
  telefono: '',
  email: ''
});

function guardarCliente() {
  clientes.value.push({ ...nuevoCliente.value });
  guardarEnLocalStorage();
  limpiarFormulario();
}

function limpiarFormulario() {
  nuevoCliente.value = {
    nombres: '',
    apellidos: '',
    cedula: '',
    telefono: '',
    email: ''
  };
}

function guardarEnLocalStorage() {
  localStorage.setItem('clientesDB', JSON.stringify(clientes.value));
}

onMounted(() => {
  const clientesGuardados = JSON.parse(localStorage.getItem('clientesDB'));

  if (clientesGuardados) {
    clientes.value = clientesGuardados;
  }
});

onBeforeUnmount(() => {
  guardarEnLocalStorage();
});

</script>

<template>
  <BarraNavegacion />
  <h1>Listado de clientes</h1>

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Cédula</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes">
              <td>{{ cliente.nombres }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.cedula }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-6 bg-warning p-2 rounded">
        <h3>Crear cliente</h3>
        <form @submit.prevent="guardarCliente">
          <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" class="form-control" id="nombres" v-model="nuevoCliente.nombres">
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" class="form-control" id="apellidos" v-model="nuevoCliente.apellidos">
          </div>
          <div class="form-group">
            <label for="cedula">Cédula</label>
            <input type="number" class="form-control" id="cedula" v-model="nuevoCliente.cedula">
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="number" class="form-control" id="telefono" v-model="nuevoCliente.telefono">
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email" v-model="nuevoCliente.email">
          </div>
          <button type="submit" class="btn btn-success w-100 mt-2">Registrar Cliente</button>
        </form>
      </div>
    </div>
  </div>
</template>
