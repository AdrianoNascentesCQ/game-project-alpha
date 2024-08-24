import { IGameService } from "@/application/interfaces/services/IGame.service.js";

/**Gateways */

class GameService extends IGameService {
    constructor() {
        super();
    
    }

    async init() {
        console.log("Hello word");
    }

};

export {
    GameService
}