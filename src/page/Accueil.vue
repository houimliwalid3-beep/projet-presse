<template>

  <principal />


  <div class="container">
    <!-- === PARTIE HAUT (ta mise en page actuelle) === -->
    
    <!-- === CHOIX DE DISPOSITION === -->
    <div class=" mt-5">
      <h5>Choisissez la disposition des colonnes :</h5>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="colonnes"
          id="radio2"
          value="2"
          v-model="choixColonnes"
        />
        <label class="form-check-label" for="radio2">2 colonnes</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="colonnes"
          id="radio3"
          value="3"
          v-model="choixColonnes"
        />
        <label class="form-check-label" for="radio3">3 colonnes</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="colonnes"
          id="radio4"
          value="4"
          v-model="choixColonnes"
        />
        <label class="form-check-label" for="radio4">4 colonnes</label>
      </div>
    </div>

    <!-- === AFFICHAGE DYNAMIQUE SELON LE CHOIX === -->

    <h1 class="second">Article secondaire :</h1>
    
    <div class="cartes-grille mt-4">
      <deuxColonnes v-if="choixColonnes === '2'" />
      <TroisColonnes v-else-if="choixColonnes === '3'" />
      <quatreColonnes v-else />
    </div>
  </div>
</template>

<script>
import principal from '../components/principal.vue'
import BoutonFav from '../components/boutonFav.vue'
import TroisColonnes from '../components/trois-colonnes.vue'
import quatreColonnes from '../components/quatre-colonnes.vue'
import deuxColonnes from '../components/deux-colonnes.vue'

export default {
  components: {
    principal,
    BoutonFav,
    TroisColonnes,
    quatreColonnes,
    deuxColonnes
  },
  data() {
    return {
      // Par défaut : 3 colonnes
      choixColonnes: '3'
    }
  }
}
</script>

<style scoped>
.img-sous-carte {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

.contenu {
  margin-left: 10px;
}

.container {
  margin-top: 20px;
}

/* === Colonne 1 === */
.colonne1 {
  background-image: url(../image/trump.avif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  position: relative;
  color: white;
}

.titre {
  position: absolute;
  bottom: 0;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  font-size: 24px;
}

/* === Colonne 2 === */
.colonne2 {
  background-color: rgb(92, 115, 115);
  height: 350px;
  padding: 10px;
}

/* === Cartes === */
.sous-colonne {
  background-color: rgb(189, 189, 189);
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
}

.carte {
  display: flex;
  align-items: center;
  gap: 10px;
}

.carte img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
}

.carte .contenu {
  flex: 1;
}

.carte .contenu h4 {
  margin: 0;
  font-size: 16px;
}

.carte .contenu p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #222;
}

/* === Nouveau container 3x3 === */
.cartes-grille {
  margin-top: 80px;
  background-color: #f8f7f7;
  padding: 20px;
}

/* Responsive : image au-dessus du texte sur mobile */
@media (max-width: 768px) {
  .carte {
    flex-direction: column;
    align-items: flex-start;
  }

  .carte img {
    width: 100%;
    height: auto;
  }
}


.second {
  color: rgb(75, 75, 75);
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
}


</style>
