const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", 
    required: true,
  },
  media: [
    {
      type: {
        type: String,
        enum: ["image", "video"], 
        required: true,
      },
      imageUrl: {
        type: [String], 
        required: function () {
          return this.type === "image"; 
        },
      },
      videoUrl: {
        type: String, // YouTube video URL
        required: function () {
          return this.type === "video"; // Required if type is 'video'
        },
      },
      thumbnail: String, // Optional thumbnail for videos
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const portfolioModel = mongoose.model("Portfolio", portfolioSchema);

module.exports = portfolioModel;
