document.addEventListener("DOMContentLoaded", function () {
    const leafCount = 10; 
    const leafContainer = document.querySelector(".falling-leaves-container");

    for (let i = 0; i < leafCount; i++) {
        let leaf = document.createElement("div");
        leaf.classList.add("leaf");
        leaf.style.left = Math.random() * 100 + "vw";
        let fallDuration = Math.random() * 5 + 5;
        let fallDelay = Math.random() * 5;
        leaf.style.animationDuration = fallDuration + "s";
        leaf.style.animationDelay = fallDelay + "s";
        leafContainer.appendChild(leaf);
    }
});
