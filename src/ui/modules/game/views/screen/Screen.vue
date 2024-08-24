<script setup>
    import { ref, onMounted, provide } from "vue";

    /**Services */
    import { IGameService } from "@/application/interfaces/services/IGame.service.js";

    /**Hooks */
    import useScreen from "./hooks/useScreen.hook.js";

    const props = defineProps({
        GameService: {
            type: IGameService,
            default: new IGameService(),
        }
    });

    const {
        bootstrap: {
            init
        }
    } = useScreen(props)

    onMounted(async () => {
        await init();
    })
</script>

<template>
    <div>
        <div class="game-screen-container">
            <canvas class="game-screen-canvas" width="500px" height="500px"></canvas>
        </div>
    </div>
</template>

<style scoped>
    .game-screen-canvas{
        background: red;
    }
</style>
  