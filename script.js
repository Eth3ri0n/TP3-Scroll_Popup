// Créer un événement au scroll
// let scroll_Nav = 0;
// window.addEventListener("scroll", () => {
//   console.log(scroll_Nav);

//   if (window.scrollY > scroll_Nav) {
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
// navbar.style.height = "45px";

// imgImprovise.style.opacity = '1';
// imgImprovise.style.transform = 'translateX(0)';

// popup.style.opacity = '1';
// popup.style.transform = 'translateX(0)';

// } else {
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
// navbar.style.height = "90px";

// Faire apparaitre l'image de la partie improvise
// imgImprovise.style.opacity = '0';
// imgImprovise.style.transform = 'translateX(-200px)';

// Faire apparaitre la popup quand on est en bas du site
// popup.style.opacity = '0';
// popup.style.transform = 'translateX(400px)';
//   }

//   scroll_Nav = window.scrollY;
// });

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let popUpOnce = true;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 40) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

// ! --------------Img---------------
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue >= 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0)";
  }
  //   else {
  //     imgImprovise.style.opacity = 0;
  //     imgImprovise.style.transform = "translateX(-200px)";
  //   }

  // ! ---------PopUp-------------
  if (scrollValue >= 0.8 && popUpOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0)";
    popUpOnce = false;
  }
  //   else {
  //     popup.style.opacity = 0;
  //     popup.style.transform = 'translateX(400px)';
  //   }
});

// ! ---------------Close PopUp----------------
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});
