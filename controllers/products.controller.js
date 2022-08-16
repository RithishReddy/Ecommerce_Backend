const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllProducts(req, res, next) {
  try {
    const product = await prisma.products.findMany();
    res.json(product);
  } catch (err) {
    console.error("Error while getting Products", err.message);
    next(err);
  }
}

async function getProductsById(req, res, next) {
  try {
    const id = req.params.id;

    const product = await prisma.products.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json(product);
  } catch (err) {
    console.error("Error while getting Products", err.message);
    next(err);
  }
}

async function createProduct(req, res, next) {
  try {
    const { name, description, image, category, quantity, price, variants } =
      req.body;

    // const productExists = await prisma.products.findUnique({
    //   where: {
    //     name,
    //   },
    //   select: {
    //     name,
    //   },
    // });
    // if(productExists){
    //   return res.status(400).json({
    //       msg:"Product Exists"
    //   })
    // }

    const newProduct = await prisma.products.create({
      data: {
        name,
        description,
        image,
        category,
        quantity,
        price,
        variants,
      },
    });

    res.json(newProduct);
  } catch (err) {
    console.error("Error while getting Products", err.message);
    next(err);
  }
}

async function getProductReviews(req, res, next) {
  try {
    const id = req.params.id;

    const product = await prisma.ratings.findMany({
      where: {
        id: Number(id),
      },
    });
    res.json({ratings:product});
  } catch (err) {
    console.error("Error while getting Products", err.message);
    next(err);
  }
}

async function createProductReview(req, res, next) {
  try {
    const { name, review, rating } = req.body;
    const id = req.params.id;

    const newReview = await prisma.ratings.create({
      data: {
        name,
        review,
        rating,
        product_id: Number(id),
      },
    });

    res.json(newReview);
  } catch (err) {
    console.error("Error while getting Products", err.message);
    next(err);
  }
}

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  getProductReviews,
  createProductReview,
};
