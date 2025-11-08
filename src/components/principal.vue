<template>
  <div id="principal-container" class="row container align-items-center">
    <!-- Colonne principale avec image de fond -->
    <div class="col-md-8 colonne1">
      <p class="titre">
        Les frameworks CSS les plus populaires en 2025
      </p>
    </div>

    <!-- Colonne secondaire avec cartes -->
    <div class="col-md-4 colonne2">
      <div class="row">
        <div class="col-md-12 sous-colonne">
          <div class="carte">
            <img src="../image/css-animation.png" alt="photo" />
            <div class="contenu">
              <h4>Créer des animations fluides avec CSS et JavaScript</h4>
            </div>
            <BoutonFav />
          </div>
        </div>

        <div class="col-md-12 sous-colonne">
          <div class="carte">
            <img src="../image/react.png" alt="photo" />
            <div class="contenu">
              <h4>Les hooks React pour les développeurs Vue.js</h4>
            </div>
            <BoutonFav />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoutonFav from '../components/boutonFav.vue'

export default {
  components: { BoutonFav }
}
</script>

<style scoped>
/* Container principal */
#principal-container {
  margin-left: 100px;
}

/* Colonne 1 : image de fond avec texte */
.colonne1 {
  background-image: url(../image/framework-vs.webp);
  border-radius: 5%;
  background-size: cover;
  background-position: center;
  height: 350px;
  position: relative;
  color: white;
}

.titre {
  position: absolute;
  bottom: 0;
  left: 20px;
  background-color: rgba(77, 77, 77, 0.5);
  padding: 10px;
  border-radius: 5px;
  font-size: 24px;
}

/* Colonne 2 : cartes */
.colonne2 {
  height: 350px;
  padding: 10px;
}

.sous-colonne {
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left: 15px;
  padding: 10px;
}

.carte {
  display: flex;
  align-items: center;
  gap: 10px;
}

.carte img {
  width: 100px;
  height: 70px;
  border-radius: 6px;
}

.carte .contenu {
  flex: 1;
}

.carte .contenu h4 {
  margin: 0;
  font-size: 16px;
}

/* Responsive : sur écran < 768px */
@media (max-width: 768px) {
  /* Les colonnes se superposent verticalement */
  #principal-container {
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 200px;
  }

  .colonne1,
  .colonne2 {
    width: 100%;
    margin-bottom: 20px;
  }

  /* Les cartes deviennent verticales */
  .carte {
    flex-direction: column;
    align-items: flex-start;
  }

  .carte img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .sous-colonne {
    margin-left: 0;
  }
}
</style>
