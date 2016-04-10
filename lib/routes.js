console.log("ROUTES");


FlowRouter.route('/', {

  'name': 'home',
  action() {
    BlazeLayout.render('MainLayout',{main:'search'});
  }

});


/*
STORES - START
*/


FlowRouter.route('/store/new', {

  'name': 'store.new',
  action() {
    BlazeLayout.render('MainLayout',{main:'store.new'});
  }

});

/*
STORES - END
*/


/*
Categories - START
*/

FlowRouter.route('/category', {

  'name': 'category.new',
  action() {
    BlazeLayout.render('MainLayout',{main:'category.new'});
  }

});

/*
Categories - END
*/
