// this is for searching and filtering events.
document.getElementById("search").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let eventCards = document.querySelectorAll(".eventcard");

    eventCards.forEach(event => {
        let eventName = event.querySelector("a").textContent.toLowerCase();
        if (eventName.includes(filter)) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    });
});
// categories
document.querySelectorAll("#categories a").forEach(category => {
    category.addEventListener("click", function (e) {
        e.preventDefault();
        let selectedCategory = this.textContent.toLowerCase();
        let eventCards = document.querySelectorAll(".eventcard");

        eventCards.forEach(event => {
            let eventCategory = event.querySelector("a").textContent.toLowerCase();
            if (selectedCategory === "all" || eventCategory === selectedCategory) {
                event.style.display = "block";
            } else {
                event.style.display = "none";
            }
        });
    });
});
//events available
const events = [
    { category: "Music",name: " Night of love", img: "music.jpg", description: "A live performance featuring top artists and DJs.", location: "Kigali Arena",  price: "5000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Dance" ,name: "Dance", img: "dance.jpg",  description: "Experience the best dance crews battling for the crown.", location: "Serena Hotel, Kigali", price: "10000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Film" ,name: "Film", img: "movies.jpg",  description: "Exclusive screening of the latest blockbuster movie.", location: "Century Cinema, Kigali", price: "10000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Comedy" ,name: "Comedy", img: "comedy.jpg",description: "Laugh out loud with the best comedians in town.", location: "Kigali Convention Center",  price: "10000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Sports",name: "Sports", img: "sport.jpg",description: "Laugh out loud with the best comedians in town.",location: "Kigali Convention Center", price: "5000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Art" , name: "Art Exhibition", img: "art.jpg",description: "Explore amazing artworks from Rwandan artists.",location: "Inema Arts Center", price: "10000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Fashion", name: "Fashion", img: "kycrochet.png", description: "Showcasing the latest fashion trends from ky crochets",location: "Radisson Blu Hotel",price: "5000 RwF", date: "28th Feb 2025", time: "21:00" },
    {category: "Music", name: "weekend vibezz",img: "dj.jpg" , description:"a live performance from best DJs",location: "Green lounge",price: "5000 RwF", date: "28th Feb 2025", time: "21:00"}
    
    
    
];

function loadEvents() {
    let eventContainer = document.querySelector(".main");
    eventContainer.innerHTML = ""; // Clear existing content

    events.forEach(event => {
        let eventCard = document.createElement("article");
        eventCard.classList.add("eventcard");

        eventCard.innerHTML = `
          <img src="${event.img}" alt="${event.name}">
            <div>
             <a href="#">${event.category}</a>
                <h6>${event.name}</h6>
                <p><strong>Description:</strong> ${event.description}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Price:</strong> ${event.price}</p>
                <p><strong>Date:</strong> ${event.date} - <time>${event.time}</time></p>
                <button class="book-btn" data-index="${event.index}">book now</button>
            </div>
        `;
        eventContainer.appendChild(eventCard);
    });
     // Add event listeners to all "Book Now" buttons
    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", function() {
            let eventIndex = this.getAttribute("data-index");
            openBookingForm(eventIndex);
        });
    });
    console.log("Event listeners added to buttons!");

    function openBookingForm(index) {
        let selectedEvent = events[index];
        alert(`You are booking: ${selectedEvent.name} at ${selectedEvent.location}`);
    }
    
}


document.addEventListener("DOMContentLoaded", loadEvents);
