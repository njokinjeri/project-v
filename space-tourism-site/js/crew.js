document.addEventListener("DOMContentLoaded", function() {
    fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
        const crew = data.crew;
        const buttons = document.querySelectorAll(".crew-carousel button");

        function showCrew(index) {
            const member = crew[index];

            document.getElementById("crew-image-webp").srcset = member.images.webp;
            document.getElementById("crew-image").src = member.images.png;
            document.getElementById("crew-image").alt = `Image of ${member.name}`;
            document.getElementById("crew-role").textContent = member.role.toUpperCase();
            document.getElementById("crew-name").textContent = member.name.toUpperCase();
            document.getElementById("crew-description").textContent = member.bio;
            
            buttons.forEach(btn => btn.classList.remove("active"));
            buttons[index].classList.add("active");
        }



        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => showCrew(index))
        });

        showCrew(0);
    })
    .catch(error => console.error("Error loading JSON data:", error));
});
