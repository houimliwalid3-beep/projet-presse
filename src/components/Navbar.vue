<template>
  <nav class="bg-light py-4">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">{{ Titre }}</div>

        <div class="col-md-6">
          <ul class="nav justify-content-center">
            <li class="nav-item" v-for="(link, i) in links" :key="i">
              <router-link v-if="link.to" :to="link.to" class="nav-link text-dark">{{ link.text }}</router-link>
              <a v-else :href="link.href" class="nav-link text-dark">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 text-end">
          <button class="btn btn-success">Connexion</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Sélecteurs -->
  <div class="container mt-4">

    <!-- Choisir police -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownFont" data-bs-toggle="dropdown" aria-expanded="false">
        Choisir une police
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownFont">
        <li v-for="(font, i) in fonts" :key="i">
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="font" :id="'font' + i" :value="font.value" v-model="selectedFont">
            <label class="form-check-label" :for="'font' + i" :style="{ fontFamily: font.value }">{{ font.label }}</label>
          </div>
        </li>
      </ul>
    </div>

    <!-- Choisir couleur -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownColor" data-bs-toggle="dropdown" aria-expanded="false">
        Choisir une couleur
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownColor">
        <li v-for="(color, i) in colors" :key="i">
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="color" :id="'color' + i" :value="color.value" v-model="selectedColor">
            <label class="form-check-label" :for="'color' + i" :style="{ color: color.value, fontWeight: 'bold' }">{{ color.label }}</label>
          </div>
        </li>
      </ul>
    </div>

    <!-- Afficher image / texte -->
    <div class="dropdown d-inline-block">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownDisplay" data-bs-toggle="dropdown" aria-expanded="false">
        Afficher
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownDisplay">
        <li>
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="display" id="display1" value="image" v-model="displayMode">
            <label class="form-check-label" for="display1">Images</label>
          </div>
        </li>
        <li>
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="display" id="display2" value="text" v-model="displayMode">
            <label class="form-check-label" for="display2">Texte</label>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, watchEffect, watch } from 'vue'

const Titre = 'Mon Site'

const links = [
  { text: 'Accueil', to: '/' },
  { text: 'Favoris', to: '/favoris' },
  { text: 'Formulaire', href: '#' },
  { text: 'A Propos', href: '#' }
]

const fonts = [
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Courier New', value: '"Courier New", monospace' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' }
]

const colors = [
  { label: 'Noir', value: 'black' },
  { label: 'Bleu', value: 'blue' },
  { label: 'Rouge', value: 'red' }
]

// Charger la couleur sauvegardée (si l'utilisateur a déjà choisi une couleur)
const selectedFont = ref('Arial, sans-serif')
const selectedColor = ref(localStorage.getItem('selectedColor') || 'black')
const displayMode = ref('image') // 👈 Par défaut : affiche les images

// ✅ Police et couleur pour tout le site
watchEffect(() => {
  document.body.style.fontFamily = selectedFont.value
  document.body.style.color = selectedColor.value
})

// Sauvegarder la couleur choisie dans localStorage pour persistance
watch(selectedColor, (newColor) => {
  try {
    localStorage.setItem('selectedColor', newColor)
  } catch (e) {
    // ignore localStorage errors (e.g. privacy mode)
  }
})

// ✅ Gestion image / texte uniquement dans #principal-container
watchEffect(() => {
  const container = document.getElementById('principal-container')
  if (container) {
    const images = container.querySelectorAll('img')
    const textes = container.querySelectorAll('p, h4, h3, h2, h1, span')

    images.forEach(img => {
      img.style.display = displayMode.value === 'image' ? 'block' : 'none'
    })
    textes.forEach(txt => {
      txt.style.display = displayMode.value === 'text' ? 'block' : 'none'
    })
  }
})
</script>

<style scoped>
label {
  cursor: pointer;
}
</style>
