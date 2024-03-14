
router.delete("/",verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;