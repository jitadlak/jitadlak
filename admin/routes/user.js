import express from 'express';

const router = express.Router();

import { signin, signup } from '../controllers/user.js';
import { addservice, addcategory, allservices, caterogybyservices, addsubcategories, deleteservice, allservicecategory, deleteservicecategory, allservicesubcategory, deleteservicesubcategory } from '../controllers/service.js';
import auth from "../middleware/auth.js";
import { addpromos, allpromos, assignPromo, deletepromotion } from '../controllers/promo.js';
import { addproduct, addproductcategory, allproductcategory, allproducts, deleteproduct } from '../controllers/product.js';
import { addserviceorder, allserviceorder } from '../controllers/serviceorder.js';


//authentication
router.post("/signup", signup);
router.post("/signin", signin);

//services
router.post("/addservice", addservice)
router.post("/addcategory", addcategory)
router.get("/allservices", allservices)
router.get("/allservicecategory", allservicecategory)
router.get("/allservicesubcategory", allservicesubcategory)
router.get("/category/:id", caterogybyservices)
router.post("/category/addsubcategory", addsubcategories)
router.delete("/deleteservice/:id", deleteservice)
router.delete("/deleteservicecategory/:id", deleteservicecategory)
router.delete("/deleteservicesubcategory/:id", deleteservicesubcategory)

//promos
router.post("/addpromos", addpromos)
router.put("/assignPromo/:id", assignPromo)
router.get("/allpromos", allpromos)
router.delete("/deletepromotion/:id", deletepromotion)


//products
router.post("/addproduct", addproduct)
router.get("/allproducts", allproducts)
router.delete("/deleteproduct/:id", deleteproduct)
router.post("/addproductcategory", addproductcategory)
router.get("/allproductcategory", allproductcategory)

//servicebook
router.post("/servicebook", addserviceorder)
router.get("/allservicebooked", allserviceorder)

export default router;