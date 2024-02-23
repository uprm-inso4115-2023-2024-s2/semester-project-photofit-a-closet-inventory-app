/**
 * How would the Clothes Schema work? Well, for now, I'm only
 * doing Categorizing, so that we'll be the thing that matters most hehe!
 * 
 * Each Category will have a subcategory, simple as that!
 * 
 * 
 */
const mongoose = require('mongoose');


const clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Top', 'Outerwear', 'Bottom', 'Footwear', 'Accessories'],
        required: true
    },
    subcategory: {
        type: String,
        validate: {
            /**
             * @param {String} value : This is simply the value of our `subcategory`
             * @returns {Bool} : Bool value indicating if we have a valid `subcategory`
             */
            validator: function(value) {
                const allowedSubcategories = subcategoryMap[this.category];
                return allowedSubcategories.includes(value);
            },
            message: props => `${props.value} is not a valid subcategory for the specified category`
        },
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

/**
 * This is a mapping for Categories and Subcategories. We can 
 * see it being called in the `validator` for our `subcategory` 
 * above.
 */
const subcategoryMap = {
    Top: ['Tee', 'Sweater', 'Long Sleeve', 'Shirt','Other'],
    Outerwear: ['Hoodie', 'Raincoat', 'Windbreaker', 'Bomber Jacket', 'Denim Jacket','Other'],
    Bottom: ['Denim', 'Sweatpants', 'Casual Pants', 'Shorts','Other'],
    Footwear: ['Boots', 'Sneakers', 'Sandals', 'Other'],
    Accessories: ['Other'] 
};

// Create the model
const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
