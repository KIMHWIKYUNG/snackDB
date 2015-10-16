//snack.comments
var schema = new mongoose.Schema({
  _commentsId:Number,
  by:{_usersId:Number, nickname:String},
  text:String,
  grade:String,
  c_timestamp:Date,
  snack_name:String
});


//snack.snack
var schema = new mongoose.Schema({
  _id:Number,
  manufacturer:String,
  snack_name:String,
  avr_grade:String
});


//snack.detail
var schema = new mongoose.Schema({
  _id:Number,
  snack_name:String,
  manufacturer:String,
  nutrition: [{nut_name:String, nut_amount:String}],
  ingredient: [{ing_name:String, ing_amount:String, ing_recommanded:{type:String,index:true}],
  avr_grade:String,
  comments:[
    {_commentsId:Number,
     by:{_usersId:Number, nickname:String},
     text:String,
     grade:String,
     c_timestamp:Date,
     snack_name:String}
   ]
});


//snack.users
var schema = new mongoose.Schema({
  _usersId:Number,
  email:String,
  password:String,
  phone_number:String,
  introduction:String,
  nickname:String,
  join_date:{type:Date, default:Date.now},
  comments:[
    {_commentsId:Number,
     by:{_usersId:Number, nickname:String},
     text:String,
     grade:String,
     c_timestamp:Date,
     snack_name:String}
   ]
});
