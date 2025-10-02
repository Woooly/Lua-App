        document.addEventListener("DOMContentLoaded", function () {
            const video = document.querySelector(".background-video");
            const sources = video.querySelectorAll("source");

            sources.forEach(source => {
                source.src = source.dataset.src;
        });

        video.load();
        video.play();
    });