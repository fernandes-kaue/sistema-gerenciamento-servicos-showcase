import Cliente from "../models/cliente.js";
import { getRequestErrorResponse } from "../utils/errors.js";

class ClienteController {

  async criarCliente(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      return res.status(201).json(cliente);
    } catch (erro) {
      const response = getRequestErrorResponse(erro, "Erro ao criar cliente");
      return res.status(response.status).json(response.body);
    }
  }

  async listarClientes(req, res) {
    try {
      const clientes = await Cliente.find();
      return res.status(200).json(clientes);
    } catch (erro) {
      const response = getRequestErrorResponse(erro, "Erro ao listar clientes");
      return res.status(response.status).json(response.body);
    }
  }

  async buscarCliente(req, res) {
    try {
      const cliente = await Cliente.findById(req.params.id);

      if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
      }

      return res.status(200).json(cliente);
    } catch (erro) {
      const response = getRequestErrorResponse(erro, "Erro ao buscar cliente");
      return res.status(response.status).json(response.body);
    }
  }

  async atualizarCliente(req, res) {
    try {
      const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: "after",
        runValidators: true,
      });

      if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
      }

      return res.status(200).json(cliente);
    } catch (erro) {
      const response = getRequestErrorResponse(erro, "Erro ao atualizar cliente");
      return res.status(response.status).json(response.body);
    }
  }

  async deletarCliente(req, res) {
    try {
      await Cliente.findByIdAndDelete(req.params.id);
      return res.status(200).json({ mensagem: "Cliente removido com sucesso" });
    } catch (erro) {
      const response = getRequestErrorResponse(erro, "Erro ao remover cliente");
      return res.status(response.status).json(response.body);
    }
  }
}

export default new ClienteController();
