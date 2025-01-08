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
  listAll = async (data) => {
    try {
        
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
