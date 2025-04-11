/**
 * Users' routes / Auth
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/fieldValidator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
  '/new',
  [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password should be at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);
router.post(
  '/',
  [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password should be at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);
router.get('/renew', validateJWT, renewToken);

module.exports = router;
