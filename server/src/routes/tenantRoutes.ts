import express from "express";
import {
    getTenants,
    createTenant,
    updateTenant
} from "../controllers/tenantControllers";
const router = express.Router();

router.get("/:cognitoId", getTenants);
router.put("/:cognitoId", updateTenant);
router.post("/", createTenant);

export default router;