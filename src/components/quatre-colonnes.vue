<template>
  <div class="container mt-4">
    <div class="row g-4">

      <!-- Carte principale 1 -->
      <div class="col-md-3">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 0 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[0]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[0].image}`" class="img-sous-carte" :alt="articles[0].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[0].title }}</h5></div>
              <BoutonFav />
            </div>
            <!-- Carte 1 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[1]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[1].image}`" class="img-sous-carte" :alt="articles[1].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[1].title }}</h5></div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 2 -->
      <div class="col-md-3">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 2 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[2]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[2].image}`" class="img-sous-carte" :alt="articles[2].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[2].title }}</h5></div>
              <BoutonFav />
            </div>
            <!-- Carte 3 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[3]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[3].image}`" class="img-sous-carte" :alt="articles[3].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[3].title }}</h5></div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 3 -->
      <div class="col-md-3">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 4 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[4]" 
                 @mouseleave="hoveredArticle = null" >
              <img :src="`/src/media/${articles[4].image}`" class="img-sous-carte" :alt="articles[4].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[4].title }}</h5></div>
              <BoutonFav />
            </div>
            <!-- Carte 5 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[5]" 
                 @mouseleave="hoveredArticle = null" >
              <img :src="`/src/media/${articles[5].image}`" class="img-sous-carte" :alt="articles[5].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[5].title }}</h5></div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

      <!-- Carte principale 4 -->
      <div class="col-md-3">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Carte 6 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[6]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[6].image}`" class="img-sous-carte" :alt="articles[6].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[6].title }}</h5></div>
              <BoutonFav />
            </div>
            <!-- Carte 7 -->
            <div class="carte-interne" 
                 @mouseover="hoveredArticle = articles[7]" 
                 @mouseleave="hoveredArticle = null">
              <img :src="`/src/media/${articles[7].image}`" class="img-sous-carte" :alt="articles[7].title"/>
              <div class="contenu ms-3 flex-grow-1"><h5>{{ articles[7].title }}</h5></div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Fenêtre d'aperçu -->
    <div v-if="hoveredArticle" class="preview-popup">
      <h5>{{ hoveredArticle.title }}</h5>
      <p><em>Par {{ hoveredArticle.author }}</em></p>
      <p><strong>Catégorie :</strong> {{ hoveredArticle.category }}</p>
      <p>{{ hoveredArticle.more }}</p>
    </div>
  </div>
</template>

<script setup>
import BoutonFav from './boutonFav.vue'
import ArticlesModule from '../data/articles.js'
import { ref } from 'vue'

const articles = ArticlesModule.data().articles
const selectedArticle = ref(null)
const hoveredArticle = ref(null)
</script>

<style scoped>
.card-principale { border: 1px solid #333; border-radius: 10px; padding: 20px; background-color: #f8f9fa; }
.sous-cartes { display: flex; flex-direction: column; gap: 10px; }
.carte-interne { border: 1px solid #aaa; border-radius: 8px; padding: 10px; display: flex; align-items: center; cursor: pointer; transition: transform 0.2s; }
.carte-interne:hover { transform: scale(1.02); }
.img-sous-carte { width: 60px; height: 60px; object-fit: cover; border-radius: 5px; }
.contenu { margin-left: 10px; flex-grow: 1; }
.preview-popup {
  position: fixed;
  top: 100px;
  right: 30px;
  width: 250px;
  padding: 10px;
  background: #fff;
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
</style>
