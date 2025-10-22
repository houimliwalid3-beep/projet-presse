<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Carte principale 1 -->
      <div class="col-md-6" v-for="colIndex in 2" :key="colIndex">
        <div class="card-principale p-3">
          <div class="sous-cartes mt-3">
            <div
              class="carte-interne d-flex align-items-center mb-2 p-2"
              v-for="itemIndex in 5"
              :key="itemIndex"
            >
              <div class="img-sous-carte id-box">
                {{ (articlesByCol[colIndex-1] && articlesByCol[colIndex-1][itemIndex-1]) ? articlesByCol[colIndex-1][itemIndex-1].id : '—' }}
              </div>
              <div class="contenu ms-3 flex-grow-1">
                <h4>
                  {{ (articlesByCol[colIndex-1] && articlesByCol[colIndex-1][itemIndex-1]) ? articlesByCol[colIndex-1][itemIndex-1].title : ('Titre ' + itemIndex) }}
                </h4>
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
import BoutonFav from './boutonFav.vue'
import articles from '../data/articles.json'
import { ref, onMounted } from 'vue'

const articlesByCol = ref([])

function pickRandomArticle() {
  if (!articles || articles.length === 0) return null
  return articles[Math.floor(Math.random() * articles.length)]
}

onMounted(() => {
  // build a 2 x 5 matrix of random articles so values stay stable during the session
  const cols = []
  for (let c = 0; c < 2; c++) {
    const arr = []
    for (let j = 0; j < 5; j++) {
      arr.push(pickRandomArticle())
    }
    cols.push(arr)
  }
  articlesByCol.value = cols
})
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
  flex-direction: column;
  gap: 10px;
}

.carte-interne {
  border: 1px solid #aaa;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.carte-interne:hover {
  transform: scale(1.02);
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
