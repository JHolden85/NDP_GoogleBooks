const path = require("path");
const router = require("express").Router();
const bookRoute = require("./books");
const googleRoute = require("./google");

router.use('/google', googleRoute);
router.use('/books', bookRoute);

router.use((req,res) => {
  res.sendFile(path.join(__dirname, '../../react-frontend/build/index.html'));
});

module.exports = router;
