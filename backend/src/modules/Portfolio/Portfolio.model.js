const mongoose = require("mongoose");
const { MediaType } = require("../../config/constant.config");

const portfolioSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  // },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", 
    required: true,
  },
  media: [
    {
      type: {
        type: String,
        enum: [...Object.values(MediaType)], 
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
      videoImageUrl: {
        type: String, // YouTube video URL
        required: function () {
          return this.type === "video"; // Required if type is 'video'
        },
      },
      thumbnail: String, // Optional thumbnail for videos
    },
  ],
  createdBy:{
          type:mongoose.Types.ObjectId,
          ref:"User"
      },
  
  },{
      timestamps:true,
      autoIndex:true,
      autoCreate:true,
})

const portfolioModel = mongoose.model("Portfolio", portfolioSchema);

module.exports = portfolioModel;
