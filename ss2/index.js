
const express = require("express")
const studentRouter = require("../ss2/routes/students-routes");
const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/students", studentRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Your app is listening on PORT ${PORT}`);
  }
});