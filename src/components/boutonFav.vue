<template>
  <div class="col-md-3">
    <div class="text-end">
      <button ref="btn" class="btn btn-light border-0" @click="toggleFavori">
        <i :class="heartClass"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isFavori = ref(false)
const btn = ref(null)

// Classe du cœur (plein ou vide)
const heartClass = computed(() =>
  isFavori.value ? 'fas fa-heart text-danger' : 'far fa-heart text-dark'
)

// Lecture / écriture du localStorage
const readFavoris = () => JSON.parse(localStorage.getItem('favoris') || '[]')
const saveFavoris = arr => localStorage.setItem('favoris', JSON.stringify(arr))

// Récupère les infos de la carte parente
function getCardData(el) {
  const title = el.querySelector('h5')?.innerText?.trim() || ''
  const text = el.querySelector('p')?.innerText?.trim() || ''
  const img = el.querySelector('img')?.getAttribute('src') || ''
  return { id: `${title}::${img}`, title, text, img }
}

// Ajoute ou retire des favoris
function toggleFavori() {
  const el = btn.value?.closest('.carte-interne')
  if (!el) return
  const data = getCardData(el)

  let favoris = readFavoris()
  const existe = favoris.some(i => i.id === data.id)

  if (existe) {
    favoris = favoris.filter(i => i.id !== data.id)
    isFavori.value = false
  } else {
    favoris.push(data)
    isFavori.value = true
  }

  saveFavoris(favoris)
}

onMounted(() => {
  const el = btn.value?.closest('.carte-interne')
  if (!el) return
  const data = getCardData(el)
  const favoris = readFavoris()
  isFavori.value = favoris.some(i => i.id === data.id)
})
</script>

<style scoped>
button {
  font-size: 24px;
  cursor: pointer;
  background: transparent;
}
</style>
