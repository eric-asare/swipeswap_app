// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });

// Routes for Users
app.get("/api/users", (req, res) => {
  User.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/api/users", async (req, res) => {
  try {
    const { email, name, picture } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      // Update existing user
      user.name = name;
      user.picture = picture;
      await user.save();
    } else {
      // Create new user
      user = new User({
        email,
        name,
        picture,
      });
      await user.save();
    }

    res.status(200).json({ message: "User data saved successfully", user });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndRemove(id)
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Products
app.get("/api/products", (req, res) => {
  Product.find()
    .then((item) => {
      console.log(item);
      res
        .status(201)
        .json({ message: "Products Fetched Successfully!", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/api/products", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((item) => {
      console.log(item);
      res.status(201).json({ message: "Item added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body, { new: true })
    .then((item) => {
      console.log(item);
      res
        .status(203)
        .json({ message: "Item Fetched Successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndRemove(id)
    .then((item) => {
      res.status(203).json({ message: "Deleted Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
    googleId: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

// Add routes for CRUD operations for users and products here

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
