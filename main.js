const waving_emoji = document.getElementById("waving-emoji")
const mouseEnter = () => {
    console.log("mouseenter!!!")
    waving_emoji.innerHTML = "<img class='waving-emoji-gif' src='https://blog.joypixels.com/content/images/2019/06/waving_hand_sign_1024.gif' alt='waving gif'>"
}
const mouseExit = () => {
    console.log("mouseexit :(((((")
    waving_emoji.innerHTML = "👋"
}