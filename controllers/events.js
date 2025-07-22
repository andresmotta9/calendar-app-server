const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name');

  return res.status(200).json({
    ok: true,
    msg: events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.status(200).json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk with the administrator',
    });
  }
};

const updateEvent = async (req, res = response) => {
  return res.status(201).json({
    ok: true,
    msg: 'Event updated',
  });
};

const deleteEvent = async (req, res = response) => {
  return res.status(201).json({
    ok: true,
    msg: 'Event deleted',
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
