"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
//instancia da funcão do express
const app = (0, express_1.default)();
const url = 'https://api.github.com/users/marcelompimenta/repos';
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(url);
        const data = yield response.json();
        console.log(data);
    });
}
getUser();
const listOne = [
    { id: 1, nome: 'Nome 1' },
    { id: 2, nome: 'Nome 2' },
    { id: 3, nome: 'Nome 3' }
];
const listTwo = [
    { id: 4, nome: 'Nome 4' },
    { id: 5, nome: 'Nome 5' },
    { id: 6, nome: 'Nome 6' },
    { id: 7, nome: 'Nome 7' }
];
app.get('/l1', (request, response) => {
    if (request.method === 'GET') {
        return response.json(listOne);
    }
    else {
        return response.status();
    }
});
app.get('/l2', (request, response) => {
    return response.json(listTwo);
});
app.listen(4141, () => {
    console.log('Server Running in: http://localhost:4141');
});
// app.get =  é o metodo que busca uma rota e retorna algo baseado nisso para o usuário
// por padrão recebe dois parametros 1 que é o caminho e o 2° que é uma função de callback
// e para a funcção podemos passar dois parametros que são a resposta e a requisão.
// onde a resposta retorna algo com base no acesso do caminho especificado e a requisação
// que busca uma informação de acordo com a necessidade do usuario
//o metodo send retorna uma mensagem ou texto ou qualquer outra coisa
// o metodo json retorna um json
