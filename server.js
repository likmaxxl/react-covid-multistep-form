const jsonServer = require('json-server');
const cors = require("cors")
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');



if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const domainsFromEnv = process.env.CORS_DOMAINS || ""
const whitelist = domainsFromEnv.split(",").map(item => item.trim())
const whitelist = ["http://localhost:8000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))






const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});
