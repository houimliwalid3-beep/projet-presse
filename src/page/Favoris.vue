<template>
  <div class="container mt-4 fot">
    <h2>Mes Favoris</h2>
    
    <!-- Message si aucun favori -->
    <div v-if="favoris.length === 0" class="alert alert-info">
      Aucun article en favoris.
    </div>

    <div class="row">
      <div class="col-md-4" v-for="item in favoris" :key="item.id">
        <div class="card mb-3">
          <!-- Image si elle existe -->
          <img v-if="item.img" :src="item.img" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.text }}</p>
            <button class="btn btn-sm btn-danger" @click="retirerFavori(item.id)">
              Retirer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// variable pour stocker les favoris
const favoris = ref([])

// fonction pour lire les favoris depuis le localStorage
function lireFavoris() {
  return JSON.parse(localStorage.getItem('favoris') || '[]')
}

// fonction pour sauvegarder les favoris dans le localStorage
function sauvegarderFavoris(arr) {
  localStorage.setItem('favoris', JSON.stringify(arr))
}

// charger les favoris au démarrage
onMounted(() => {
  favoris.value = lireFavoris()
})

// retirer un favori
function retirerFavori(id) {
  favoris.value = favoris.value.filter(item => item.id !== id)
  sauvegarderFavoris(favoris.value)
}
</script>

<style scoped>
.card-img-top {
  height: 180px;
  object-fit: cover;
}

.fot{

  margin-bottom:220px;
}
</style>
