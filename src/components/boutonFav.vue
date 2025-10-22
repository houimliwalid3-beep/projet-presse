<template>
  <div class="col-md-3">
    <div class="text-end">
      <button class="btn btn-light border-0" @click="toggleFavori($event)">
        <i :class="heartClass"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// État du cœur (favori ou non)
const isFavori = ref(false)

// Classe dynamique du cœur
const heartClass = computed(() => {
  return isFavori.value ? 'fas fa-heart text-danger' : 'far fa-heart text-dark'
})

function readFavoris() {
  try {
    return JSON.parse(localStorage.getItem('favoris') || '[]')
  } catch (e) {
    return []
  }
}

function saveFavoris(arr) {
  localStorage.setItem('favoris', JSON.stringify(arr))
}

function getCardDataFromEl(el) {
  if (!el) return null
  const title = el.querySelector('h4')?.innerText?.trim() || ''
  const text = el.querySelector('p')?.innerText?.trim() || ''
  const img = el.querySelector('img')?.getAttribute('src') || ''
  // Use a simple id combining title+img
  const id = `${title}::${img}`
  return { id, title, text, img }
}

function updateIsFavori() {
  // find nearest .carte-interne from this button
  const el = buttonEl?.closest('.carte-interne')
  const data = getCardDataFromEl(el)
  if (!data) return
  const arr = readFavoris()
  isFavori.value = arr.some(i => i.id === data.id)
}

let buttonEl = null

function toggleFavori(event) {
  // locate the card element from the clicked button
  buttonEl = event.currentTarget
  const el = buttonEl.closest('.carte-interne')
  const data = getCardDataFromEl(el)
  if (!data) return

  const arr = readFavoris()
  const exists = arr.some(i => i.id === data.id)
  if (exists) {
    const filtered = arr.filter(i => i.id !== data.id)
    saveFavoris(filtered)
    isFavori.value = false
  } else {
    arr.push(data)
    saveFavoris(arr)
    isFavori.value = true
  }

  // notify other components (e.g., Favoris page or other buttons) to refresh
  window.dispatchEvent(new CustomEvent('favoris-updated'))
}

function onFavorisUpdated() {
  updateIsFavori()
}

onMounted(() => {
  // try to bind to closest existing button element for initial state
  // (buttonEl will be set on first click as well)
  // find any element in this component's root
  // Vue's <script setup> doesn't expose root, so use a short timeout to query by observing the DOM
  setTimeout(() => {
    // find a button inside this component instance by searching all buttons with far/fa-heart classes
    // but safer: find the last button element inside the document which matches this component by walking from the end
    // We'll attempt to locate a button near an h4 in the same container
    const allButtons = Array.from(document.querySelectorAll('button'))
    for (const b of allButtons) {
      const parent = b.closest('.carte-interne')
      if (parent && parent.querySelector('h4')) {
        // Heuristic: choose the first matching button that hasn't got data-fav-initialized
        if (!b.dataset.favInitialized) {
          b.dataset.favInitialized = '1'
        }
      }
    }
    updateIsFavori()
  }, 0)

  window.addEventListener('favoris-updated', onFavorisUpdated)
})

onBeforeUnmount(() => {
  window.removeEventListener('favoris-updated', onFavorisUpdated)
})
</script>

<style scoped>
button {
  font-size: 24px;
  cursor: pointer;
  background: transparent;
}
</style>
