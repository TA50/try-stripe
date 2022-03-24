const {Router} = require("express")
const {dbContext} = require("../data/DataContext");
const musicRouter = Router();

musicRouter.get("/",(req, res)=>{ 
    const result = dbContext.getData("/musics");
    res.json(Object.values(result));
});

module.exports = musicRouter;