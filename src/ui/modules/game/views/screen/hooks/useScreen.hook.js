import { ref, reactive, computed, toRaw } from "vue";

const useScreen = ({ GameService }) => {
  
    const init = async () => {
        await GameService.init();
    }
  
    return {
        bootstrap: {
            init
        }
    };
};

export default useScreen;
