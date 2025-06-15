require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { UserModel } = require("./models/UserModel");
const router = require("./Routes/AuthRoute.js");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(bodyParser.json());
// mongoose.connect(uri).then(() => console.log("DB connected"));

app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));

app.use(cookieParser());

app.use(express.json());

app.use("/", router);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    let order = await OrdersModel.findOne({ name });

    if (!order) {
      const newOrder = new OrdersModel({ name, qty, price, mode });
      await newOrder.save();
      return res
        .status(201)
        .json({ message: "Order created", order: newOrder });
    } else {
      order.qty = order.qty + qty;
      await order.save();
      return res.status(200).json({ message: "Order updated", order });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.patch("/sellOrder", async (req, res) => {
  try {
    const { name, qty } = req.body;

    const stock = await OrdersModel.findOne({ name });

    if (!stock) {
      return res.status(404).json({ message: `Order "${name}" not found.` });
    }

    if (stock.qty === qty) {
      await OrdersModel.deleteOne({
        _id: stock._id,
      });
      return res.status(200).json({ message: `Stock deleted successfully` });
    } else if (stock.qty > qty) {
      let newQty = stock.qty - qty;
      stock.qty = newQty;
      await stock.save();

      return res.json({
        message: `Decreased "${name}" qty by ${qty}.`,
      });
    } else {
      return res.json({ message: "Enter a valid quantity to remove" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("App started !...the port no:", PORT);
});
