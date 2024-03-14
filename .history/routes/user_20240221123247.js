const router = require('express').Router();

router.delete("/",verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;