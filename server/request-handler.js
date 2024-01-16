import bcrypt from "bcrypt" ;
import jwt from "jsonwebtoken";

import loginSchema from "../schema/fileShema.js"
import productSchema from "../schema/productSchema.js";

let { sign } = jwt;


export async function register(req , res){
    try {
        let  {username , password , email , PhoneNumber , select }  = req.body;
        let {profile}= req.files;
        let userExist = await loginSchema.findOne({username});
        if(userExist){
            return res.status(400).send("Username already exist!!!");
        }
        let hashPass = await bcrypt.hash(password , 10);
        let result = await loginSchema.create({
            username , 
            password : hashPass ,
            email,
            PhoneNumber,
            profile,
            select
        })
        if(result){
            return res.json("Registration Successful");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}



export async function login(req , res){
    try {
        let { username , password } = req.body;

        let user = await loginSchema.findOne({username});
        if(!user){
            return res.status(400).send("Invalid username and password");
        }
        let match = await bcrypt.compare(password , user.password);
        if(match){
            let token = await sign({
                username :user.username,
                id: user._id
            },
            process.env.SECRET_KEY,{
                expiresIn : "24h"
            })
            return res.status(200).json({
                msg : "Login Succesfull",
                token
            });
        }
        return res.status(400).send("Invalid username and password");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}
export async function getPrivateData(req, res) {
    try {
      const userId = req.user.id;
      const userData = await loginSchema.findById(userId);
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching private data:', error);
      res.status(500).json({ error: 'Error fetching private data' });
    }
  }
  

export async function product1(req , res){
    try {
        let  {title , price , quantity , category  }  = req.body;
        let {image}= req.files;
        let result = await productSchema.create({
            title , 
            price ,
            quantity,
            category,
            image
        })
        if(result){
            return res.json("Product submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}

export async function product2(req , res){
    try {
        let  {title , price , quantity , category  }  = req.body;
        let {image}= req.files;
        let result = await productSchema.create({
            title , 
            price ,
            quantity,
            category,
            image
        })
        if(result){
            return res.json("Product submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}

export async function product3(req , res){
    try {
        let  {title , price , quantity , category  }  = req.body;
        let {image}= req.files;
        let result = await productSchema.create({
            title , 
            price ,
            quantity,
            category,
            image
        })
        if(result){
            return res.json("Product submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}

export async function product4(req , res){
    try {
        let  {title , price , quantity , category  }  = req.body;
        let {image}= req.files;
        let result = await productSchema.create({
            title , 
            price ,
            quantity,
            category,
            image
        })
        if(result){
            return res.json("Product submitted successfully!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error occured");
    }
}

export async function getJackets(req, res) {
    try {
        const jackets = await productSchema.find({ category: 'jacket' });
        res.status(200).json(jackets);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}
export async function getGlass(req, res) {
    try {
        const glass = await productSchema.find({ category: 'glass' });
        res.status(200).json(glass);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}
export async function getSandal(req, res) {
    try {
        const sandal = await productSchema.find({ category: 'sandal' });
        res.status(200).json(sandal);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}
export async function getCloth(req, res) {
    try {
        const cloth = await productSchema.find({ category: 'Clothes' });
        res.status(200).json(cloth);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}

export async function getJacketView(req, res) {
    try {
      const { id } = req.params;
  
      if (id) {

        const product = await productSchema.findById(id);
        
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        return res.status(200).json(product);
      } else {
        const jackets = await productSchema.find({ category: 'jacket' });
        return res.status(200).json(jackets);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error occurred");
    }
}
export async function getSandalView(req, res) {
    try {
      const { id } = req.params;
  
      if (id) {

        const product = await productSchema.findById(id);
        
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        return res.status(200).json(product);
      } else {
        const sandal = await productSchema.find({ category: 'sandal' });
        return res.status(200).json(sandal);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error occurred");
    }
}
export async function getGlassView(req, res) {
    try {
      const { id } = req.params;
  
      if (id) {

        const product = await productSchema.findById(id);
        
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        return res.status(200).json(product);
      } else {
        const glasses = await productSchema.find({ category: 'glass' });
        return res.status(200).json(glasses);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error occurred");
    }
}

export async function getClothView(req, res) {
    try {
      const { id } = req.params;
  
      if (id) {

        const product = await productSchema.findById(id);
        
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        return res.status(200).json(product);
      } else {
        const clothes = await productSchema.find({ category: 'Clothes' });
        return res.status(200).json(clothes);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error occurred");
    }
}

export async function getProducts(req, res) {
    try {
       
        const products = await productSchema.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}

export async function getUserProd(req, res) {
    try {
       
        const ids = await loginSchema.find();
        res.status(200).json(ids);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
}
}