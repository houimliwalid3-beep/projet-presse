<template>
  <div id="principal-container" class="container mt-4">
    <h1>Tous les articles</h1>

    <p class="text-muted">25 résultat(s)</p>

    <section class="articles-list">
      <!-- Article 1 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[0].title }}</h2>
        <p class="meta"><em>Par {{ articles[0].author }}</em></p>
        <p>{{ articles[0].body }}</p>
      </article>

      <!-- Article 2 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[1].title }}</h2>
        <p class="meta"><em>Par {{ articles[1].author }}</em></p>
        <p>{{ articles[1].body }}</p>
      </article>

      <!-- Article 3 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[2].title }}</h2>
        <p class="meta"><em>Par {{ articles[2].author }}</em></p>
        <p>{{ articles[2].body }}</p>
      </article>

      <!-- Article 4 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[3].title }}</h2>
        <p class="meta"><em>Par {{ articles[3].author }}</em></p>
        <p>{{ articles[3].body }}</p>
      </article>

      <!-- Article 5 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[4].title }}</h2>
        <p class="meta"><em>Par {{ articles[4].author }}</em></p>
        <p>{{ articles[4].body }}</p>
      </article>

      <!-- Article 6 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[5].title }}</h2>
        <p class="meta"><em>Par {{ articles[5].author }}</em></p>
        <p>{{ articles[5].body }}</p>
      </article>

      <!-- Article 7 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[6].title }}</h2>
        <p class="meta"><em>Par {{ articles[6].author }}</em></p>
        <p>{{ articles[6].body }}</p>
      </article>

      <!-- Article 8 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[7].title }}</h2>
        <p class="meta"><em>Par {{ articles[7].author }}</em></p>
        <p>{{ articles[7].body }}</p>
      </article>

      <!-- Article 9 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[8].title }}</h2>
        <p class="meta"><em>Par {{ articles[8].author }}</em></p>
        <p>{{ articles[8].body }}</p>
      </article>

      <!-- Article 10 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[9].title }}</h2>
        <p class="meta"><em>Par {{ articles[9].author }}</em></p>
        <p>{{ articles[9].body }}</p>
      </article>

      <!-- Article 11 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[10].title }}</h2>
        <p class="meta"><em>Par {{ articles[10].author }}</em></p>
        <p>{{ articles[10].body }}</p>
      </article>

      <!-- Article 12 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[11].title }}</h2>
        <p class="meta"><em>Par {{ articles[11].author }}</em></p>
        <p>{{ articles[11].body }}</p>
      </article>

      <!-- Article 13 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[12].title }}</h2>
        <p class="meta"><em>Par {{ articles[12].author }}</em></p>
        <p>{{ articles[12].body }}</p>
      </article>

      <!-- Article 14 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[13].title }}</h2>
        <p class="meta"><em>Par {{ articles[13].author }}</em></p>
        <p>{{ articles[13].body }}</p>
      </article>

      <!-- Article 15 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[14].title }}</h2>
        <p class="meta"><em>Par {{ articles[14].author }}</em></p>
        <p>{{ articles[14].body }}</p>
      </article>

      <!-- Article 16 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[15].title }}</h2>
        <p class="meta"><em>Par {{ articles[15].author }}</em></p>
        <p>{{ articles[15].body }}</p>
      </article>

      <!-- Article 17 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[16].title }}</h2>
        <p class="meta"><em>Par {{ articles[16].author }}</em></p>
        <p>{{ articles[16].body }}</p>
      </article>

      <!-- Article 18 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[17].title }}</h2>
        <p class="meta"><em>Par {{ articles[17].author }}</em></p>
        <p>{{ articles[17].body }}</p>
      </article>

      <!-- Article 19 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[18].title }}</h2>
        <p class="meta"><em>Par {{ articles[18].author }}</em></p>
        <p>{{ articles[18].body }}</p>
      </article>

      <!-- Article 20 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[19].title }}</h2>
        <p class="meta"><em>Par {{ articles[19].author }}</em></p>
        <p>{{ articles[19].body }}</p>
      </article>

      <!-- Article 21 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[20].title }}</h2>
        <p class="meta"><em>Par {{ articles[20].author }}</em></p>
        <p>{{ articles[20].body }}</p>
      </article>

      <!-- Article 22 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[21].title }}</h2>
        <p class="meta"><em>Par {{ articles[21].author }}</em></p>
        <p>{{ articles[21].body }}</p>
      </article>

      <!-- Article 23 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[22].title }}</h2>
        <p class="meta"><em>Par {{ articles[22].author }}</em></p>
        <p>{{ articles[22].body }}</p>
      </article>

      <!-- Article 24 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[23].title }}</h2>
        <p class="meta"><em>Par {{ articles[23].author }}</em></p>
        <p>{{ articles[23].body }}</p>
      </article>

      <!-- Article 25 -->
      <article class="article-item mb-4 p-3 border rounded">
        <h2>{{ articles[24].title }}</h2>
        <p class="meta"><em>Par {{ articles[24].author }}</em></p>
        <p>{{ articles[24].body }}</p>
      </article>

    </section>
  </div>
</template>

<script setup>
import ArticlesModule from '../data/articles.js'

// On récupère les articles
const articles = ArticlesModule.data().articles
</script>

<style scoped>
.container { margin-top: 20px; }
.article-item h2 { margin: 0; font-size: 20px; }
.article-item p { margin: 5px 0; }
.meta { color: gray; font-size: 14px; }
</style>
