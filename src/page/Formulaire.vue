<template>
  <div class="container mt-4">
    <h1>🔍 Recherche d’articles</h1>

    <div class="row mt-4">
      <!-- COLONNE GAUCHE : FORMULAIRE DE RECHERCHE -->
      <aside class="col-md-4 border-end pe-4">
        <h4>Formulaire de recherche</h4>

        <!-- Mot-clé -->
        <div class="form-group mb-3">
          <label>Mot-clé dans le titre :</label>
          <input
            type="text"
            v-model="searchTitle"
            placeholder="Recherche..."
            class="form-control"
          />
        </div>

        <!-- Catégorie -->
        <div class="form-group mb-3">
          <label>Catégorie :</label>
          <div>
            <div v-for="category in categories" :key="category" class="form-check">
              <input
                type="radio"
                :id="category"
                :value="category"
                v-model="selectedCategory"
                class="form-check-input"
              />
              <label :for="category" class="form-check-label">{{ category }}</label>
            </div>
          </div>
        </div>

        <!-- Auteur -->
        <div class="form-group mb-3">
          <label>Auteur :</label>
          <select v-model="selectedAuthor" class="form-select">
            <option value="">Tous les auteurs</option>
            <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
          </select>
        </div>
      </aside>

      <!-- COLONNE DROITE : AFFICHAGE DES RÉSULTATS -->
      <main class="col-md-8 ps-4">
        <h4>Résultats de la recherche</h4>
        <p class="text-muted">{{ filteredArticles.length }} article(s) trouvé(s)</p>

        <section class="articles-list">
          <!-- Liste des articles filtrés -->
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-item mb-4 p-3 border rounded"
          >
            <h2>{{ article.title }}</h2>
            <p><em>Par {{ article.author }} — {{ article.readingTime }} min</em></p>
            <p><strong>Catégorie :</strong> {{ article.category }}</p>
            <p>{{ article.body }}</p>
          </article>
        </section>
      </main>
    </div>

    <!-- (FUTUR) ZONE SUPPLÉMENTAIRE : afficher un article complet ici -->
    <!-- <div class="mt-5"> ... </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticlesModule from '../data/articles.js'

// Récupère tous les articles depuis le fichier JSON
const allArticles = ArticlesModule.data().articles

// Variables liées aux choix de l’utilisateur
const searchTitle = ref('')
const selectedCategory = ref('')
const selectedAuthor = ref('')

// Liste unique des catégories et des auteurs
const categories = [...new Set(allArticles.map(a => a.category).filter(Boolean))]
const authors = [...new Set(allArticles.map(a => a.author).filter(Boolean))]

// Fonction de filtrage
const filteredArticles = computed(() => {
  return allArticles.filter(article => {
    // Filtre par catégorie
    if (selectedCategory.value && article.category !== selectedCategory.value) return false
    // Filtre par auteur
    if (selectedAuthor.value && article.author !== selectedAuthor.value) return false
    // Filtre par mot-clé dans le titre
    if (searchTitle.value) {
      const titre = article.title.toLowerCase()
      const mot = searchTitle.value.toLowerCase()
      if (!titre.includes(mot)) return false
    }
    return true
  })
})
</script>

<style scoped>
/* --- Styles du formulaire --- */
.form-group label {
  font-weight: bold;
}

input[type="text"],
select {
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* --- Mise en page du layout --- */
aside {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

/* --- Articles --- */
.article-item h2 {
  margin-bottom: 0.4rem;
}
.article-item:hover {
  background-color: #f3f3f3;
}
</style>
