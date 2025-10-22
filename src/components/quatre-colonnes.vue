<template>
  <div class="container mt-4">
    <div class="row g-4"> <!-- g-4 ajoute de l’espace entre les colonnes -->
      <div class="col-md-3" v-for="(col, index) in 4" :key="index">
        <div class="card-principale p-3 h-100">
          <div class="sous-cartes mt-3">
            <div
              class="carte-interne d-flex align-items-center mb-2 p-2"
              v-for="i in 4"
              :key="i"
            >
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte" />
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre {{ i }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BoutonFav from './boutonFav.vue'
</script>



<style scoped>
.container {
  margin: 80px auto;
}

.card-principale {
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #f8f9fa;
  height: 100%;
  transition: all 0.3s ease;
}

.card-principale:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.sous-cartes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.carte-interne {
  border: 1px solid #aaa;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
}

.img-sous-carte {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 5px;
}

.contenu {
  margin-left: 10px;
  flex-grow: 1;
}
</style>
