import { Router } from "express"
const router = Router()

router.get("/", (req, res) => res.render("index", { title: "primera pagina con node"}))
router.get("/about", (req, res) => res.render("about", { title: "about me", x:30}))
router.get("/contact", (req, res) => res.render("contact", { title: "contact me"}))
router.get("/integrant", (req, res) => res.render("integrant", { title: "contact me"}))
export default router