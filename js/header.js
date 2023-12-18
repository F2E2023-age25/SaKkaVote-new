const headerLogo = document.querySelector(".headerLogo");
const smallIcon = document.querySelector(".smallIcon");
const bigIcon = document.querySelector(".bigIcon");
const shareIcon = document.querySelector(".shareIcon");

headerLogo.addEventListener("mouseenter", () => {
  headerLogo.src = "images/00_header/LOGO2_hover.png";
});
headerLogo.addEventListener("mouseout", () => {
  headerLogo.src = "images/00_header/LOGO2.png";
});

smallIcon.addEventListener("mouseenter", () => {
  smallIcon.src = "../images/00_header/small_hover.png";
});
smallIcon.addEventListener("mouseout", () => {
  smallIcon.src = "../images/00_header/small.png";
});

bigIcon.addEventListener("mouseenter", () => {
  bigIcon.src = "../images/00_header/big_hover.png";
});
bigIcon.addEventListener("mouseout", () => {
  bigIcon.src = "../images/00_header/big.png";
});

shareIcon.addEventListener("mouseenter", () => {
  shareIcon.src = "../images/00_header/share_hover.png";
});
shareIcon.addEventListener("mouseout", () => {
  shareIcon.src = "../images/00_header/share.png";
});

const share = document.querySelector(".share");
const socialSoftware = document.querySelector(".img-btn");
console.log(socialSoftware);

shareIcon.addEventListener("click", () => {
  share.classList.remove("share-animation-back");
  share.classList.add("share-animation");
});

// socialSoftware.addEventListener("click", () => {
//   share.classList.remove("share-animation");
//   share.classList.add("share-animation-back");
// })

function icon_Click() {
  share.classList.remove("share-animation");
  share.classList.add("share-animation-back");
}
