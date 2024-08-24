<script setup>

    /**Modules */
    import GameScreen from "@/ui/modules/game/views/screen/Screen.vue";

    /**Stores */
    import { useGameStore } from "@/infrastructure/store/stores/useGame.store";

    const gameStore = useGameStore();
</script>

<template>
    <div>
        <GameScreen
            :GameService="gameStore.GameService"
        ></GameScreen>
    </div>
</template>

<style scoped>
    .game-canvas{
        background: red;
    }
</style>
  