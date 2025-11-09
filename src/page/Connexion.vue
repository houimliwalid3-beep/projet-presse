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
          <input 
            type="email" 
            v-model="email" 
            placeholder="Votre email" 
            class="form-control" 
            required
          >
        </div>

        <!-- Mot de passe -->
        <div class="mb-3">
          <input 
            type="password" 
            v-model="password" 
            placeholder="Votre mot de passe" 
            class="form-control" 
            required
          >
        </div>

        <!-- Se souvenir de moi -->
        <div class="form-check mb-3">
          <input type="checkbox" v-model="rememberMe" class="form-check-input" id="remember">
          <label class="form-check-label" for="remember">Se souvenir de moi</label>
        </div>

        <!-- Bouton connexion -->
        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-primary btn-lg">Se connecter</button>
        </div>

        <!-- Lien mot de passe oublié -->
        <div class="text-center">
          <a href="#" class="text-info text-decoration-none">Mot de passe oublié ?</a>
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

// Fonction login (frontend seulement)
function handleLogin() {
  if (!email.value || !password.value) {
    alert("Veuillez remplir tous les champs !")
    return
  }
  alert(`Email: ${email.value}\nMot de passe: ${password.value}\nSe souvenir: ${rememberMe.value}`)
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(to right, #b9b9b9, #f0f5ff);
  padding: 20px;
  margin-top: 50px;
}

.login-card {
  max-width: 400px;
  width: 100%;
  border-radius: 15px;
  background-color: #ffffffcc;
}

.login-card h2 {
  font-weight: 700;
}

.login-card p {
  font-size: 0.9rem;
}

.btn-primary {
  background: linear-gradient(to right, #2575fc, #6a11cb);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(to right, #6a11cb, #2575fc);
}

a.text-info:hover {
  text-decoration: underline;
}
</style>
