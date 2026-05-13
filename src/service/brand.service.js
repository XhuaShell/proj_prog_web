import {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
} from "../repository/brand.repository.js";

export const getAllBrands = async () => getAll();
export const getBrandById = async (id_brand) => getById(id_brand);

export const registerBrand = async (brand) => create(brand);
export const deleteBrand = async (id_brand) => deleteById(id_brand);
export const updateBrand = async (id_brand, brand) => {
  return await updateById(id_brand, brand);
};
