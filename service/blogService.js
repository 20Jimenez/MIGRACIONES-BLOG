const {Blog} = require('../models')
let listarBlogService = async () => {

    try {
        console.log("fsdsdsdsdsdsd")
        let resp = await Blog.findAll();
        return resp;
    }
    catch (error) {
        
    }
}
module.exports = {listarBlogService}
