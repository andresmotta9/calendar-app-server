const { response } = require('express');

const getEvents = async (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: 'getEvents',
  });
};

const createEvent = async (req, res = response) => {
  return res.status(201).json({
    ok: true,
    msg: 'Event created',
  });
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
