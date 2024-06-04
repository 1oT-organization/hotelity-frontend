import { createPinia, defineStore } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
  persist: true
});

export default pinia;
