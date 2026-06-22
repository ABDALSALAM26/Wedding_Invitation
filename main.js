const weddingDate = new Date("August 4, 2026 00:00:00");
const endWeddingDay = new Date("August 5, 2026 00:00:00");

const countdown = setInterval(() => {
    const now = new Date();

    if (now >= weddingDate && now < endWeddingDay) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("date-box").style.display = "none";

        document.getElementById("special-message").innerHTML = "✨ 𝓣𝓱𝓲𝓼 𝓓𝓪𝔂❤️ ✨";
        return;
    }

    if (now >= endWeddingDay) {
        clearInterval(countdown);

        document.getElementById("countdown").style.display = "none";
        document.getElementById("date-box").style.display = "flex";

        document.getElementById("special-message").innerHTML = "Wedding Date";

        document.getElementById("d-day").innerHTML = "04";
        document.getElementById("d-month").innerHTML = "08";
        document.getElementById("d-year").innerHTML = "2026";

        return;
    }

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);







const locationIcon = document.querySelector(".location-icon");
const locationIcon2 = document.querySelector(".location-icon2");

if(sessionStorage.getItem("hannaOpened")){
    locationIcon.classList.add("location-opened");
}

if(sessionStorage.getItem("weddingOpened")){
    locationIcon2.classList.add("location-opened");
}

if (locationIcon) {
    locationIcon.addEventListener("click", () => {

        sessionStorage.setItem("hannaOpened", "true");
        locationIcon.classList.add("location-opened");

        window.open(
            "https://www.google.com/maps?q=30.541998,31.693445",
            "_blank"
        );
    });
}


if (locationIcon2) {
    locationIcon2.addEventListener("click", () => {

        sessionStorage.setItem("weddingOpened", "true");
        locationIcon2.classList.add("location-opened");

        window.open(
            "https://www.google.com/maps?q=30.541998,31.693445",
            "_blank"
        );
    });
}

const heart = document.querySelector(".heart-icon");
 if(heart){
 heart.addEventListener("click", () => {
    if (heart.classList.contains("fa-regular")) {
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid", "liked");
    } else {
        heart.classList.remove("fa-solid", "liked");
        heart.classList.add("fa-regular");
    }
 });
}

const photos = document.querySelectorAll('.photo');
let activePhoto = null;

photos.forEach(photo => {
    photo.addEventListener('click', () => {

        if (photo === activePhoto) {
            photos.forEach(img => {
                img.style.display = 'block';
                img.classList.remove('active');
            });

            activePhoto = null;
        }

        else {
            photos.forEach(img => {
                img.style.display = (img === photo) ? 'block' : 'none';
                img.classList.remove('active');
            });

            photo.classList.add('active');
            activePhoto = photo;
        }
    });
});

const form = document.querySelector(".message-form");
const submitBtn = document.querySelector(".submit-btn");

const STORAGE_KEY = "form_submitted";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (localStorage.getItem(STORAGE_KEY)) {
        alert("This Device Send Comment Before");
        return;
    }

    const username = document.getElementById("username").value;
    const message = document.getElementById("user-message").value.replace(/\n/g, "\r\n" );

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdZYvD6iS8Fq477TywyeZVTCyQcsAPW9RMP9oVTmWDGoRvNgw/formResponse";

    const formData = new FormData();
    formData.append("entry.1656824463", username);
    formData.append("entry.1158190294", message);

    submitBtn.disabled = true;

    try {
        await fetch(formURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        localStorage.setItem(STORAGE_KEY, "true");

        form.reset();

    } catch (error) {
        console.error(error);
        alert("error");
    }

    
    submitBtn.disabled = false;
});

document.getElementById("whatsapp-icon").onclick = function () {
    window.open("https://wa.me/201201114123", "_blank");
};

