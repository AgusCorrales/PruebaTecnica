const express = require('express');
const router = express.Router()
const NewsController = require('../controllers/NewsController');


router.post('/', NewsController.create);
router.get('/', NewsController.getAll);
router.put('/id/:_id', NewsController.update);
router.put('/like/:_id', NewsController.like);
router.put('/notlike/:_id', NewsController.notlike);
router.delete('/id/:_id', NewsController.delete);
router.get('/liked', NewsController.getLikedNews);


module.exports = router;