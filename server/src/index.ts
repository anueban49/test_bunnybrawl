import express from "express";

const app = express();
app.use(express.json());
const port = 12345;
app.listen(port, () => {
  console.log("server running at port 12345");
});
