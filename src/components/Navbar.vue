<template>
  <nav class="bg-light py-4">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo -->
        <div class="col-6 col-md-3">
          <router-link to="/">
            <img src="/src/image/Logo_Presse_Océan.svg.png" alt="Logo" style="height: 50px;">
          </router-link>
        </div>

        <!-- Liens -->
        <div class="col-md-6">
          <ul class="nav justify-content-center">
            <li class="nav-item" v-for="(link, i) in links" :key="i">
              <router-link v-if="link.to" :to="link.to" class="nav-link text-dark">{{ link.text }}</router-link>
              <a v-else :href="link.href" class="nav-link text-dark">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Bouton Connexion centré verticalement -->
        <div class="col-md-3 d-flex justify-content-end align-items-center">
          <router-link to="/Connexion" class="btn-connexion">
            Connexion
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Sélecteurs et compteur -->
  <div class="container mt-4">
    <!-- Choisir police -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownFont" data-bs-toggle="dropdown">
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
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownColor" data-bs-toggle="dropdown">
        Choisir une couleur
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownColor">
        <li v-for="(color, i) in colors" :key="i">
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="color" :id="'color' + i" :value="color.value" v-model="selectedColor">
            <label class="form-check-label" :for="'color' + i" :style="{ color: color.value, fontWeight:'bold' }">{{ color.label }}</label>
          </div>
        </li>
      </ul>
    </div>

    <!-- Afficher image / texte / par défaut -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownDisplay" data-bs-toggle="dropdown">
        Afficher
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownDisplay">
        <li>
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="display" id="displayDefault" @click="handleDisplayClick('default')">
            <label class="form-check-label" for="displayDefault">Par défaut</label>
          </div>
        </li>
        <li>
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="display" id="displayImage" @click="handleDisplayClick('image')">
            <label class="form-check-label" for="displayImage">Images</label>
          </div>
        </li>
        <li>
          <div class="form-check ms-3">
            <input class="form-check-input" type="radio" name="display" id="displayText" @click="handleDisplayClick('text')">
            <label class="form-check-label" for="displayText">Texte</label>
          </div>
        </li>
      </ul>
    </div>

    <!-- Bouton Réinitialiser compteur -->
    <button class="btn  ms-3  conn-btn" @click="resetClick">Click : {{ clickCount }}</button>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted } from 'vue'

const Titre = 'Mon Site'

const links = [
  { text: 'Accueil', to: '/' },
  { text: 'Articles', to: '/articles' },
  { text: 'Favoris', to: '/favoris' },
  { text: 'Formulaire', to: '/Formulaire' },
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

const selectedFont = ref('Arial, sans-serif')
const selectedColor = ref(localStorage.getItem('selectedColor') || 'black')

watchEffect(() => {
  document.body.style.fontFamily = selectedFont.value
  document.body.style.color = selectedColor.value
})

watch(selectedColor, (newColor) => {
  try { localStorage.setItem('selectedColor', newColor) } catch(e) {}
})

function handleDisplayClick(mode) {
  const container = document.getElementById('principal-container')
  if (!container) return

  const images = container.querySelectorAll('img')
  const textes = container.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6')

  if (mode === 'image') {
    images.forEach(img => img.style.display = 'none')
    textes.forEach(txt => txt.style.display = 'block')
  } else if (mode === 'text') {
    images.forEach(img => img.style.display = 'block')
    textes.forEach(txt => txt.style.display = 'none')
  } else if (mode === 'default') {
    images.forEach(img => img.style.display = 'block')
    textes.forEach(txt => txt.style.display = 'block')
  }
}

const clickCount = ref(parseInt(localStorage.getItem('clickCount') || '0'))

function incrementClick() {
  clickCount.value++
  localStorage.setItem('clickCount', clickCount.value)
}

function resetClick() {
  clickCount.value = -1
  localStorage.setItem('clickCount', 0)
}

onMounted(() => {
  window.addEventListener('click', incrementClick)
})
</script>

<style scoped>
label { cursor: pointer; }

.btn-connexion {
  background: linear-gradient(to right, #4f90ff, #b179ed);
  border: none;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  text-decoration: none;
}

.conn-btn {
  background: linear-gradient(to right, #97a8c7, #888888);
  border: none;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
}
</style>
