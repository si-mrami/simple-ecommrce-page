import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 8080;

//Create a MySQL connection
const connectDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "frimashop",
});

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const q = "SELECT * FROM `products`";
  connectDb.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json.err;
    }
    return res.json(data);
  });
});

app.post("/addProduct", (req, res) => {
  const q = "INSERT INTO products (`name`, `price`, `desc`, `img`) value (?)";
  const value = [req.body.name, req.body.price, req.body.desc, req.body.img];
  connectDb.query(q, [value], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Products added successfuly!");
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
