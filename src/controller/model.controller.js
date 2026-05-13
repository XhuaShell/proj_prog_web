export const getModelTable = async (req, res, next) => {
  res.render("car_models/model_table");
};

export const getModelFormAdd = async (req, res, next) => {
  res.render("car_models/model_form", {
    action: "",
    model: null,
    brands: [
      { id_brand: "123", name: "nombre", nif: "nif" },
      { id_brand: "123", name: "nombre", nif: "nif" },
    ],
    technicalSpecs: null,
  });
};

export const getModelFormEddit = async (req, res, next) => {};

