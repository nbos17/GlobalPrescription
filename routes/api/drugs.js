const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/drugs"



router.route("/")
  .get(controller.findAllDrugs)
  //.post(controller.create)
  
  

router.route("/database")
  .get(controller.searchAll);
  //.delete(controller.remove);

router.route("/landing")
  .get(controller.takeInfo);

  
router.route("/newUser")
  .put(controller.addUser);




// Finds existing Username in database
router.route("/loginn")
  .get(controller.findUser);

  

router.route("/logged")
  .get(controller.displayUser);  

//matches
router.route("/search")
  .put(controller.userUpdate);

router.route("/grabUser")
    .get(controller.findAll)
    .delete(controller.remove);
// Matches with "/api/drugs/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update);



module.exports = router;