/* ==================================================
   ABDI.COM
   Main JavaScript
   ================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ---------- MOBILE MENU ---------- */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

        });


        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

            });

        });

    }


    /* ---------- DARK MODE ---------- */

    const themeToggle = document.getElementById("themeToggle");


    if (themeToggle) {

        const savedTheme = localStorage.getItem("abdi-theme");


        if (savedTheme === "dark") {

            document.body.classList.add("dark");

        }


        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark");


            if (document.body.classList.contains("dark")) {

                localStorage.setItem("abdi-theme", "dark");

            } else {

                localStorage.setItem("abdi-theme", "light");

            }

        });

    }


    /* ---------- CURRENT YEAR ---------- */

    const year = document.getElementById("year");


    if (year) {

        year.textContent = new Date().getFullYear();

    }


});
