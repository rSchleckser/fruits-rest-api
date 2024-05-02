const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOveride = require('method-override');

// ----------Data ----------
const { foods } = require('./models/foods');
const { fruits } = require('./models/fruits');
const { veggies } = require('./models/veggies');
const { meats } = require('./models/meats');
const { seafoods } = require('./models/seafood');
const { dairys } = require('./models/dairy');

//----------Middleware----------
app.use(methodOveride('_method'));
app.set('view engine', 'ejs');
app.use('/', express.static('public'));
//grab the form and change to json object
app.use(express.json());
//grab and see form data
app.use(express.urlencoded({ extended: true }));
// add middleware for PUT and Delete methods

// -------Home Route--------
//Home route
app.get('/', (req, res) => {
  res.render('home/index', { allFoods: foods });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about/index');
});

// ===========Fruit Routes =============
//Get all fruits
app.get('/fruits', (req, res) => {
  res.render('fruits/index', { allFruits: fruits });
});

// New Fruit Route
app.get('/fruits/new', (req, res) => {
  res.render('fruits/new', {});
});

//Get a single fruit
app.get('/fruits/:index', (req, res) => {
  let idx = parseInt(req.params.index);
  if (idx >= fruits.length) {
    res.render('404', {});
  } else {
    res.render('fruits/show', { fruit: fruits[idx], id: idx });
  }
});

//GET route, update or edit page
app.get('/fruits/:id/edit', (req, res) => {
  const fruit = fruits[req.params.id];
  let id = parseInt(req.params.id);
  res.render('fruits/edit', { fruit, id });
});

// **********Get - Delete Page ********
app.get('/fruits/:id/delete', (req, res) => {
  const fruit = fruits[req.params.id];
  let id = parseInt(req.params.id);
  res.render('fruits/delete', { fruit, id });
});

//**********POST Route********* */
app.post('/fruits', (req, res) => {
  console.log('----------Form Body------\n', req.body);
  //add more code
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    // req.body.readytoeat will be undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
});

// **********PUT- Update Route**********
app.put('/fruits/:id', (req, res) => {
  console.log('----------Update Fruit--------\n', req.body);
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  fruits[parseInt(req.params.id)] = req.body;
  res.redirect('/fruits'); //redirect to /fruits route to get index page
});

// Delete -Delete Fruit
app.delete('/fruits/:id', (req, res) => {
  // Remove the fruit item from the array
  fruits.splice(parseInt(req.params.id), 1);
  res.redirect('/fruits'); //redirect to the index
});

// =====================Veggie Routes =======================
//Get all Veggies
app.get('/veggies', (req, res) => {
  res.render('veggies/index', { allVeggies: veggies });
});

// New Veggie Route
app.get('/veggies/new', (req, res) => {
  res.render('veggies/new', {});
});

//Get single Veggie
app.get('/veggies/:index', (req, res) => {
  if (parseInt(req.params.index) >= veggies.length) {
    res.render('404', {});
  } else {
    res.render('veggies/show', {
      veggie: veggies[req.params.index],
      id: req.params.index,
    });
  }
});

//GET route, update or edit page
app.get('/veggies/:id/edit', (req, res) => {
  const veggie = veggies[req.params.id];
  let id = parseInt(req.params.id);
  res.render('veggies/edit', { veggie, id });
});

// **********Get - Delete Page ********
app.get('/veggies/:id/delete', (req, res) => {
  const veggie = veggies[req.params.id];
  let id = parseInt(req.params.id);
  res.render('veggies/delete', { veggie, id });
});

//**********POST Route********* */
app.post('/veggies', (req, res) => {
  console.log('----------Form Body------\n', req.body);
  //add more code
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    // req.body.readytoeat will be undefined
    req.body.readyToEat = false;
  }
  veggies.push(req.body);
  res.redirect('/veggies');
});

// **********PUT- Update Route**********
app.put('/veggies/:id', (req, res) => {
  console.log('----------Update Veggie--------\n', req.body);
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  veggies[parseInt(req.params.id)] = req.body;
  res.redirect('/veggies'); //redirect to /fruits route to get index page
});

// Delete -Delete Fruit
app.delete('/veggies/:id', (req, res) => {
  // Remove the fruit item from the array
  veggies.splice(parseInt(req.params.id), 1);
  res.redirect('/veggies'); //redirect to the index
});

// ---------Meat Routes ---------
//Get all Meats
app.get('/meats', (req, res) => {
  res.render('meats/index', { allMeats: meats });
});

// New Meat Route
app.get('/meats/new', (req, res) => {
  res.render('meats/new', {});
});

//Get a single Meat
app.get('/meats/:index', (req, res) => {
  if (parseInt(req.params.index) >= meats.length) {
    res.render('404', {});
  } else {
    res.render('meats/show', {
      meat: meats[req.params.index],
      id: req.params.index,
    });
  }
});

