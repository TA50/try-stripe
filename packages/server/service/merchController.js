const {Router} = require("express")
const {dbContext} = require("../data/DataContext");
const merchRouter = Router();

merchRouter.get("/", (req, res)=>{ 
    const result = dbContext.getData("/merchs");
    res.json(Object.values(result));
});

module.exports = merchRouter;