import { Router } from "express"

const emocoesRoutes = Router()

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "verde"
    }, 
    {
        id: 2,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    }
]

app.get("/emocoes", (req, res) => {
    return res.status(200)
    .send( emocoes ) 
})
app.post("/emocoes", (req, res) => {
    const{ nome, cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200)
    .send( emocoes ) 
})

import { Router } from "express"

const personagensRoutes = Router()

const personagens = [
    {
        id: 100,
        nome: "Brian O'Conner",
        vivo: false,
        studio: " Universal Studios "
    },
    {
        id: 100,
        nome: "Godzilla",
        vivo: true,
        studio: " TriStar Pictures "
    },
    {
        id: 100,
        nome: "Goku",
        vivo: true,
        studio: " Toei Animation "
    }
]

app.get("/personagens", (req, res) => {
    return res.status(200)
    .send( personagens ) 
})