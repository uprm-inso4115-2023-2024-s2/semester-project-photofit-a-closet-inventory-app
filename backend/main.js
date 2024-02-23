const mongoose = require('mongoose')
const Clothes = require('./schemas/clothes')

mongoose.connect("mongodb://localhost:27017/photofit-test")


const pinkCropTop = {
    name: "Pink Crop Top",
    category: "Top",
    subcategory: "Other",

    color: "Pink",
    size: "S"
}

const blueCropTop = {
    name: "Pink Crop Top",
    category: "Dookie",
    subcategory: "Other",

    color: "Blue",
    size: "S"
}

const newClothes = new Clothes(blueCropTop);
newClothes.save();