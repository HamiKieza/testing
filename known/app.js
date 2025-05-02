var query = window.matchMedia("(min-width: 768px)");

// Typing the header of homepage
var i1 = 0;
var i2 = 0;
var i3 = 0;
var txt1 = "What if we could recycle plastic waste into something useful?     ";
var txt2 = "      food?";
var speed = 50;
const delete_len = 22;
const type = () => {
  const type_elem = document.getElementById("reflect-text");
  const head_img = document.getElementById("head-img");
  if (type_elem && head_img) {
    function typeWriter() {
      if (i1 < txt1.length) {
        type_elem.innerHTML += txt1.charAt(i1);
        i1++;
      }
      if (i1 == txt1.length && i2 < delete_len) {
        type_elem.innerHTML = type_elem.innerHTML.slice(0, -1);
        i2++;
      }
      if (i2 == delete_len && i3 < txt2.length) {
        type_elem.innerHTML += txt2.charAt(i3);
        i3++;
      }
      setTimeout(typeWriter, speed);
    }
    typeWriter();
  }
};

var head_img = document.querySelector("#head-img");
if (head_img) {
  var navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "black";
  if (head_img.complete) {
    type();
  } else {
    // head_img.addEventListener("canplay", type, false);
    head_img.addEventListener("load", type, false);
  }
  var dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach((i) => {
    i.style.backgroundColor = "black";
  });
}

// Number increment on homepage
const totalTime = 2000;
const num1 = 300;
const num2 = 100;
const num3 = 2000;
var called1 = false;
var called2 = false;
var called3 = false;

const increment1 = () => {
  const num = document.querySelector("#num1");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num1) {
      num.innerHTML = String(i + 4);
      setTimeout(increment1, totalTime / (num1 / 2));
    }
  }
};
const increment2 = () => {
  const num = document.querySelector("#num2");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num2) {
      num.innerHTML = String(i + 1);
      setTimeout(increment2, totalTime / (num2 * 1.2));
    }
  }
};
const increment3 = () => {
  const num = document.querySelector("#num3");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num3) {
      num.innerHTML = String(i + 2);
      setTimeout(increment3, totalTime / (num3 / 1.5));
    }
  }
};

const callback = () => {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const num3 = document.querySelector("#num3");
  if (num1 && num1.getBoundingClientRect().bottom < screen_h && !called1) {
    increment1();
    called1 = true;
  }
  if (num2 && num2.getBoundingClientRect().bottom < screen_h && !called2) {
    increment2();
    called2 = true;
  }
  if (num3 && num3.getBoundingClientRect().bottom < screen_h && !called3) {
    increment3();
    called3 = true;
  }
};

document.addEventListener("scroll", callback);

const scale = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("scaleToNormal");
    } else {
      e.target.classList.remove("scaleToNormal");
    }
  });
};
const scaleNormalObserver = new IntersectionObserver(scale);
const numbers = document.querySelectorAll(".problem-im-text");
if (numbers) {
  numbers.forEach((n) => scaleNormalObserver.observe(n));
}

const screen_h = window.innerHeight;
const vh = screen_h / 100;
const vw = window.innerWidth / 100;

// Fall to flask animation
const pieces = document.querySelector("#plastic");
const tpaeg = document.querySelector("#tpaeg");
const flask = document.querySelector("#flask");
const cog = document.querySelector("#cog");

const fall_to_flask = (e) => {
  const bottom = cog.getBoundingClientRect().bottom;
  const scrolled = screen_h - bottom;
  const avail = 10 * vh;
  const acc = (1 - 0.15) / avail;
  const avail1 = 16 * vh;
  const pieces_scale =
    1 - scrolled * acc > 0 ? Math.min(1 - scrolled * acc, 1) : 0;
  pieces.style.scale = pieces_scale;
  if (scrolled > avail && scrolled <= avail + avail1) {
    var rotate_acc;
    if (scrolled <= avail + avail1 / 4) {
      rotate_acc = -10 / (avail1 / 4);
      flask.style.rotate = (scrolled - avail) * rotate_acc + "deg";
    } else if (scrolled <= avail + (avail1 * 3) / 4) {
      rotate_acc = 20 / (avail1 / 2);
      flask.style.rotate =
        -10 + (scrolled - (avail + avail1 / 4)) * rotate_acc + "deg";
    } else {
      rotate_acc = -10 / (avail1 / 4);
      flask.style.rotate =
        10 + (scrolled - (avail + (avail1 * 3) / 4)) * rotate_acc + "deg";
    }
  } else {
    flask.style.rotate = "0deg";
  }
  if (scrolled > avail + avail1) {
    const tpaeg_scale = Math.min((scrolled - (avail + avail1)) * acc + 0.15, 1);
    tpaeg.style.scale = tpaeg_scale;
  } else {
    tpaeg.style.scale = 0.15;
  }
};

if (pieces && tpaeg && flask && cog) {
  document.addEventListener("scroll", fall_to_flask);
}

