Meteor.publish('stores', function(){
  return Stores.find();
});
Meteor.publish('categories',function(){
  return Categories.find();
});
Meteor.publish('images', function() {
  return Images.find();
});
