<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 1</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 2</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 3</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 2 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 1</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 2</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 3</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 3 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 1</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 2</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center p-2">
              <img src="../image/trump.avif" alt="photo" class="img-sous-carte">
              <div class="contenu ms-3 flex-grow-1">
                <h4>Titre 3</h4>
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
// Aucun state nécessaire ici
</script>

<style scoped>
.container {
  margin: 80px auto;
}

.card-principale {
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  height: 100%;
}

.sous-cartes {
  display: flex;
  flex-direction: column; /* empile verticalement */
  gap: 10px;
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
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

.contenu {
  margin-left: 10px;
  flex-grow: 1;
}
</style>
