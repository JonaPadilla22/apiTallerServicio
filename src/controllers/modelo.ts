import { Request, Response } from "express";
import { ModelService } from "../services/model";
import { BrandService } from "../services/marca";

class ModelController {
  static getAll = async (_req: Request, res: Response) => {
    try {
      const modelos = await ModelService.getModels();
      const response: any = [];

      for (let i = 0; i < modelos.length; i++) {
        const brand = await BrandService.getBrandById(
          modelos[i].ID_MARCA.toString()
        );
        delete modelos[i].ID_MARCA;
        modelos[i].MARCA = brand[0];
        response.push(modelos[i]);
      }

      res.json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  static getById = async (req: Request, res: Response) => {
    try {
      const id_get = req.params.id;
      const modelo = await ModelService.getModelById(
        id_get
      );
      const brand = await BrandService.getBrandById(
        modelo[0].ID_MARCA.toString()
      );
      delete modelo[0].ID_MARCA;
      modelo[0].MARCA = brand[0];
      res.json(modelo[0]);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  static insert = async (
    { body }: Request,
    res: Response
  ) => {
    try {
      const response = await ModelService.insertModel(body);
      res.status(201).json({
        message: "REGISTRADO CON ÉXITO",
        data: response,
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  static update = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = req.body;

      await ModelService.updateModel(data, id);
      res
        .status(201)
        .json({ message: "ACTUALIZADO CON ÉXITO" });
    } catch (e) {
      res.json(e);
    }
  };
}

export { ModelController };
