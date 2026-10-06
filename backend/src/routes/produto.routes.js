import { Router } from "express";
import produtoController from "../controlers/produto.controler.js";

const router = Router();

//criar produto
router.post("/", (req, res) =>
  produtoController.criarProduto(req, res)
);

// Listar todos os produtos
router.get("/", (req, res) =>
  produtoController.listarProdutos(req, res)
);

// Buscar produto por ID
router.get("/:id", (req, res) =>
  produtoController.buscarProduto(req, res)
);

// Atualizar produto
router.put("/:id", (req, res) =>
  produtoController.atualizarProduto(req, res)
);

// Deletar produto
router.delete("/:id", (req, res) =>
  produtoController.deletarProduto(req, res)
);

export default router;