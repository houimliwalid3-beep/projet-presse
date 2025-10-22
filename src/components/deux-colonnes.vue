<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-6">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[0])">
              <img :src="getArticleImage(articles[0])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[0].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[1])">
              <img :src="getArticleImage(articles[1])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[1].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[2])">
              <img :src="getArticleImage(articles[2])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[2].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[3])">
              <img :src="getArticleImage(articles[3])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[3].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[4])">
              <img :src="getArticleImage(articles[4])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[4].title }}</h4>
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
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[5])">
              <img :src="getArticleImage(articles[5])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[5].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[6])">
              <img :src="getArticleImage(articles[6])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[6].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[7])">
              <img :src="getArticleImage(articles[7])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[7].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[8])">
              <img :src="getArticleImage(articles[8])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[8].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>

            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[9])">
              <img :src="getArticleImage(articles[9])" alt="photo" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1">
                <h4>{{ articles[9].title }}</h4>
                <p>Petit texte descriptif.</p>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>
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

// Méthodes pour afficher / cacher un article
function showArticle(article) {
  selectedArticle.value = article
  console.log("lire article " + article.id)
}
function hideArticle(article) {
  selectedArticle.value = null
  console.log("cacher article " + article.id)
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

.card-principale { border: 2px solid #333; border-radius: 10px; padding: 20px; background-color: #f8f9fa; height: 100%; }

.sous-cartes { display: flex; flex-direction: column; gap: 10px; }

.carte-interne { border: 1px solid #aaa; border-radius: 8px; background-color: #fff; padding: 10px; display: flex; align-items: center; transition: transform 0.2s; cursor: pointer; }

.carte-interne:hover { transform: scale(1.02); }

.img-sous-carte { width: 60px; height: 60px; object-fit: cover; border-radius: 5px; }

.contenu { margin-left: 10px; flex-grow: 1; }
</style>
