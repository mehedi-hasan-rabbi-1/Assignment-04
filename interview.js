const cards = document.querySelectorAll(".job-card");
const emptyState = document.getElementById("emptyState");

let count = 0;

cards.forEach((card, index) => {

    const status = localStorage.getItem("job-" + index);

    if (status !== "INTERVIEW") {
        card.style.display = "none";
    } else {
        count++;
    }

});

if (count === 0) {
    emptyState.style.display = "block";
} else {
    emptyState.style.display = "none";
}