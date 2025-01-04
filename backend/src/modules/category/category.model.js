const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null
    }
}, {
    timestamps: true,
    autoIndex: true,
    autoCreate: true
})

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
