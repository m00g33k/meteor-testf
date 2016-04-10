Schemas = {};

Categories = new Meteor.Collection('categories');
Categories.allow({
  insert: function(){ return true; }
});

Schemas.Category = new SimpleSchema({
  name: {
    type: String,
    label: "Category name"
  },
  description: {
    type: String,
    label: "Description"
  },
  createdAt: {
    type: Date,
    label: "Created at",
    autoValue: function(){
      return new Date();
    }
  }
});
Categories.attachSchema(Schemas.Category);
console.log("999999999999999999999999")