//GET route, update or edit page
app.get('/meats/:id/edit', (req, res) => {
  const meat = meats[req.params.id];
  let id = parseInt(req.params.id);
  res.render('meats/edit', { meat, id });
});

// **********Get - Delete Page ********
app.get('/meats/:id/delete', (req, res) => {
  const meat = meats[req.params.id];
  let id = parseInt(req.params.id);
  res.render('meats/delete', { meat, id });
});

//**********POST Route********* */
app.post('/meats', (req, res) => {
  console.log('----------Form Body------\n', req.body);
  //add more code
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    // req.body.readytoeat will be undefined
    req.body.readyToEat = false;
  }
  meats.push(req.body);
  res.redirect('/meats');
});

// **********PUT- Update Route**********
app.put('/meats/:id', (req, res) => {
  console.log('----------Update Meat--------\n', req.body);
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  meats[parseInt(req.params.id)] = req.body;
  res.redirect('/meats'); //redirect to /fruits route to get index page
});

// Delete -Delete Meat
app.delete('/meats/:id', (req, res) => {
  // Remove the fruit item from the array
  meats.splice(parseInt(req.params.id), 1);
  res.redirect('/meats'); //redirect to the index
});

// ============== Seafood Routes ================
// GET - Shows all Seafood
app.get('/seafood', (req, res) => {
  res.render('seafoods/index', { allSeafood: seafoods });
});

// GET - New Seafood Route
app.get('/seafood/new', (req, res) => {
  res.render('seafoods/new', {});
});

//GET - Go to single seafood
app.get('/seafood/:index', (req, res) => {
  if (parseInt(req.params.index) >= seafoods.length) {
    res.render('404', {});
    console.log(req.body, seafoods);
  } else {
    res.render('seafoods/show', {
      seafood: seafoods[req.params.index],
      id: req.params.index,
    });
  }
});

// GET - Go to the Edit Page
app.get('/seafood/:id/edit', (req, res) => {
  const seafood = seafoods[req.params.id];
  let id = parseInt(req.params.id);
  res.render('seafoods/edit', {
    seafood,
    id,
  });
});

// GET - Go to the Delete Page
app.get('/seafood/:id/delete', (req, res) => {
  res.render('seafoods/delete', {
    seafood: seafoods[req.params.id],
    id: req.params.id,
  });
});

// ************** POST Requests ******************//
// POST - Post a new Seafood, how it will add something new
app.post('/seafood', (req, res) => {
  console.log(`---------Form Body----------\n`, req.body);
  seafoods.push(req.body);
  res.redirect('/seafood');
});

// ************** PUT Requests ******************//
// PUT - Update an existing seafood, how it will update existing items
app.put('/seafood/:id', (req, res) => {
  console.log('----------Update Seafood--------\n', req.body);
  seafoods[parseInt(req.params.id)] = req.body;
  res.redirect('/seafood');
});

// ************** Delete Requests ******************//
app.delete('/seafood/:id', (req, res) => {
  seafoods.splice(req.params.id, 1);
  res.redirect('/seafood');
});

// ============== Dairy Routes ==================//
// ************** GET Requests ******************//
// GET - Shows all Dairy
app.get('/dairy', (req, res) => {
  res.render('dairys/index', { allDairy: dairys });
});

// GET - New Route
app.get('/dairy/new', (req, res) => {
  res.render('dairys/new', {});
});

// GET - Go to a single dairy
app.get('/dairy/:index', (req, res) => {
  if (parseInt(req.params.index) >= dairys.length) {
    res.render('404', {});
  } else {
    res.render('dairys/show', {
      dairy: dairys[req.params.index],
      id: req.params.index,
    });
  }
});

// GET - Go to the Edit Page
app.get('/dairy/:id/edit', (req, res) => {
  const dairy = dairys[req.params.id];
  let id = req.params.id;
  res.render('dairys/edit', { dairy, id });
});

// GET - Go to the Delete Page
app.get('/dairy/:id/delete', (req, res) => {
  const dairy = dairys[req.params.id];
  let id = req.params.id;
  res.render('dairys/delete', { dairy, id });
});

// ************** POST Requests ******************//
// POST - Post a new Dairy, how it will add something new
app.post('/dairy', (req, res) => {
  console.log(`--------Form Body-------`, req.body);
  dairys.push(req.body);
  res.redirect('/dairy');
});

// ************** PUT Requests ******************//
// PUT - Update an existing Dairy, how it will update existing items
app.put('/dairy/:id', (req, res) => {
  dairys[parseInt(req.params.id)] = req.body;
  res.redirect('/dairy');
});

// ************** Delete Requests ******************//
app.delete('/dairy/:id', (req, res) => {
  dairys.splice(req.params.id, 1);
  res.redirect('/dairy');
});

// ---------Listen for Server ---------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
