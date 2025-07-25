/**
 * Event routes / Events
 * host + /api/events
 */
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');

const { check } = require('express-validator');
const router = Router();

//Validate the token of all the event routes
router.use(validateJWT);

const { validateFields } = require('../middlewares/fieldValidator');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

//Get Event
router.get('/', getEvents);

//Create Event
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Initial Date is required').custom(isDate),
    check('end', 'Initial Date is required').custom(isDate),
    validateFields,
  ],
  createEvent
);
// Update Event
router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Initial Date is required').custom(isDate),
    check('end', 'Initial Date is required').custom(isDate),
    validateFields,
  ],
  updateEvent
);

// Delete Event
router.delete('/:id', deleteEvent);

module.exports = router;
