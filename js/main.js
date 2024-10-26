const entities = {
  people: {
    nextUrl: "https://swapi.dev/api/people/",
    container: "...", //DOM selector
  },
  planets: {
    nextUrl: "https://swapi.dev/api/planets/",
    container: "...", //DOM selector
  },
  starships: {
    nextUrl: "https://swapi.dev/api/starships/",
    container: "...", //DOM selector
  },
};

document
  .querySelector("#fetchBtn_people")
  .addEventListener("click", (event) => {
    const entity = event.target.getAttribute("data-entity");
    fetchEntity(entity);
  });
document.addEventListener("click", function (event) {
  const ent = event.target.getAttribute("data-entity");
  fetchEntity(ent);
});
function fetchEntity(entity) {
  fetch(entities[entity].nextUrl)
    .then((res) => res.json())
    .then((data) => {
      const button = document.getElementById(`fetchBtn_${entity}`);
      entities[entity].nextUrl = data.next;
      console.log(data);

      const allResults = data.results;
      let rsp = "";
      const entityBox = document.querySelector("#entityBox");
      allResults.forEach(function ({ name }) {
        rsp += `
        <div style="padding: 10px; margin-top: 10px;">
          <div>Name: ${name}</div>

          </div>
      `;
        // console.log(ent);
      });
      rsp += `
    <div style="padding: 10px; margin-top: 10px;">
      <button id="fetchBtn_${entity}_next"
        class="btn btn-primary" data-entity="${entity}">Next</button>
   </div>
  `;

      entityBox.innerHTML = rsp;
    });
}

document
  .querySelector("#fetchBtn_planets")
  .addEventListener("click", (event) => {
    const entity = event.target.getAttribute("data-entity");
    fetchEntity(entity);
  });
document
  .querySelector("#fetchBtn_starships")
  .addEventListener("click", (event) => {
    const entity = event.target.getAttribute("data-entity");
    fetchEntity(entity);
  });
