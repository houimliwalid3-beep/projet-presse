<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[0])">
              <img :src="getArticleImage(articles[0])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[0].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[1])">
              <img :src="getArticleImage(articles[1])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[1].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[2])">
              <img :src="getArticleImage(articles[2])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[2].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[3])">
              <img :src="getArticleImage(articles[3])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[3].title }}</h4></div>
              <BoutonFav />
            </div>
            
          </div>
        </div>
      </div>

      <!-- Carte principale 2 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[5])">
              <img :src="getArticleImage(articles[5])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[5].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[6])">
              <img :src="getArticleImage(articles[6])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[6].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[7])">
              <img :src="getArticleImage(articles[7])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[7].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[8])">
              <img :src="getArticleImage(articles[8])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[8].title }}</h4></div>
              <BoutonFav />
            </div>
            
          </div>
        </div>
      </div>

      <!-- Carte principale 3 -->
      <div class="col-md-4">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[10])">
              <img :src="getArticleImage(articles[10])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[10].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[11])">
              <img :src="getArticleImage(articles[11])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[11].title }}</h4></div>
              <BoutonFav />
            </div>
            <div class="carte-interne d-flex align-items-center mb-2 p-2" @click="showArticle(articles[12])">
              <img :src="getArticleImage(articles[12])" class="img-sous-carte" @error="onImgError"/>
              <div class="contenu ms-3 flex-grow-1"><h4>{{ articles[12].title }}</h4></div>
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
import ArticlesModule from '../data/articles.js'
import { ref } from 'vue'

const articles = ArticlesModule.data().articles
const selectedArticle = ref(null)

function showArticle(article) { selectedArticle.value = article }
function hideArticle(article) { selectedArticle.value = null }

function onImgError(event) {
  const img = event?.target
  if (!img) return
  if (!img.dataset.fallback) {
    img.dataset.fallback = '1'
    img.src = '/src/image/trump.avif'
  }
}

function getArticleImage(article) {
  return article.image ? `./media/${article.image}` : '/src/image/trump.avif'
}
</script>

<style scoped>
.container { margin: 80px auto; }
.card-principale { border: 2px solid #333; border-radius: 10px; padding: 20px; background-color: #f8f9fa; }
.sous-cartes { display: flex; flex-direction: column; gap: 10px; }
.carte-interne { border: 1px solid #aaa; border-radius: 8px; padding: 10px; display: flex; align-items: center; cursor: pointer; transition: transform 0.2s; }
.carte-interne:hover { transform: scale(1.02); }
.img-sous-carte { width: 60px; height: 60px; object-fit: cover; border-radius: 5px; }
.contenu { margin-left: 10px; flex-grow: 1; }
</style>
