document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }

        if (currentPath === '/index.html' || currentPath === '/') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        }
    });
});

import {adopt} from "../data/adoption.js";
console.log(adopt);

const adoptioncards = document.querySelector ('#adoptioncards');

    adoption.forEach(adopt => {
    const thecard = document.createElement('div');
    thecard.className = "ad1";

    const innerDiv = document.createElement('div');
    thecard.appendChild(innerDiv);

    const theimg = document.createElement('img');
    theimg.src=adoption.url;
    theimg.className = "w-full";

    const thetitle = document.createElement('h2');
    thetitle.innerText=adoption.name;

    const thespecies = document.createElement('div');
    thespecies.innerText=adoption.species;
    thespecies.className="adspeicies";

    const thedesc = document.createElement('p');
    thedesc.innerText=adoption.description;

    const thecost = document.createElement('div');   
    thecost.innerHTML = `<strong>Cost:</strong> ${adoption.cost} per animal`
    thecost.className = "adcost";

    const thebuttons = document.createElement('div');
    thebuttons.innerHTML = `<a href="#" class="mi">More Information</a><a href="#" class="av">Available Animals</a>`;
    thebuttons.className = "adlinks";

    innerDiv.appendChild(theimg);
    innerDiv.appendChild(thetitle);
    innerDiv.appendChild(thespecies);
    innerDiv.appendChild(thedesc);
    innerDiv.appendChild(thecost);
    innerDiv.appendChild(thebuttons);

    thecard.appendChild(innerDiv);

    adoptioncards.appendChild(thecard);

});