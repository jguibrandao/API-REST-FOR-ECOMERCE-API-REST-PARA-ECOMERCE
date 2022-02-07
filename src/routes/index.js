const { Router } = require("express")

const routes = Router()

routes.get("/", (req, res) => {
    res.send("Salve")
})

routes.post("/users") // Cria usuários
routes.get("/users") // Mostra usuários

routes.get("users/:user_id") // Mostra usuário específico

routes.post("/login") // Cria/faz login

routes.post("/products/:user_id") // Cria produtos para usuário
routes.get("/products/:user_id") // Mostra produtos de usuário
routes.patch("products/:user_id/:product_id") // Atualiza produto de usuário
routes.delete("/products/user_id/:product_id") // Deleta determinado produto de determinado usuário

routes.get("/products/:product_id") // Mostra determinado produto

module.exports = routes