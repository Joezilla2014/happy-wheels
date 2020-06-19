const HappyWheels = require('happy-wheels');

HappyWheels.searchLevels('rope swing', 'rating').then(([ level ]) => {
    console.log(level);
});
