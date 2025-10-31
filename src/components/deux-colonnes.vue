<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-6">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 1 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[0])"
                 @mouseover="hoveredArticle = articles[0]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[0])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[0].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 2 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[1])"
                 @mouseover="hoveredArticle = articles[1]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[1])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <5>{{ articles[1].title }}</5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 3 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[2])"
                 @mouseover="hoveredArticle = articles[2]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[2])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[2].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 4 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[3])"
                 @mouseover="hoveredArticle = articles[3]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[3])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[3].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 5 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[4])"
                 @mouseover="hoveredArticle = articles[4]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[4])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[4].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 2 -->
      <div class="col-md-6">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 6 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[5])"
                 @mouseover="hoveredArticle = articles[5]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[5])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[5].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 7 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[6])"
                 @mouseover="hoveredArticle = articles[6]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[6])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[6].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 8 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[7])"
                 @mouseover="hoveredArticle = articles[7]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[7])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[7].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 9 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[8])"
                 @mouseover="hoveredArticle = articles[8]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[8])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[8].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <!-- Carte 10 -->
            <div class="carte-interne d-flex align-items-center mb-2 p-2"
                 @click="showArticle(articles[9])"
                 @mouseover="hoveredArticle = articles[9]"
                 @mouseleave="hoveredArticle = null">
              <img :src="getArticleImage(articles[9])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ articles[9].title }}</h5>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fenêtre d'aperçu au survol -->
    <div v-if="hoveredArticle" class="preview-popup">
      <h5>{{ hoveredArticle.title }}</h5>
      <p><em>Par {{ hoveredArticle.author }}</em></p>
      <p><strong>Catégorie :</strong> {{ hoveredArticle.category }}</p>
      <p>{{ hoveredArticle.more }}</p>
    </div>

    <!-- Affichage article sélectionné -->
    <div v-if="selectedArticle" class="mt-4">
      <h3>A la une : {{ selectedArticle.title }}</h3>
      <img :src="media_path" alt="illustration" class="img-fluid mb-2"/>
      <p>{{ selectedArticle.body }}</p>
      <button @click="hideArticle(selectedArticle)" class="btn btn-secondary">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import BoutonFav from './boutonFav.vue'
import ArticlesModule from '../data/articles.js'
import { ref, computed } from 'vue'

// Récupérer 10 articles
const articles = ArticlesModule.data().articles.slice(0, 10)

// Article sélectionné
const selectedArticle = ref(null)

// Article survolé pour la mini-fenêtre
const hoveredArticle = ref(null)

// Méthodes pour afficher / cacher un article
function showArticle(article) {
  selectedArticle.value = article
}
function hideArticle(article) {
  selectedArticle.value = null
}

// computed pour le media_path
const media_path = computed(() => {
  return selectedArticle.value ? `./media/${selectedArticle.value.image}` : ''
})

// Fallback si image ne charge pas
function onImgError(event) {
  const img = event?.target
  if (!img) return
  if (!img.dataset.fallback) {
    img.dataset.fallback = '1'
    img.src = '/src/image/trump.avif'
  }
}

// Chemin image pour chaque sous-carte
function getArticleImage(article) {
  return article.image ? `./media/${article.image}` : '/src/image/trump.avif'
}
</script>

<style scoped>
.container { margin: 80px auto; }

.card-principale {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  height: 100%;
}

.sous-cartes { display: flex; flex-direction: column; gap: 10px; }

.carte-interne {
  border: 1px solid #aaa;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  cursor: pointer;
}

.carte-interne:hover { transform: scale(1.02); }

.img-sous-carte {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

.contenu { margin-left: 10px; flex-grow: 1; }

/* Fenêtre d'aperçu */
.preview-popup {
  position: fixed;
  top: 100px;
  right: 30px;
  width: 250px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 100;
}
</style>
