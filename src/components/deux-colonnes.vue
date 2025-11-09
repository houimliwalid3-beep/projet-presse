<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-6">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <!-- Boucle sur les 5 premiers articles -->
            <div
              v-for="article in articles.slice(0, 5)"
              :key="article.id"
              class="carte-interne d-flex align-items-center mb-2 p-2"
              
              @mouseover="hoveredArticle = article"
              @mouseleave="hoveredArticle = null"
            >
              <img
                :src="`/src/media/${article.image}`"
                :alt="article.title"
                class="image"
              />
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ article.title }}</h5>
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
            <!-- Boucle sur les 5 suivants articles -->
            <div
              v-for="article in articles.slice(5, 10)"
              :key="article.id"
              class="carte-interne d-flex align-items-center mb-2 p-2"
              
              @mouseover="hoveredArticle = article"
              @mouseleave="hoveredArticle = null"
            >
              <img
                :src="`/src/media/${article.image}`"
                :alt="article.title"
                class="image"
              />
              <div class="contenu ms-3 flex-grow-1">
                <h5>{{ article.title }}</h5>
              </div>
              <BoutonFav />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fenêtre d'aperçu au survol -->
    <div v-if="hoveredArticle" class="preview-popup">
      <h5>{{ hoveredArticle.id }}</h5>
      <h5>{{ hoveredArticle.title }}</h5>
      <p><em>Par {{ hoveredArticle.author }}</em></p>
      <p><em>temps de lecture : {{ hoveredArticle.readingTime }} min</em></p>
      <p>{{ hoveredArticle.category}}</p>
    </div>
  </div>
</template>

<script setup>
import BoutonFav from './boutonFav.vue'
import ArticlesModule from '../data/articles.js'
import { ref } from 'vue'

// Récupérer 10 articles
const articles = ArticlesModule.data().articles.slice(0, 10)

// Article sélectionné pour affichage détaillé
const selectedArticle = ref(null)

// Article survolé pour mini-fenêtre
const hoveredArticle = ref(null)
</script>

<style scoped>
.container { margin: 80px auto; }

.card-principale {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
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

.image{
  width: 75px;
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

/* <img :src="`/src/media/${hoveredArticle.image}`" class="image" :alt="hoveredArticle.title" /> */


</style>
