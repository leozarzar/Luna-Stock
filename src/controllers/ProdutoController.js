const db = require("../models")

class ProdutoController{

    static async getAllProducts(req,res){
        
        try{

            const produtos = await db.produtos.findAll();
            if(produtos == 0) res.status(200).json("Não há produtos cadastrados.");
            else res.status(200).json(produtos);
        }
        catch(error){
            res.status(500).json(`${error} - Não foi possível acessar os produtos.`);
        }
    }
    static async addProduct(req,res){
        
        try{

            const produtos = await db.produtos.create(req.body);
            if(produtos === null) res.status(404).json("Produto não foi cadastrado.");
            else res.status(200).json(produtos);
        }
        catch(error){
            res.status(500).json(`${error} - Não foi possível acessar os produtos.`);
        }
    }

}

module.exports = ProdutoController;