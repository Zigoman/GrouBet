import * as express from 'express';

import UserCtrl from './controllers/user';

function setRoutes(app) {
  const router = express.Router();
  const userCtrl = new UserCtrl();

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/getData').get(userCtrl.getAll);

  // Apply the routes to our application with the prefix /api
  app.use('/api/data', router);

}

export default setRoutes;
