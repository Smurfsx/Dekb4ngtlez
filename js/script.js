const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "DEKBANGTLEZ"
    }, 0);
    // setTimeout(() => {
    //     text.textContent = "DEkbangtlez"
    // }, 4000);
    // setTimeout(() => {
    //     text.textContent = "DEKbangtlez"
    // }, 8000);
}

textLoad();
setInterval(textLoad, 12000)