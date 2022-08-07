const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const authSchema = (data) =>{

    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','co','org'] } }).lowercase().required(),
        password: passwordComplexity()
    })
    return schema.validate(data);
}

module.exports = authSchema;




// module.exports = {authSchema}
