const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
  name: {
    type: String,
  },
  age: {
    type: number,
  },
  favoriteFoods: {
    type: string,
  },
});
module.exports = Contact = mongoose.modele("contacts", contactSchema);
