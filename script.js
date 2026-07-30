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
// CLOSE BUTTON (stop bubbling so it doesn't reopen)
// =============================
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
});

// =============================
// STOP CLICKS INSIDE THE BOX FROM CLOSING/REOPENING
// =============================
document.querySelector(".carousel-box").addEventListener("click", (e) => {
    e.stopPropagation();
});

// =============================
// OUTSIDE CLICK CLOSE
// =============================
modal.addEventListener("click", () => {
    closeModal();
});

// =============================
// ESC KEY CLOSE
// =============================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});
