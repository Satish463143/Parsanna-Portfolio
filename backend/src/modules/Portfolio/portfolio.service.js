const portfolioModel = require("./Portfolio.model");

class PortfolioService {
  createPortfolio = async (data) => {
    try {
      const portfolio = new portfolioModel(data);
      return await portfolio.save();
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
  listAll = async ({ skip = 0, limit = 0, filter }) => {
    try {
      const count = await portfolioModel.countDocuments(filter);
      const data = await portfolioModel.find(filter)
        .populate("createdBy", ["_id", "email", "name"])
        .sort({ _id: "desc" })
        .limit(limit)
        .skip(skip);
      return { count, data };
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
  delete = async (data) => {
    try {
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
}
module.exports = new PortfolioService();
