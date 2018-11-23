<template>
  <div class="home">
    <b-form>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" size="lg" v-model="filter" placeholder="Buscar..." />
    </b-form>
    <section v-if="errored">
      <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
    </section>
    <section v-else>
      <div v-if="loading">Carregando...</div>

      <b-table v-else 
      bordered striped hover
      :items="results"
      :fields="tableFields"
      :filter="filter"
      @row-clicked="storeClick">
      <template slot="image_blob" slot-scope="data">
        <div class="clearfix">
          <b-img center :src="data.item.image_blob" :alt="data.item.name" />
        </div>
      </template>
    </b-table>
  </section>  
</div>
</template>
<script>
  import axios from 'axios'

  export default {
   name: 'home',
   data () {
    return {
      results: [],
      tableFields: [
      {key: 'name', label: 'Name', sortable: true},
      {key: 'takeback', label: 'Takeback', sortable: true},
      {key: 'image_blob', label: 'Image', sortable: true},
      ],
      loading: true,
      errored: false,
      filter: null,
    }
  },
  mounted () {
    axios
    .get('http://challenge.getmore.com.br/stores')
    .then(response => {
      this.results = response.data
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },
  methods: {
        storeClick(store, index) {
            this.$router.push({name: 'store', params: {id: store.id}});
        }
    }
}
</script>

<style>
form {
  margin-bottom: 30px;
}

.btn {
  margin: 1px;
}

.home {
  cursor: pointer;
}
</style>
