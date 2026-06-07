//ロード画面
window.addEventListener("load", () => {

    const overlay = document.getElementById("overlay");

    if (!overlay) return;

    setTimeout(() => {
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    }, 800);

});