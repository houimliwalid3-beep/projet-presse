<template>
  <div id="principal-container" class="container mt-4">
    <h1>Tous les articles</h1>

    

    <p class="text-muted">{{ filteredArticles.length }} résultat(s)</p>

    <section class="articles-list">
      <article
        v-for="article in filteredArticles"
        :key="article.id"
        class="article-item mb-4 p-3 border rounded"
      >
        <h2>{{ article.title }}</h2>
        <p class="meta"><em>Par {{ article.author }} — {{ article.readingTime }} min</em></p>

        

        <p>{{ article.body }}</p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticlesModule from '../data/articles.js'


// Récupère le tableau d'articles depuis le module existant
const allArticles = ArticlesModule.data().articles

// filtre réactif (v-model depuis SearchForm)
const filters = ref({ q: '', category: '' })

const categories = Array.from(new Set(allArticles.map(a => a.category).filter(Boolean))).sort()

const normalized = (s = '') => String(s).toLowerCase().trim()

const filteredArticles = computed(() => {
  const q = normalized(filters.value.q)
  const category = filters.value.category

  return allArticles.filter(a => {
    if (category && a.category !== category) return false
    if (!q) return true

    return (
      normalized(a.title).includes(q) ||
      normalized(a.author).includes(q) ||
      normalized(a.body).includes(q) ||
      (a.resume && normalized(a.resume).includes(q))
    )
  })
})





</script>

<style scoped>

</style>
