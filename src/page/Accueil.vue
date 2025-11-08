<template>

  <principal />

  <div class="container">
    <!-- Choix du nombre de colonnes -->
    <div class="dispo">
      <h5>Choisissez la disposition des colonnes :</h5>

      <!-- Radios écrits explicitement -->
      <label class="form-check form-check-inline">
        <input type="radio" value="2" v-model="choixColonnes" class="form-check-input">
        <span class="form-check-label">2 colonnes</span>
      </label>

      <label class="form-check form-check-inline">
        <input type="radio" value="3" v-model="choixColonnes" class="form-check-input">
        <span class="form-check-label">3 colonnes</span>
      </label>

      <label class="form-check form-check-inline">
        <input type="radio" value="4" v-model="choixColonnes" class="form-check-input">
        <span class="form-check-label">4 colonnes</span>
      </label>
    </div>

    <!-- Titre secondaire -->
    <h1 class="second">Article secondaire :</h1>

    <!-- Grille de cartes selon le choix -->
    <div class="cartes-grille">
      <deuxColonnes v-if="choixColonnes === '2'" />
      <TroisColonnes v-else-if="choixColonnes === '3'" />
      <quatreColonnes v-else />
    </div>
  </div>
</template>

<script>
import principal from '../components/principal.vue'
import deuxColonnes from '../components/deux-colonnes.vue'
import TroisColonnes from '../components/trois-colonnes.vue'
import quatreColonnes from '../components/quatre-colonnes.vue'

export default {
  components: { principal, deuxColonnes, TroisColonnes, quatreColonnes },
  data() {
    return {
      // Valeur par défaut
      choixColonnes: '3'
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}

/* Grille des cartes */
.cartes-grille {
  margin-top: 80px;
  background-color: #f8f7f7;
  padding: 20px;
}

/* Section choix disposition */
.dispo {
  
  margin: 50px 0 30px;
}

/* Titre secondaire */
.second {
  color: #4b4b4b;
  font-size: 24px;
  margin: 40px 0 20px;
}

/* Responsive pour petit écran */
@media (max-width: 768px) {
  .container {
    padding-top: 70px;
  }

  .carte {
    flex-direction: column;
    align-items: flex-start;
  }

  .carte img {
    width: 100%;
    height: auto;
  }

  .cartes-grille {
    padding: 10px;
  }

  .dispo {
    margin-top: 100px;
    margin-bottom: 70px;
  }
}
</style>
