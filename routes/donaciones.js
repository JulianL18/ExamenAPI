const {Router} = require('express');

const route = Router();

const{getDonacion, postDonacion, putDonacion, deleteDonacion} = require('../controller/donaciones');

route.get('/', getDonacion)
route.post('/', postDonacion)
route.put('/', putDonacion)
route.delete('/', deleteDonacion)

module.exports = route