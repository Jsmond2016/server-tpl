/*
 * @Description: 
 * @Date: 2020-03-21 11:58:13
 * @Author: HJ <jinhuang02@hand-china.com>
 * @Copyright: Copyright (c) 2018, Hand
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

const Product = model('Product', productSchema); // 数据库-表名-products
const Manufacturer = model('Manufacturer', manufacturerSchema); // 数据库-表名-manufacturers

module.exports = { Product, Manufacturer };
