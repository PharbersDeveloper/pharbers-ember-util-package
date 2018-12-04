import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('demo', function () {
      this.route('date');
      this.route('number');
      this.route('cookie');
      this.route('list', function() {
        this.route('groupBy');
      });
      this.route('security');
    });
});

export default Router;
