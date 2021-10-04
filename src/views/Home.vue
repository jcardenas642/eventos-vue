<template>
  <header>
        <h1> {{titulo}}</h1>
    </header>
    <main>
        <div>
            <h2>Registrar Evento</h2>
            <form id="formulario_evento" action="#" method="post">
                <label for="cliente">Cliente:</label>
                <input type="text" name="cliente">
                <label for="documento">Documento:</label>
                <input type="text" name="documento">
                <label for="salon">Salón</label>
                <div>
                    <input type="radio" name="salon" value="1"> Normal
                    <input type="radio" name="salon" value="2"> Grande
                </div>
                <input type="checkbox" name="meseros_extra" value="Si">
                <label for="meseros_extra">Agregar meseros extra?</label>
                <label for="cantidad">Cantidad meseros</label>
                <input type="number" name="cantidad">
                <input type="checkbox" name="servicio_comida" value="Si">
                <label for="servicio_comida">Incluir comida?</label>
                <label for="platos">Cantidad platos</label>
                <input type="number" name="platos">
                <button type="reset" name="limpiar">Limpiar</button>
                <button onclick="procesarInformacion()" type="button">Agregar Evento</button>
            </form>
        </div>
        
        <div>
            <h2>Listado de Eventos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>SALON</th>
                        <th>MESEROS</th>
                        <th>PLATOS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody id="datos_eventos">
                    <tr v-for="unEvento in listaEventos" :key="unEvento">
                      <td>{{unEvento.cliente}}</td>
                      <td>{{unEvento.salon.nombre}}</td>
                      <td>{{unEvento.meseros}}</td>
                      <td>{{unEvento.platos}}</td>
                      <td>{{unEvento.total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      titulo:"Gestión de eventos",
      listaEventos:[
    {
        cliente:"Jose",
        documento:"741963852",
        meseros:2,
        platos:150,
        salon:{"nombre":"Normal", 
                    "precio":1000000, 
                    "extra_mesero":150000,
                    "cantidad_meseros":1, 
                    "plato":50000
                },
        total:3200000
    },
    {
        cliente:"Laura",
        documento:"852753951",
        meseros:5,
        platos:50,
        salon:{"nombre":"Grande", 
                    "precio":2000000, 
                    "extra_mesero":100000, 
                    "cantidad_meseros":4,
                    "plato":40000
                },
        total:3200000
    },
],
      evento:{},

    };
  },
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
body{
            padding: 2rem;
        }
        #formulario_evento{
            display: grid;
            grid-template-columns: 5rem 10rem;
            row-gap: 1rem;
            column-gap: 0.5rem;
        }

        main{
            display: grid;
            grid-template-columns: 1fr 3fr;
        }

        table{
            width: 80%;
            margin: 0 auto;
        }

        table td{
            text-align: center;
        }
</style>
