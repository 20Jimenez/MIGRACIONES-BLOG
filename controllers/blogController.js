const blogService = require('../service/blogService');

listarBlog = async (req, res) => {
    try {
        let respuesta = await blogService.listarBlogService();
        res.json(respuesta)
    }
    catch (error) {
        
    }
}
module.exports = {
    listarBlog
}