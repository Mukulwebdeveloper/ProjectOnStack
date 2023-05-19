import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

// signup section
export const signup = async (req,res) => {
   const {name, email, password, } = req.body;
   try {
     const existinguser = await users.findOne({email});
     if(existinguser){
         console.log(error);
        return res.status(404).json({message: "User Already Exist."})
     } 
     
     const hashedPassword = await bcrypt.hash(password,12)
     const newUser = await users.create({name,email,password: hashedPassword  })
     const token = jwt.sign({email:newUser.email, id:newUser.id}, "test", {expiresIn: "1h"});
     res.status(200).json({result: newUser,token})
     console.log(error); 
   } catch (error) {
    console.log(error); 
     res.status(500).json("Something went wrong..."); 
                                                         
   }
}

// Login section
export const login = async (req,res) => {
    const { email, password, } = req.body;
    try {
        const existinguser = await users.findOne({email});
        if(existinguser){
            return res.status(404).json({message: "User Don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Invalid credentials."})
        }
        
        const token = jwt.sign({email:existinguser.email, id:existinguser.id}, "test", {expiresIn: "1h"});
        res.status(200).json({result:existinguser,token})
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
}


