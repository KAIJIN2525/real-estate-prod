import express from "express";
import {
  getTenants,
  createTenant,
  updateTenant,
  getCurrentResidencies,
  removeFavoriteProperty,
  addFavoriteProperty,
} from "../controllers/tenantControllers";

const router = express.Router();

router.get("/:cognitoId", getTenants);
router.put("/:cognitoId", updateTenant);
router.get("/:cognitoId/current-residencies", getCurrentResidencies);
router.post("/", createTenant);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;
