const express = require('express');
const multer = require('multer');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/', authMiddleware, authMiddleware.requireAdmin, upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No image uploaded' });
    const serverUrl = `${req.protocol}://${req.get('host')}`;
    res.json({ imageUrl: `${serverUrl}/uploads/${req.file.filename}` });
});

module.exports = router;
