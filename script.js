const audioPlayer = document.getElementById("audioPlayer");
const songCards = document.querySelectorAll(".song-card");
const searchInput = document.getElementById("searchInput");
const searchBtnSidebar = document.getElementById("searchBtnSidebar");
const libraryBtn = document.getElementById("libraryBtn");
const nowPlayingTitle = document.querySelector("h4");
const nowPlayingArtist = document.querySelector("p");

// Function to play a song
function playSong(card) {
  audioPlayer.src = card.dataset.src;
  audioPlayer.play();
  nowPlayingTitle.textContent = card.dataset.title;
  nowPlayingArtist.textContent = card.dataset.artist;
}

// Play song on card click
songCards.forEach(card => {
  card.addEventListener("click", () => playSong(card));
});

// Search when sidebar Search clicked
searchBtnSidebar.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default link
  const query = searchInput.value.toLowerCase().trim();
  if (query === "") return alert("Please enter a song or artist to search!");

  songCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const artist = card.dataset.artist.toLowerCase();
    if (title.includes(query) || artist.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Show full library when "Your Library" clicked
libraryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  songCards.forEach(card => card.style.display = "block");
  searchInput.value = ""; // clear search input
});
