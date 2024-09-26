import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
    {
        id: 1,
        nome: "Brian O'Conner",
        vivo: false,
        studio: " Universal Studios "
    },
    {
        id: 2,
        nome: "Godzilla",
        vivo: true,
        studio: " TriStar Pictures "
    },
    {
        id: 3,
        nome: "Goku",
        vivo: true,
        studio: " Toei Animation "
    }
]

// Rota para buscar todas as emoções
personagensRoutes.get("/personagens", (req, res) => {
    return res.status(200)
    .send( personagens ) 
})

// Criar uma nova emoção
personagensRoutes.post("/", (req, res) => {
    const{ nome, studio, vivo } = req.body
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo,
    }
    personagens.push(novoPersonagem)
    return res.status(201)
    .send( novoPersonagem ) 
})

// Rota para buscar uma emoção pelo id
personagensRoutes.get("/:id", (req, res) => {
    const {id} = req.params;
    // console.log(id)
    const personagem = personagens.find((personagem) => personagem.id == id)

    if(!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado!"
        });
    }

    return res.status(200).send({
        message: "Personagem encontrado!",
        personagem,
    });
})

personagensRoutes.delete('/:id', (req, res) => {
    const { id } = req.params;

    const personagem = personagens.find((personagem) => personagem.id == id)

    if(!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado!"
        });
    }

    personagens = personagens.filter((personagem) => personagem.id != id)

    return res.status(200).send({
        message: 'Personagem Deletado!',
        personagem,
    })
})

personagensRoutes.put('/:id', (req, res) => {
    const { id } = req.params;

    const personagem = personagens.find((personagem) => personagem.id == id)

    if(!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado!"
        });
    }

    const{ nome, studio, vivo } = req.body
    personagem.nome = nome,
    personagem.studio = studio,
    personagem.vivo = vivo

    return res.status(200).send({
        message: 'Personagem Atualizado!',
        personagem,
    })

})


export default personagensRoutes;
