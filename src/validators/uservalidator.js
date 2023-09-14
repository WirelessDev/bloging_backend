import Joi from "joi";

export const validatorUserRegistration = (req, res, next)=>{
    const schema = Joi.object({
        username: Joi.string().min(4).max(20).required(),
        email: Joi.string().email().max(20).required(),
        password: Joi.string().min(8).max(20)
    })
    
    const {error} = schema.validate(req.body)
    
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    next()
}