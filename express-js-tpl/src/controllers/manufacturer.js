/*
 * @Description: 
 * @Date: 2020-03-21 12:02:37
 * @Author: HJ <jinhuang02@hand-china.com>
 * @Copyright: Copyright (c) 2018, Hand
 */
const Model = require('../model');
const { Manufacturer } = Model;

const manufacturerController = {
  all(req, res) {
    Manufacturer.find({})
      .exec((err, manfacturers) => res.json(manfacturers))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Manufacturer
      .findOne({ _id: idParams })
      .exec((err, manufacturer) => res.json(manufacturer));
  },
  create(req, res) {
    const requestBody = req.body;
    const newManufacturer = new Manufacturer(requestBody);

    newManufacturer.save((err, saved) => {
      Manufacturer
        .findOne({ _id: newManufacturer._id })
        .exec((err, manfacturer) => res.json(manfacturer))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    let manufacturer = req.body;

    Manufacturer.updateOne({ _id: idParams }, { ...manufacturer }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Manufacturer.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

module.exports = manufacturerController;
