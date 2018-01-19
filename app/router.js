import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('queeresources');
  this.route('queeresource', {path: '/queeresources/:queeresource_id'});
  this.route('myqueeresources');
  this.route('myqueeresource', {path: '/myqueeresources/:myqueeresource_id'});
  this.route('youth-community-spaces');
  this.route('school-resources');
  this.route('sa-and-dv');
  this.route('legal-assistance');
  this.route('family-resources');
  this.route('online-resources');
  this.route('health-and-wellness');
  this.route('training-conferences-and-contd-ed');
  this.route('performing-arts');
});

export default Router;
