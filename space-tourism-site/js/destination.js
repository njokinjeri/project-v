document.addEventListener("DOMContentLoaded", function () {
    fetch("./data/data.json")
        .then(response => response.json())
        .then(data => {
            const destinations = data.destinations;
            const tabs = document.querySelectorAll(".destination-tabs button")

            function showDestination(index) {
                const destination = destinations[index];

                document.getElementById("destination-image-webp").srcset = destination.images.webp;
                document.getElementById("destination-image").src = destination.images.png;
                document.getElementById("destination-image").alt = `Image of ${destination.name}`;
                document.getElementById("destination-name").textContent = destination.name.toUpperCase();
                document.getElementById("destination-description").textContent = destination.description;
                document.getElementById("destination-distance").textContent = destination.distance.toUpperCase();
                document.getElementById("destination-time").textContent = destination.travel.toUpperCase();

                tabs.forEach(tab => tab.classList.remove("active"));
                tabs[index].classList.add("active");
            }
            tabs.forEach((tab, index) => {
                tab.addEventListener("click", () => showDestination(index))
            });

            showDestination(0);
        })
        .catch(error => console.error("Error loading JSON data:", error));
});
