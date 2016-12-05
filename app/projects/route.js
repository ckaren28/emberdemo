import Ember from 'ember';
export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', [{"id":1,"name":"Project 1","description":"Description for Project 1","image_url":"http://agonica.com/wp-content/uploads/2013/02/2000_lakers_group_md.jpg"},{"id":2,"name":"Project 2","description":"Description for Project 2","image_url":"http://agonica.com/wp-content/uploads/2013/02/2000_lakers_group_md.jpg"},{"id":3,"name":"Project 3","description":"Description for Project 3","image_url":"http://agonica.com/wp-content/uploads/2013/02/2000_lakers_group_md.jpg"},{"id":4,"name":"Project 4","description":"Description for Project 4","image_url":"http://agonica.com/wp-content/uploads/2013/02/2000_lakers_group_md.jpg"},{"id":5,"name":"Project 5","description":"Description for Project 5","image_url":"http://agonica.com/wp-content/uploads/2013/02/2000_lakers_group_md.jpg"}]);
  }
});
