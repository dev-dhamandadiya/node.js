import productRouter from "../../routes/api/productRouter.js";
import fs from "fs"

export const createProduct = async (req, res) => {
    try {
        req.body.image = req.file.path;
        const product = await ProductModel.create(req.body);

        return res.json(product)

    } catch (error) {
        return res.json({ error: error.message })
    }
}


export const getAllProduct = async (req, res) => {
    try {
        const product = await ProductModel.find({})
        return res.json({message:"sucessful",data:product})

    } catch (error) {
        return res.json({ error: error.message })
    }
}


export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await ProductModel.findByIdAndDelete(id);
         fs.unlinkSync(product.image);
        return res.json(product)

    } catch (error) {
        return res.json({ error: error.message })
    }
}


export const updatedProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (req.file) {
            req.body.image = req.file.path;
        } else {
             return res.json({ error: error.message })
        }
        const product = await ProductModel.findByIdAndUpdated(id,req.body)
    
        if (req.file) {
            fs.unlinkSync(product.image)
        } 
          return res.json(product);
       
    } catch (error) {
        return res.json({ error: error.message })
    }
}
