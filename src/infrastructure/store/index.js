import { createPinia } from 'pinia';

const pinia = createPinia();

/*pinia.use(({ store }) => {
    const cachedState = cacheService.get(store.$id);
    if (cachedState) {
        console.log('Loaded state from localStorage:', cachedState);
        store.$patch(cachedState);
    }

    store.$subscribe((mutation, state) => {
        console.log('subscribe state from localStorage:', cachedState);
        cacheService.set(store.$id, state);
    });
});*/

pinia.use(() => {});

export const makeStore = () => pinia;