

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('pages/about', { title: 'About' });
  });