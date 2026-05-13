import { Brand } from "../model/brand.js";
import * as BrandService from "../service/brand.service.js";

// Renderiza la tabla principal para administrar las marcas
export const getBrandsTable = async (req, res) => {
  const brands = await BrandService.getAllBrands();

  res.render("car_models/brands_table", {
    brands: brands,
  });
};

// Renderiza el html para poder agregar una nueva marca
export const getBrandFormAdd = async (req, res) => {
  res.render("car_models/brands_form", {
    brand: null,
    action: "register",
  });
};

// Renderiza el html con la información de la marca para la edición de la misma
export const getBrandFormEdit = async (req, res) => {
  try {
    const { id_brand } = req.params;

    if (!id_brand) throw new Error("Brand id is required");

    const editedBrand = await BrandService.getBrandById(id_brand);
    if (!editedBrand) throw new Error("Brand not found");

    return res.render("car_models/brands_form", {
      brand: editedBrand,
      action: "update",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

// Manega el post para crear una nueva marca
export const registerBrand = async (req, res) => {
  const { name, nif } = req.body;

  try {
    const brand = new Brand(name, nif);
    const newBrand = await BrandService.registerBrand(brand);
  } catch (error) {
    console.log(error);
  }

  res.redirect("/panel/admin/brands");
};

// Manega el put para modificar una marca existente
export const updateBrand = async (req, res) => {
  const { id_brand, name, nif } = req.body;

  try {
    if (!id_brand) throw new Error("Id Brand id is required");
    const brand = new Brand(name, nif);
    const upadtedBrand = await BrandService.updateBrand(id_brand, brand);
  } catch (error) {
    console.log(error);
  }

  res.redirect("/panel/admin/brands");
};

// DELETE BRAND
export const deleteBrand = async (req, res) => {
  try {
    const { id_brand } = req.params;

    if (!id_brand) throw new Error("Brand id is required");

    const deletedBrand = await BrandService.deleteBrand(id_brand);

    if (!deletedBrand) throw new Error("Brand not found");

    return res.redirect("/panel/admin/brands");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
