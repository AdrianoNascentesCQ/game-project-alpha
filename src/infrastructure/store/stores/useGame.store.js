import { defineStore } from 'pinia';

/**Services */
import { GameService } from '@/infrastructure/services/Game.service.js';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    GameService: new GameService()
  })
});