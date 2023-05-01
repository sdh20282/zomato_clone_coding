const initFilterButton = () => {
    const filterButton = document.querySelector(".filterButton");
    const filterContainer = document.querySelector(".filterContainer");
    const filterModal = document.querySelector(".filterModal");

    console.log(filterButton, filterContainer, filterModal);

    filterButton.addEventListener("click", () => {
        filterContainer.classList.add("show");

        window.onscroll = () => {
            window.scrollTo(0, 0);
        }
    });

    filterContainer.addEventListener("click", () => {
        filterContainer.classList.remove("show");

        window.onscroll = () => {}
    });

    filterModal.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
    });
}

const initFilterModal = () => {
    const container = document.querySelector(".filterContainer");
    const modal = container.querySelector(".filterModal");

    const closeButton = document.querySelector(".filterModalHeader > button");

    closeButton.addEventListener('click', () => {
        container.classList.remove('show');
    });
}

window.onload = () => {
    initFilterButton();
    initFilterModal();
}