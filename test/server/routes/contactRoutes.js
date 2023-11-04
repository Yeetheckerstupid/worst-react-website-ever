const express = require('express');
const contactController = require('../controllers/contactController');
const multer = require('multer');

const router = express.Router();

const storage = multer.memoryStorage();

//configure multer
const upload = multer({
  dest: 'uploads',
  storage,
});

router.post('/', contactController.userData);

router.post('/file', upload.single('file'), contactController.fileUpload);

router.post('/ftp', upload.single('file'), contactController.ftpUpload);

module.exports = router;
