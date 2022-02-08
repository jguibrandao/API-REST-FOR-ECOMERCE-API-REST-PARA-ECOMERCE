const { Router } = require("express")

const UserController = require("../controllers/userController")

const routes = Router()

routes.get("/", (req, res) => {
    res.send("Salve")
})

routes.post("/users", UserController.createUser) // Cria usuários
routes.get("/users") // Mostra usuários

routes.get("users/:user_id") // Mostra usuário específico

routes.post("/login") // Cria/faz login

routes.post("/products/:user_id") // Cria produtos para usuário
routes.get("/products/:user_id") // Mostra produtos de usuário
routes.patch("products/:user_id/:product_id") // Atualiza produto de usuário
routes.delete("/products/user_id/:product_id") // Deleta determinado produto de determinado usuário

routes.get("/products") // Lista todos os produtos
routes.get("/products/:product_id") // Mostra determinado produto

routes.post("/cart/:user_id") // Cria carrinho para determinado usuário
routes.get("/carts/:user_id") // Mostra todos os carrinhos de um cliente

routes.get("/cart/:user_id/:cart_id") // Mostra carrinho específico de determinado cliente

module.exports = routes