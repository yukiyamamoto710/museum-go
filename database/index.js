const mongoose = require('mongoose');

const sampleBio = require('./sampleBio.json');

mongoose.connect('mongodb://localhost/biography', {useNewUrlParser: true, useUnifiedTopology: true});

let bioSchema = mongoose.Schema({
  id: String,
  slug: String,
  name: String,
  biography: String,
  birthday: String,
  deathday: String,
  nationality: String,
  image: String,
});

const Biography = mongoose.model('Biography', bioSchema);

Biography.insertMany(sampleBio)
  .then(() => {
    console.log("Data inserted")
  })
  .catch((error) => {
    console.log(error)
  });

let getBio = (slug)=> {
  return Biography.findOne({slug: slug})
    // .then((results)=>{
    //   callback(null, results)
    // })
    // .catch(()=>{
    //   console.log('could not get data');
    // })
}

module.exports = getBio;
