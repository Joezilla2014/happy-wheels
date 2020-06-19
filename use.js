const HappyWheels = requirejs(['happy-wheels'], function(HappyWheels) {

HappyWheels.searchLevels('rope swing', 'rating').then(([ level ]) => {
    console.log(level);
};
};
);
