require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { authRouter } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.route");
const { messageRouter } = require("./routes/message.route");
const { authMiddleware } = require("./middleware/auth.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRouter);
app.use("/users", userRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
