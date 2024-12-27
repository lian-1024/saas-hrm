import type { Pinia } from "pinia";
import persisted from 'pinia-plugin-persistedstate';

export const registerPiniaPersistPlugin = (pinia: Pinia) => {
  pinia.use(persisted)
}