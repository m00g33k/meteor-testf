Stores =  new Meteor.Collection('stores');

Stores.allow({
  insert: function(userId, doc){
    return true;
  }
});

StoreSchema = new SimpleSchema({

  name: {
    type: String,
    label: "Store name"
  },
  address: {
    type: String,
    label: "Address"
  },

  createdAt: {
    type: Date,
    label: "Created at",
    autoValue: function(){
      return new Date();
    }
  }




});



Stores.attachSchema(StoreSchema);
