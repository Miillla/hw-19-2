document.querySelector("#fetchBtnPerson").addEventListener("click", (event) => {
  const id = event.target.getAttribute("data-id");

  const page = event.target.getAttribute("data-page");
  fetchPeople(page);
});
document.addEventListener("click", function (event) {
  if (event.target.id === "fetchBtnPersonNext") {
    const page = event.target.getAttribute("data-page");
    fetchPeople(page);
  }
  if (event.target.id === "fetchBtnPlanetNext") {
    const page = event.target.getAttribute("data-page");
    fetchPlanet(page);
  }
  if (event.target.id === "fetchBtnStarShipsNext") {
    const page = event.target.getAttribute("data-page");
    fetchStarShips(page);
  }
});

function fetchPeople(page) {
  fetch(`https://swapi.dev/api/people/?page=${page}`)
    .then((res) => res.json())
    .then((results) => {
      const button = document.getElementById("fetchBtnPerson");
      const url = results.next;

      // Create a URL object
      const urlObj = new URL(url);

      // Extract the 'page' query parameter using URLSearchParams
      const page = urlObj.searchParams.get("page");

      // console.log(page); // Outputs: 2

      button.setAttribute("data-page", page); // Update the 'data-id' attribute

      const allPeople = results.results;
      let rsp = "";
      const personBox = document.querySelector("#personBox");
      allPeople.forEach(function (person) {
        rsp += `
        <div style="padding: 10px; margin-top: 10px;">
          <div>Name: ${person.name}</div>

          </div>
      `;
        console.log(person.name);
      });
      rsp += `
    <div style="padding: 10px; margin-top: 10px;">
      <button id="fetchBtnPersonNext"
        class="btn btn-primary" data-page="${page}">Next</button>
    

      
      
    </div>
  `;

      personBox.innerHTML = rsp;
      // console.log(results, allPeople);
    });
}

function fetchPlanet(page) {
  fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then((res) => res.json())
    .then((results) => {
      const button = document.getElementById("fetchBtnPlanets");
      const url = results.next;

      const urlObj = new URL(url);

      const page = urlObj.searchParams.get("page");

      button.setAttribute("data-page", page);

      const allPlanets = results.results;
      let rsp = "";
      const personBox = document.querySelector("#personBox");
      allPlanets.forEach(function (planet) {
        rsp += `
      <div style="padding: 10px; margin-top: 10px;">
        <div>Planet: ${planet.name}</div>

        </div>
    `;
        console.log(planet.name);
      });
      rsp += `
  <div style="padding: 10px; margin-top: 10px;">
    <button id="fetchBtnPlanetNext"
      class="btn btn-primary" data-page="${page}">Next</button>
  

    
    
  </div>
`;

      personBox.innerHTML = rsp;
    });
}

function fetchStarShips(page) {
  fetch(`https://swapi.dev/api/starships/?page=${page}`)
    .then((res) => res.json())
    .then((results) => {
      const button = document.getElementById("fetchBtnStarships");
      const url = results.next;

      const urlObj = new URL(url);

      const page = urlObj.searchParams.get("page");

      button.setAttribute("data-page", page);

      const allStarShips = results.results;
      let rsp = "";
      const personBox = document.querySelector("#personBox");
      allStarShips.forEach(function (starship) {
        rsp += `
    <div style="padding: 10px; margin-top: 10px;">
      <div>StarShips: ${starship.name}</div>

      </div>
  `;
        console.log(starship.name);
      });
      rsp += `
<div style="padding: 10px; margin-top: 10px;">
  <button id="fetchBtnStarShipsNext"
    class="btn btn-primary" data-page="${page}">Next</button>


  
  
</div>
`;

      personBox.innerHTML = rsp;
    });
}

document
  .querySelector("#fetchBtnPlanets")
  .addEventListener("click", (event) => {
    const page = event.target.getAttribute("data-page");
    fetchPlanet(page);
  });
document
  .querySelector("#fetchBtnStarships")
  .addEventListener("click", (event) => {
    const page = event.target.getAttribute("data-page");
    fetchStarShips(page);
  });
