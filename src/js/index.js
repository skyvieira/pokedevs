// Function to remove the 'open' class from the currently displayed card
function closeCurrentCard() {
    const currentOpenCard = document.querySelector(".c-pokedevs__card--open");
    if (currentOpenCard) {
      currentOpenCard.classList.remove("c-pokedevs__card--open");
    }
  }
  
  // Function to open the card of the selected pokedev
  function openSelectedCard(selectedPokedevId) {
    const cardToOpen = document.getElementById(`${selectedPokedevId}-card`);
    if (cardToOpen) {
      cardToOpen.classList.add("c-pokedevs__card--open");
    }
  }
  
  // Function to remove the 'active' class from the current active list item
  function deactivateCurrentListItem() {
    const currentActiveListItem = document.querySelector(".c-pokedevs__list-item--active");
    if (currentActiveListItem) {
      currentActiveListItem.classList.remove("c-pokedevs__list-item--active");
    }
  }
  
  // Function to activate the selected pokedev in the list
  function activateSelectedListItem(selectedPokedevId) {
    const selectedListItem = document.getElementById(selectedPokedevId);
    if (selectedListItem) {
      selectedListItem.classList.add("c-pokedevs__list-item--active");
    }
  }
  
  // Main function to handle pokedev item click event
  function handlePokedevClick(pokedevItem) {
    pokedevItem.addEventListener("click", () => {
      const selectedPokedevId = pokedevItem.attributes.id.value;
  
      closeCurrentCard();
      openSelectedCard(selectedPokedevId);
      deactivateCurrentListItem();
      activateSelectedListItem(selectedPokedevId);
    });
  }
  
  // Add event listeners to all pokedev list items
  const pokedevItems = document.querySelectorAll(".c-pokedevs__list-item");
  pokedevItems.forEach(handlePokedevClick);
  