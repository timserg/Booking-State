const router = require('express').Router();
const { Booking, Users } = require('../db/models');

router.post('/', async (req, res) => {
  const { type_id, room_id, time_start, time_end, comment, day_id } = req.body;
  try {
    if (req.session.userId) {
      const { userId } = req.session;
      console.log('>>>', userId);
      const newBooking = await Booking.create({
        room_id,
        day_id,
        user_id: userId,
        comment,
        time_start,
        time_end,
        type_id,
      });
    } else if (req.session.passport.user) {
       const { id } = req.session.passport.user;
      const newBooking = await Booking.create({
        room_id,
        day_id,
        user_id: id,
        comment,
        time_start,
        time_end,
        type_id,
      });
    }

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  const booking = await Booking.findAll({
    include: [{ all: true }],
  });
  res.json(booking);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.destroy({
      where: { id },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
