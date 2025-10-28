document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
      const technology = data.technology;
      const btnContainer = document.querySelector(".tech-btn");
      const img = document.getElementById("tech-image");
      const imgSource = document.getElementById("tech-img-landscape");
      const nameEl = document.getElementById("tech-name");
      const descEl = document.getElementById("tech-description");

      technology.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.textContent = index + 1;
        btn.addEventListener("click", () => showTech(index));
        btnContainer.appendChild(btn);
      });

      function showTech(index) {
        const tech = technology[index];

        nameEl.textContent = tech.name.toUpperCase();
        descEl.textContent = tech.description;

        img.src = tech.images.portrait;
        imgSource.srcset = tech.images.landscape;

        document.querySelectorAll(".tech-btn button").forEach((b, i) => {
          b.classList.toggle("active", i === index);
        });
      }

      showTech(0);
    })
    .catch(error => console.error("Error loading JSON data:", error));
});
