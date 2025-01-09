const { deleteFile } = require("../../utilities/helper");
const portfolioService = require("./portfolio.service");

class PortfolioController {
  create = async (req, res, next) => {
    try {
        const data = req.body;
        if (req.files.imageUrl) {
            data.imageUrl = await Promise.all(
            req.files.imageUrl.map((file) =>
                uploadImage("./public/uploads/portfolio/" + file.filename)
            )
            );
        } else {
            throw new Error(
            '"image" field is required and must be an array of files'
            );
        }

        data.createdBy = req.authUser._id;
        const response = await portfolioService.createPortfolio(data);

        const allFiles = [...(req.files.imageUrl || [])];

        for (const file of allFiles) {
            await deleteFile("./public/uploads/portfolio/" + file.filename);
        }

      res.json({
        result: response,
        messaage: "Featured portfolio created",
        meta: null,
      });     
    } catch (exception) {
      conosle.log(exception);
      next(exception);
    }
  };

  index = async (req, res, next) => {
    try {
        const page = req.page || 1
        const limit = req.limit || 10
        const skip = (page-1) * limit

        const {count, data } =  await portfolioService.listAll({
            skip: skip,
            limit: limit
        })
        res.json({
            result:data,
            message:"LIst of all images and videos",
            meta:{
                currentPage: page,
                total: count,
                limit: limit,
            }
        })
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };
  delete = async (req, res, next) => {
    try {
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };
}
module.exports = new PortfolioController();
