const ProductModel = require('../models/product.model');

module.exports = {
    async get(req, res) {
        const result = await ProductModel.findAll();
        res.status(200).send(result);
    },

    async getById(req, res) {
        const result = await ProductModel.findByPk(req.params.id);
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(412).send({
                error: "Produto não encontrado!"
            });
        }
    },

    async post(req, res) {
        const { name, description, price } = req.body;
        const result = await ProductModel.create({ name, description, price });
        res.status(201).send(result);
    },

    async put(req, res) {
        const result = await ProductModel.findByPk(req.params.id);
        if (result) {
            result.set({ ...req.body });
            result.save();
            res.status(200).send(result);
        } else {
            res.status(412).send({
                error: "Produto não encontrado!"
            });
        }
    },

    async delete(req, res) {
        const result = await ProductModel.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result) {
            res.status(200).send({
                message: "Produto removido com sucesso!"
            });
        } else {
            res.status(412).send({
                error: "Produto não encontrado!"
            });
        }
    }
}