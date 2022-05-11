const router = require('express').Router();
const { click } = require('@testing-library/user-event/dist/click');
const Click = require('../model/click.model');
let Exercise = require('../models/click.model');

router.route('/').get((req, res) => {
  Click.find()
    .then(Click => res.json(Click))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const click = req.body.click;
  const description = req.body.description;
 

  const newClick = new Click({
    username,
    description,
  });

  newClick.save()
  .then(() => res.json('Click added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(click => res.json(click))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Click.findByIdAndDelete(req.params.id)
    .then(() => res.json('Click deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(click => {
      click.username = req.body.username;
      click.description = req.body.description;
     

      click.save()
        .then(() => res.json('Click updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;