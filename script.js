document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        { text: "Jupiter is twice as massive as all the other planets in our solar system combined.", category: "solarSystem" },
        { text: "Saturn's rings are made mostly of ice particles, with a smaller amount of rocky debris and dust.", category: "solarSystem" },
        { text: "The Sun accounts for about 99.86% of the total mass of the solar system.", category: "solarSystem" },
        { text: "The Kuiper Belt is a region of the solar system beyond Neptune, populated with many small icy bodies.", category: "solarSystem" },
        { text: "The hottest planet in our solar system is Venus, with a surface temperature of over 450°C.", category: "planets" },
        { text: "A year on Mercury is just 88 days long.", category: "planets" },
        { text: "There are more volcanoes on Venus than on any other planet in the solar system.", category: "planets" },
        { text: "The largest volcano in the solar system is Olympus Mons on Mars, standing at 13.6 miles high.", category: "planets" },
        { text: "Uranus rotates on its side, making its axis nearly parallel to the plane of the solar system.", category: "planets" },
        { text: "Pluto, now classified as a dwarf planet, has five known moons.", category: "planets" },
        { text: "Mars has the largest dust storms in the solar system, which can last for months and cover the entire planet.", category: "planets" },
        { text: "The surface of Mars is covered in iron oxide, giving it a reddish appearance.", category: "planets" },
        { text: "The Milky Way galaxy will collide with the Andromeda Galaxy in about 4.5 billion years.", category: "galaxy" },
        { text: "The Andromeda Galaxy is the closest spiral galaxy to the Milky Way and is on a collision course with it.", category: "galaxy" },
        { text: "The first artificial satellite, Sputnik 1, was launched by the Soviet Union in 1957.", category: "manMade" },
        { text: "The International Space Station (ISS) orbits Earth approximately every 90 minutes.", category: "manMade" },
        { text: "The Hubble Space Telescope has helped astronomers determine the rate of expansion of the universe.", category: "manMade" },
        { text: "The universe is around 13.8 billion years old.", category: "universe" },
        { text: "There are more stars in the universe than grains of sand on Earth.", category: "universe" },
        { text: "Black holes are regions of space where the gravitational pull is so strong that nothing, not even light, can escape.", category: "universe" },
        { text: "The observable universe is about 93 billion light-years in diameter.", category: "universe" },
        { text: "The speed of light is about 299,792 kilometers per second (186,282 miles per second).", category: "universe" },
        { text: "Neutron stars can spin at a rate of 600 rotations per second.", category: "stars" },
        { text: "The largest known star, UY Scuti, is about 1,700 times the size of the Sun.", category: "stars" },
        { text: "The Great Red Spot on Jupiter is a giant storm that has been raging for at least 350 years.", category: "stars" },
        { text: "The asteroid belt is located between Mars and Jupiter and contains millions of asteroids.", category: "asteroids" },
        { text: "The largest asteroid in the asteroid belt is Ceres, which is also classified as a dwarf planet.", category: "asteroids" },
        { text: "Meteorites are fragments of asteroids or comets that survive the journey through Earth's atmosphere and land on the surface.", category: "asteroids" },
        { text: "Jupiter is twice as massive as all the other planets in our solar system combined.", category: "solarSystem" },
        { text: "Saturn's rings are made mostly of ice particles, with a smaller amount of rocky debris and dust.", category: "solarSystem" },
        { text: "The Sun accounts for about 99.86% of the total mass of the solar system.", category: "solarSystem" },
        { text: "A year on Mercury is just 88 days long.", category: "planets" },
        { text: "The Moon is moving away from Earth at a rate of about 3.8 centimeters per year.", category: "planets" },
        { text: "The Andromeda Galaxy is on a collision course with the Milky Way.", category: "galaxy" },
        { text: "The Hubble Space Telescope has helped determine the rate of expansion of the universe.", category: "manMade" },
        { text: "Neutron stars can spin at a rate of 600 rotations per second.", category: "stars" },
        { text: "The asteroid belt is located between Mars and Jupiter.", category: "asteroids" }
    ];


    
    const factBox = document.getElementById('fact-box');
    const generateBtn = document.getElementById('generate-btn');
    const container = document.querySelector('.container');
    const body = document.body;
    
    generateBtn.addEventListener('click', () => {
        // Pick a random fact
        const randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts[randomIndex];

        // Smooth text fade-out
        factBox.style.opacity = "0";

        setTimeout(() => {
            // Update the fact text
            factBox.textContent = selectedFact.text;

            // Smooth text fade-in
            factBox.style.opacity = "1";
        }, 400);

        // Change the background of the entire page
        body.style.backgroundImage = categoryBackgrounds[selectedFact.category];
        body.style.backgroundSize = "contain"; // Ensures images fit well
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat"; // Prevents tiling

        // Resize the fact-box based on text
        factBox.style.width = 'auto';
        factBox.style.minHeight = 'auto';
        factBox.style.padding = '10px 20px';

        // Resize the container to fit the new fact size
        container.style.width = 'fit-content';
        container.style.padding = '15px';
    });
});
    
    // Define background images for the body
    const categoryBackgrounds = {
        solarSystem: 'url("images/solarsystem.jpg")',
        planets: 'url("images/planets.jpg")',
        galaxy: 'url("images/galaxy.jpeg")',
        manMade: 'url("images/manmade.jpeg")',
        universe: 'url("images/universe.jpeg")',
        stars: 'url("images/stars.jpeg")',
        asteroids: 'url("images/asteroids.jpeg")'
    };
