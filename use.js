const HappyWheels = requirejs(['happy-wheels/HappyWheels'], function(HappyWheels) {

HappyWheels.searchLevels('rope swing', 'rating').then(([ level ]) => {
    console.log(level);
}});
