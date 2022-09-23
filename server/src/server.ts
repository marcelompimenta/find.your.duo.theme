
import express from "express";
import fetch from "node-fetch";

//instancia da funcão do express
const app = express();

const url = 'https://api.github.com/users/marcelompimenta/repos'

async function getUser() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.map((names: { id: any; }) =>  names.id ))
}

getUser()

const listOne = [
  { id: 1, nome: 'Nome 1' },
  { id: 2, nome: 'Nome 2' },
  { id: 3, nome: 'Nome 3' }]
const listTwo = [
  { id: 4, nome: 'Nome 4' },
  { id: 5, nome: 'Nome 5' },
  { id: 6, nome: 'Nome 6' },
  { id: 7, nome: 'Nome 7' }
]

app.get('/l1', (request: any, response: any) => {
  if (request.method === 'GET') {
    return response.json(listOne)
  } else {
    return response.status()
  }
})

app.get('/l2', (request: any, response: any) => {
  return response.json(listTwo)
})

app.listen(4141, () => {
  console.log('Server Running in: http://localhost:4141')
})

// app.get =  é o metodo que busca uma rota e retorna algo baseado nisso para o usuário
// por padrão recebe dois parametros 1 que é o caminho e o 2° que é uma função de callback
// e para a funcção podemos passar dois parametros que são a resposta e a requisão.
// onde a resposta retorna algo com base no acesso do caminho especificado e a requisação
// que busca uma informação de acordo com a necessidade do usuario
//o metodo send retorna uma mensagem ou texto ou qualquer outra coisa
// o metodo json retorna um json