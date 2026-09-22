document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");

    if (!loader) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("loader-hidden");

            setTimeout(() => {
                loader.remove();
            }, 600);

        }, 500);
    });
});