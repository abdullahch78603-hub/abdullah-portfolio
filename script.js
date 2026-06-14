// =============================
// MODAL ELEMENTS
// =============================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");

// =============================
// OPEN MODAL
// =============================
function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

// =============================
// CLOSE MODAL
// =============================
function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
}

// =============================
// CLICK HANDLERS (ALL IMAGES)
// =============================
document.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        if (!img) return;

        openModal(img.src);
    });
});

// =============================
// CLOSE BUTTON
// =============================
closeBtn.addEventListener("click", closeModal);

// =============================
// OUTSIDE CLICK CLOSE
// =============================
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// =============================
// ESC KEY CLOSE
// =============================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});