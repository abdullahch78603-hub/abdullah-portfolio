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
    document.body.classList.add("modal-open"); // hide header + lock scroll
}

// =============================
// CLOSE MODAL
// =============================
function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.classList.remove("modal-open"); // restore header + scroll
}

// =============================
// CLICK HANDLERS (IMAGE CARDS ONLY)
// Video cards (.video-item) are skipped on purpose — they have their
// own <video controls> and shouldn't open the image modal.
// =============================
document.querySelectorAll(".portfolio-card").forEach(card => {
    if (card.classList.contains("video-item")) return;

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
