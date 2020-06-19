const HappyWheels = requirejs(['happy-wheels/HappyWheels']);

HappyWheels.searchLevels('rope swing', 'rating').then(([ level ]) => {
    console.log(level);
});
