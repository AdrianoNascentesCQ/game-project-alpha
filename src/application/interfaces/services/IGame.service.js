/**
 * Interface para um serviço do jogo.
 * 
 * @interface
 */
export class IGameService {
    /**
     * Cria uma instância de IGameService.
     */
    constructor() {}

    /**
     * Inicializa o jogo.
     * 
     * Este método deve ser implementado para inicializar o serviços necessários para o jogo.
     * 
     * @async
     * @returns {Promise<void>} - Retorna uma promessa que será rejeitada com um erro se não for implementada.
     * @throws {Error} - Lança um erro se o método não for implementado.
     */
    async init() {
        return Promise.reject(new Error('Not implemented -> IGameService.init()'));
    }

};