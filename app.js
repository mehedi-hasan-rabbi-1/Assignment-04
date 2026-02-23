// Select all cards
const cards = document.querySelectorAll(".job-card");

// Dashboard counters
const totalCount = document.querySelector(".text-blue-600");
const interviewCount = document.querySelector(".text-green-600");
const rejectedCount = document.querySelector(".text-red-600");

function updateDashboard() {
    const total = document.querySelectorAll(".job-card").length;
    const interview = document.querySelectorAll(".status-interview").length;
    const rejected = document.querySelectorAll(".status-rejected").length;

    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}

// Load saved data
cards.forEach((card, index) => {

    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");
    const deleteBtn = card.querySelector(".delete-btn");
    const badge = card.querySelector(".status-badge");

    const savedStatus = localStorage.getItem("job-" + index);

    if (savedStatus === "INTERVIEW") {
        setInterview(badge);
    }

    if (savedStatus === "REJECTED") {
        setRejected(badge);
    }

    // Interview click
    interviewBtn.addEventListener("click", () => {
        setInterview(badge);
        localStorage.setItem("job-" + index, "INTERVIEW");
        updateDashboard();
    });

    // Rejected click
    rejectedBtn.addEventListener("click", () => {
        setRejected(badge);
        localStorage.setItem("job-" + index, "REJECTED");
        updateDashboard();
    });

    // Delete click
    deleteBtn.addEventListener("click", () => {
        localStorage.removeItem("job-" + index);
        card.remove();
        updateDashboard();
    });

});

function setInterview(badge) {
    badge.innerText = "INTERVIEW";
    badge.className = "status-badge status-interview inline-block mt-3 px-3 py-1 text-xs font-semibold rounded bg-green-100 text-green-700";
}

function setRejected(badge) {
    badge.innerText = "REJECTED";
    badge.className = "status-badge status-rejected inline-block mt-3 px-3 py-1 text-xs font-semibold rounded bg-red-100 text-red-700";
}

// Initial load
updateDashboard();