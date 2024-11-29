let express = require('express');
const blogRoutes = require('./routes/blogRoutes')

app = express();
const PORT = 1000;
app.use(express.json());

app.use('/api', blogRoutes)

app.listen(PORT, () => {
    console.log("Servidor corriendo", PORT)
})