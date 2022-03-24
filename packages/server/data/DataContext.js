const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const dbContext = new JsonDB(new Config("db", true, true, "/"));

// dbContext.push("/musics/1", {
//     id: 1,
//     name: "Album 3",
//     price: 999,
//     imgName: "Album3.png",
// });
// dbContext.push("/musics/2", {
//     id: 2,
//     name: "Album 1",
//     price: 1999,
//     imgName: "Album1.png",
// });
// dbContext.push("/musics/3", {
//     id: 3,
//     name: "Album 1",
//     price: 9989,
//     imgName: "Album1.png",
// });
// dbContext.push("/musics/4", {
//     id: 3,
//     name: "Album 4",
//     price: 9100,
//     imgName: "Album5.png",
// });
// dbContext.push("/musics/5", {
//     id: 5,
//     name: "Album 5",
//     price: 800,
//     imgName: "Album5.png",
// });

// dbContext.push("/merch/1", {
//     id: 1,
//     name: "T-Shirt",
//     price: 1800,
//     imgName: "Shirt.png",
// });

// dbContext.push("/merch/2", {
//     id: 2,
//     name: "Coffie",
//     price: 180,
//     imgName: "Coffee.png",
// });

module.exports = {dbContext}