// Cultivate bacteria animation
const bacteria_a = document.querySelector("#bact-after");
const tpa_eg = document.querySelector("#tpa-eg");
const protein = document.querySelector("#protein");
const cultivate = (e) => {
  const bottom = tpa_eg.getBoundingClientRect().bottom;
  const scrolled = screen_h - bottom;
  const avail = 12 * vh;
  const acc = 1 / avail;
  const opa = 1 - acc * scrolled;
  tpa_eg.style.opacity = opa > 0 ? Math.min(opa, 1) : 0;
  const opa_bact = (scrolled - avail) * acc;
  bacteria_a.style.opacity = opa_bact > 0 ? Math.min(opa_bact, 1) : 0;
  const opa_prt = (scrolled - avail * 2) * acc;
  protein.style.opacity = opa_prt > 0 ? Math.min(opa_prt, 1) : 0;
};
if (bacteria_a && tpa_eg && protein) {
  document.addEventListener("scroll", cultivate);
}

// Fade in animation
const observerFadeIn = new IntersectionObserver(
  (items) => {
    items.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("fade-in");
      } else {
        i.target.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: 1,
  }
);

const fadeInItems = document.querySelectorAll(".to-fade-in");
fadeInItems.forEach((i) => {
  observerFadeIn.observe(i);
});

const observerFadeInFast = new IntersectionObserver(
  (items) => {
    items.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("fade-in");
      } else {
        i.target.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const fadeInFastItems = document.querySelectorAll(".to-fade-in-fast");
fadeInFastItems.forEach((i) => {
  observerFadeInFast.observe(i);
});

// Slide in observer

const observerSlideIn = new IntersectionObserver(
  (entries) => {
    entries.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("slide-in");
        // } else {
        //   i.target.classList.remove("slide-in");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
const toSlideLeft = document.querySelectorAll(".to-slide-left");
const toSlideRight = document.querySelectorAll(".to-slide-right");
if (toSlideLeft) {
  toSlideLeft.forEach((i) => {
    observerSlideIn.observe(i);
  });
}
if (toSlideRight) {
  toSlideRight.forEach((i) => {
    observerSlideIn.observe(i);
  });
}

// Table of content and scroll to section

const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
const tocsections = document.querySelectorAll(".toc-section");
const toclinks = document.querySelectorAll(".toc");
const scrollToSec = () => {
  tocsections.forEach((s) => {
    const scroll = scrollY + 200;
    const offset = s.offsetTop;
    const height = s.offsetHeight;
    if (scroll > offset && scroll < offset + height) {
      toclinks.forEach((l) => {
        if (l.getAttribute("href").includes(s.getAttribute("id"))) {
          l.classList.add("sidenav-active");
        } else {
          l.classList.remove("sidenav-active");
        }
      });
    }
  });
};
const clickScroll = (e) => {
  e.preventDefault();
  const link = e.target;
  const item = document.querySelector(link.getAttribute("href"));
  const height = item.offsetTop;
  window.scroll(0, height - 150);
};
if (tocsections && toclinks) {
  scrollToSec();
  document.addEventListener("scroll", scrollToSec);
  toclinks.forEach((l) => {
    l.addEventListener("click", clickScroll);
  });
}
const progressbar = document.querySelector("#progressbar");
const progressBar = () => {
  const percentage = (scrollY / (scrollHeight - clientHeight)) * 100;
  progressbar.style.width = percentage + "%";
};
document.addEventListener("scroll", progressBar);

// Drop down week notebook
// const week_titles = document.querySelectorAll(".week-title");
// if (week_titles) {
//   week_titles.forEach((t) => {
//     t.addEventListener("click", () => {
//       const week_wrap = t.parentElement;
//       const week_text = week_wrap.querySelector(".week-text-wrap");
//       const icon = week_wrap.querySelector("i");
//       if (week_text.style.display == "block") {
//         week_text.style.display = "none";
//         icon.style.rotate = "0deg";
//       } else {
//         week_text.style.display = "block";
//         icon.style.rotate = "90deg";
//       }
//     });
//   });
// }

var toc_pages = document.querySelectorAll(".toc-page");
if (toc_pages) {
  toc_pages.forEach((t) =>
    t.addEventListener("click", (e) => {
      e.preventDefault();
      toc_pages.forEach((p) => {
        p.classList.remove("is-active");
      });
      t.classList.add("is-active");
      var href = t.getAttribute("href");
      var sections = document.querySelectorAll(".toc-section");
      sections.forEach((s) => {
        var id = s.getAttribute("id");
        if (!href.includes(id)) {
          s.style.display = "none";
        } else {
          s.style.display = "flex";
          const height = s.offsetTop;
          window.scroll(0, height - 150);
        }
      });
    })
  );
}

var nav_buttons = document.querySelectorAll(".nav-button");
if (nav_buttons) {
  nav_buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      var target_id = b.getAttribute("go-to");
      var sections = document.querySelectorAll(".toc-section");
      sections.forEach((s) => {
        var id = s.getAttribute("id");
        if (id != target_id) {
          s.style.display = "none";
        } else {
          s.style.display = "flex";
          const height = s.offsetTop;
          window.scroll(0, height - 150);
        }
      });
      var toc_pages = document.querySelectorAll(".toc-page");
      toc_pages.forEach((t) => {
        var href = t.getAttribute("href");
        if (!href.includes(target_id)) {
          t.classList.remove("is-active");
        } else {
          t.classList.add("is-active");
        }
      });
    });
  });
}
