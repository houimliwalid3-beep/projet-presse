<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="card login-card p-4 shadow-lg">
      <div class="text-center mb-4">
        <h2 class="text-primary">Bienvenue</h2>
        <p class="text-muted">Connectez-vous pour continuer</p>
      </div>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            v-model="email" 
            placeholder="Votre email" 
            required
          >
        </div>

        <!-- Mot de passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            class="form-control" 
            v-model="password" 
            placeholder="Votre mot de passe" 
            required
          >
        </div>

        <!-- Se souvenir de moi -->
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="remember" v-model="rememberMe">
          <label class="form-check-label" for="remember">Se souvenir de moi</label>
        </div>

        <!-- Bouton connexion -->
        <div class="d-grid mb-3">
          <button class="btn btn-primary btn-lg" type="submit">Se connecter</button>
        </div>

        <!-- Lien mot de passe oublié -->
        <div class="text-center">
          <a href="#" class="text-decoration-none text-info">Mot de passe oublié ?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// États du formulaire
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

// Fonction connexion
function handleLogin() {
  if (!email.value || !password.value) {
    alert("Veuillez remplir tous les champs !")
    return
  }

  // Ici tu peux ajouter ton API call pour authentification
  console.log("Email:", email.value)
  console.log("Password:", password.value)
  console.log("Se souvenir:", rememberMe.value)

  alert("Connexion réussie ! (simulation)")
}
</script>

<style scoped>
/* Page */
.login-page {
  min-height: 100vh;
  background: linear-gradient(to right, #b9b9b9, #f0f5ff);
  padding: 20px;
  margin-top: 50px;
}

/* Carte */
.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  background-color: #ffffffcc;
}

/* Titres et textes */
.login-card h2 {
  font-weight: 700;
}

.login-card p {
  font-size: 0.9rem;
}

/* Bouton */
.btn-primary {
  background: linear-gradient(to right, #2575fc, #6a11cb);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(to right, #6a11cb, #2575fc);
}

/* Lien */
a.text-info:hover {
  text-decoration: underline;
}
</style>
