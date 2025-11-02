<template>
  <footer class="footer text-light py-4">
    <div class="container">
      <div class="row">

        <!-- Logo / Nom du site -->
        <div class="col-md-4 mb-3 mb-md-0 d-flex align-items-center">
          <img src="/src/image/Logo_Presse_Océan.svg.png" alt="Logo" style="height: 40px; margin-right: 10px;">
          <span class="fw-bold">Mon Site</span>
        </div>

        <!-- Liens du footer -->
        <div class="col-md-4 mb-3 mb-md-0">
          <h6 class="text-uppercase mb-2">Liens rapides</h6>
          <ul class="list-unstyled">
            <li v-for="(link, i) in links" :key="i">
              <router-link v-if="link.to" :to="link.to" class="text-light text-decoration-none">{{ link.text }}</router-link>
              <a v-else :href="link.href" class="text-light text-decoration-none">{{ link.text }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { text: 'Accueil', to: '/' },
  { text: 'Articles', to: '/articles' },
  { text: 'Favoris', to: '/favoris' },
  { text: 'Formulaire', to: '/Formulaire' },
  { text: 'A Propos', href: '#' }
]
</script>

<style scoped>
/* Footer sticky en bas */
.footer {
  border-top: 2px solid #555;
  background-color: rgb(35, 21, 147);
  position: relative;
  width: 100%;
}

/* Important pour que le body prenne toute la hauteur et le footer colle en bas */
html, body, #app {
  height: 100%;
  margin: 0;
}

#app > .router-view {
  min-height: calc(100vh - 90px); /* hauteur totale - footer (approx) */
}

/* Style des liens */
footer a:hover {
  text-decoration: underline;
}
</style>
