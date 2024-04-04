import { Router } from "express";
import Controllers from "../controllers";

const router = Router();
const Flare = new Controllers.Flare();

router.get("/providers", Flare.getProvidersInfo);
router.post("/enable-auto-claim", Flare.enableAutoClaim);
router.post("/remove-auto-claim", Flare.removeAutoClaim);
router.post("/add-new-user", Flare.AddNewUser);

export default router;
