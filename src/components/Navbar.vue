<template>
  <nav class="bg-light py-4">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <router-link to="/">
        <img src="/src/image/Logo_Presse_Océan.svg.png" alt="Logo" style="height: 50px;">
      </router-link>

      <!-- Menu principal desktop -->
      <ul class="nav d-none d-md-flex flex-grow-1 justify-content-center">
        <li v-for="(link, i) in links" :key="i" class="nav-item">
          <router-link :to="link.to" class="nav-link text-dark" 
                       @click="() => handleClick()">{{ link.text }}</router-link>
        </li>
      </ul>

      <!-- Connexion -->
      <router-link to="/Connexion" class="btn-connexion d-none d-md-block" 
                   @click="() => handleClick()">Connexion</router-link>

      <!-- Hamburger mobile -->
      <button class="btn d-md-none" @click="() => handleClick(() => menuOpen = !menuOpen)">☰</button>
    </div>

    <!-- Menu mobile -->
    <ul v-if="menuOpen" class="nav flex-column mt-3 d-md-none">
      <li v-for="(link, i) in links" :key="'m'+i" class="nav-item">
        <router-link :to="link.to" class="nav-link text-dark" 
                     @click="() => handleClick()">{{ link.text }}</router-link>
      </li>
      <li class="nav-item mt-2">
        <router-link to="/Connexion" class="btn-connexion w-100 text-center" 
                     @click="() => handleClick()">Connexion</router-link>
      </li>
    </ul>
  </nav>

  <!-- Options : police / couleur / affichage / compteur -->
  <div class="container mt-4">

    <!-- Police -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Police</button>
      <ul class="dropdown-menu">
        <li v-for="f in fonts" :key="f.value">
          <label class="dropdown-item">
            <input type="radio" :value="f.value" v-model="selectedFont"
                   @click="() => handleClick(() => applyFont(f.value))" />
            <span :style="{ fontFamily: f.value }">{{ f.label }}</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Couleur -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Couleur</button>
      <ul class="dropdown-menu">
        <li v-for="c in colors" :key="c.value">
          <label class="dropdown-item">
            <input type="radio" :value="c.value" v-model="selectedColor"
                   @click="() => handleClick(() => applyColor(c.value))" />
            <span :style="{ color: c.value, fontWeight: 'bold' }">{{ c.label }}</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Affichage -->
    <div class="dropdown d-inline-block me-3">
      <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Afficher</button>
      <ul class="dropdown-menu">
        <li>
          <label class="dropdown-item">
            <input type="radio" name="display" 
                   @click="() => handleClick(() => setDisplayMode('default'))" 
                   :checked="displayMode==='default'" /> Par défaut
          </label>
        </li>
        <li>
          <label class="dropdown-item">
            <input type="radio" name="display" 
                   @click="() => handleClick(() => setDisplayMode('image'))" 
                   :checked="displayMode==='image'" /> Images
          </label>
        </li>
        <li>
          <label class="dropdown-item">
            <input type="radio" name="display" 
                   @click="() => handleClick(() => setDisplayMode('text'))" 
                   :checked="displayMode==='text'" /> Texte
          </label>
        </li>
      </ul>
    </div>

    <!-- Compteur -->
    <button class="btn conn-btn ms-3" @click="() => handleClick(() => clickCount = 0)">
      Click : {{ clickCount }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

// --- Données ---
const links = [
  { text: 'Accueil', to: '/' },
  { text: 'Articles', to: '/articles' },
  { text: 'Favoris', to: '/favoris' },
  { text: 'Formulaire', to: '/Formulaire' },
  { text: 'A Propos', to: '/Apropos' }
]

const fonts = [
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Consolas', value: 'Consolas, monospace' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' }
]

const colors = [
  { label: 'Noir', value: 'black' },
  { label: 'Bleu', value: 'blue' },
  { label: 'Rouge', value: 'red' }
]

// --- États ---
const menuOpen = ref(false)
const selectedFont = ref(localStorage.getItem('font') || 'Arial, sans-serif')
const selectedColor = ref(localStorage.getItem('color') || 'black')
const displayMode = ref(localStorage.getItem('displayMode') || 'default')
const clickCount = ref(parseInt(localStorage.getItem('clicks') || '0'))

// --- Sauvegarde automatique ---
watch(selectedFont, v => { document.body.style.fontFamily = v; localStorage.setItem('font', v) }, { immediate: true })
watch(selectedColor, v => { document.body.style.color = v; localStorage.setItem('color', v) }, { immediate: true })
watch(displayMode, v => localStorage.setItem('displayMode', v))
watch(clickCount, v => localStorage.setItem('clicks', v))

// sert au compteur 
function handleClick(action) {
  clickCount.value++

  // remettre a zero le compteur 
  if (action) action()
}

// --- Fonctions pour appliquer les changements ---
function applyFont(f) {
  selectedFont.value = f
}

function applyColor(c) {
  selectedColor.value = c
}

// sert a afficher image/texte/les deux
function setDisplayMode(mode) {
  displayMode.value = mode
  const container = document.getElementById('principal-container')
  if (!container) return
  const imgs = container.querySelectorAll('img')
  const texts = container.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6')
  if (mode === 'default') {
    imgs.forEach(i => i.style.display = 'block')
    texts.forEach(t => t.style.display = 'block')
  } else if (mode === 'image') {
    imgs.forEach(i => i.style.display = 'block')
    texts.forEach(t => t.style.display = 'none')
  } else if (mode === 'text') {
    imgs.forEach(i => i.style.display = 'none')
    texts.forEach(t => t.style.display = 'block')
  }
}
</script>

<style scoped>
label { cursor: pointer; }

.btn-connexion {
  background: linear-gradient(to right, #4f90ff, #b179ed);
  color: white;
  border: none;
  padding: 8px 25px;
  border-radius: 5px;
  text-decoration: none;
}

.conn-btn {
  background: linear-gradient(to right, #97a8c7, #888);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
}
</style>
