<template>
    <div>
        <section v-if="errored">
          <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
      </section>
      <section v-else>
        <div v-if="loading">Carregando...</div>
        <b-card v-else>
            <h4 left slot="header">
                <b-container class="bv-example-row">
                    <b-row class="text-center">
                        <b-col>
                            <b-img left :src="store.image_blob" :alt="store.name" width="100"/>
                        </b-col>
                        <b-col cols="8"><h2>{{store.name}}</h2></b-col>
                        <b-col>
                            <b-button right  :to="{name: 'Home'}" v-if="$route.name !== 'list'" variant="outline-primary" active-class="">
                            Voltar
                            </b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </h4>
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-left">
                    <b-col col lg="2"><p class="card-text"><strong>Takeback:</strong></p></b-col>
                    <b-col cols="12" md="auto"><p id="subText">{{store.takeback}}</p></b-col>
                    <b-col col lg="2"></b-col>
                </b-row>
                <b-row class="justify-content-md-left">
                    <b-col col lg="2"><p class="card-text"><strong>Rating:</strong></p></b-col>
                    <b-col cols="12" md="auto"><p id="subText">{{store.rating}}</p></b-col>
                    <b-col col lg="2"></b-col>
                </b-row>
                <b-row class="justify-content-md-left">
                    <b-col col lg="2"><p class="card-text"><strong>Site:</strong></p></b-col>
                    <b-col cols="12" md="auto"><a :href="store.url" class="card-link">{{store.url}}</a></p></b-col>
                    <b-col col lg="2"></b-col>
                </b-row>
            </b-container>
            <div slot="footer">
                <small class="text-muted" v-for="category in store.category">
                    <b-badge id="badge">{{category}}</b-badge>
                </small>
            </div>
        </b-card>
      </section>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                store: [],
                loading: true,
                errored: false,
            };
        },
        mounted () {
            let id = this.$route.params.id;
            axios
            .get('http://challenge.getmore.com.br/stores/'+`${id}`)
            .then(response => {
                console.log(response);
              this.store = response.data
          })
            .catch(error => {
              console.log(error)
              this.errored = true
          })
            .finally(() => this.loading = false)
        }
    };
</script>
<style>
#store {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    h4 {
        margin: 0;
        font-size: 20px;
    }

}
#subText {
    margin-left: 160px;
}
#badge{
    margin: 5px;
}
</style>
