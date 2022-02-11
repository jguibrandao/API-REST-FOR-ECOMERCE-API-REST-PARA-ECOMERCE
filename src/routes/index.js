const { Router } = require("express")

const UserController = require("../controllers/UserController")
const SessionController = require("../controllers/Session")
const ProductController = require("../controllers/ProductController")
const CartController = require("../controllers/CartController")

const { authenticate } = require("../middlewares/index")

const routes = Router()

routes.get("/", (req, res) => {
    res.send("Salve")
})

routes.post("/users", UserController.createUser) // Cria usuários
routes.get("/users", UserController.getUsers) // Mostra usuários

routes.get("/users/:user_id", UserController.getUserById) // Mostra usuário específico

routes.post("/sessions", SessionController.createSession) // Cria/faz login

routes.post("/products/:user_id", authenticate, ProductController.createProduct) // Cria produtos para usuário
routes.get("/:user_id/products", ProductController.getUserProducts) // Mostra produtos de usuário
routes.patch("/products/:user_id/:product_id", authenticate, ProductController.updateProduct) // Atualiza produto de usuário
routes.delete("/products/:user_id/:product_id", authenticate, ProductController.deleteProduct) // Deleta determinado produto de determinado usuário

routes.get("/products", ProductController.getAllProducts) // Lista todos os produtos
routes.get("/products/:product_id", ProductController.getProductById) // Mostra determinado produto

routes.post("/cart/:user_id", authenticate, CartController.createCart) // Cria carrinho para determinado usuário
routes.get("/carts/:user_id", authenticate, CartController.getUserCarts) // Mostra todos os carrinhos de um cliente
routes.delete("/carts/:user_id/:cart_id", authenticate, CartController.deleteCart)
routes.get("/cart/:user_id/:cart_id", authenticate, CartController.getCart) // Mostra carrinho específico de determinado cliente

module.exports = routes