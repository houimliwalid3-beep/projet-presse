<template>
  <div id="principal-container" class="row container align-items-center">
    <div class="col-md-8 colonne1">
      <p class="titre">
        Les récentes annonces de la Maison-Blanche sur la santé de Donald Trump interpellent plusieurs médecins :
        "S'intéressent-ils à de nouveaux symptômes ?"
      </p>
    </div>

    <div class="col-md-4 colonne2">
      <div class="row">
        <div class="col-md-12 sous-colonne">
          <div class="carte">
            <img src="../image/trump.avif" alt="photo" />
            <div class="contenu">
              <h4>Titre de la carte</h4>
              <p>Petit texte descriptif.</p>
            </div>
            <BoutonFav />
          </div>
        </div>

        <div class="col-md-12 sous-colonne">
          <div class="carte">
            <img src="../image/trump.avif" alt="photo" />
            <div class="contenu">
              <h4>Deuxième carte</h4>
              <p>Autre texte descriptif.</p>
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

#principal-container{
    margin-left: 100px;
}

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
</style>
