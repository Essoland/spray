const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,

});

/*SCROLL HOME*/
sr.reveal(".scroll1", {});
sr.reveal(".scroll2", { delay: 200 });
sr.reveal(".scroll3", { origin: "left", delay: 400 });
sr.reveal(".scroll4", { origin: "right", delay: 400 });

sr.reveal(".scroll5", { origin: "right", delay: 0 });

sr.reveal(".kiri", { delay: 100 });
sr.reveal(".tengah", { delay: 300 });
sr.reveal(".kanan", { delay: 600 });