var express = require("express");
var router = express.Router();

var productsController=require("../controllers/products.controller")

router.get('/',productsController.getAllProducts)
router.get('/:id',productsController.getProductsById)
router.post('/create',productsController.createProduct)
router.get('/:id/reviews',productsController.getProductReviews)
router.post('/:id/reviews/create',productsController.createProductReview)

module.exports = router;
