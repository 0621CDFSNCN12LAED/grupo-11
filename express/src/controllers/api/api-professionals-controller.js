//const professionalsService = require("../../services/...");

//const { professionals } = require("../serviceControllers");

const productsApiController = {
  create: async (req, res) => {
    const product = await professionalsService.create(req.body);

    res.json({
      meta: {
        status: 200,
        url: "api/professionals",
      },
      data: product,
    });
  },

  list: async (req, res) => {
    const pageSize = 10;
    const page = req.query.page || 0;
    const offset = page * pageSize;

    const { count, rows } = await professionalsService.findAndCountAll(
      pageSize,
      page
    );

    const nextPage =
      offset + pageSize < count ? `/api/professionals?page=${page + 1}` : null;
    const prevPage = page > 0 ? `/api/professionals?page=${page - 1}` : null;

    res.json({
      meta: {
        status: 200,
        count: count,
        page: page,
        pageSize: pageSize,
        url: `/api/professional?page=${page}`,
        nextUrl: nextPage,
        previousUrl: prevPage,
      },
      data: rows.map((professional) => ({
        id: professional.id,
        name: professional.name,
        description: professional.description,
        detail: `/api/professionals/${professionals.id}`,
      })),
    });
  },

  detail: async (req, res) => {
    const prodfessional = await productsService.getById(req.params.id);
    const category = await productCategoryService.getByPk(
      product.productCategoryId
    );

    if (professional) {
      res.json({
        meta: {
          status: 200,
          url: "api/professional/" + req.params.id,
        },
        data: {
          id: professional.id,
          name: professional.name,
          description: professional.description,
          image: "http://localhost:3000" + professionals.image,
        },
      });
    }

    res.json({
      meta: {
        status: 200,
        url: "api/professionals/" + req.params.id,
      },
      data: "No existe el producto con id: " + req.params.id,
    });
  },
};

module.exports = productsApiController;
