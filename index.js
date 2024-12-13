// <!-- ----------------------------------About tabs-------------------------------- -->





    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for( tabLink of tabLinks){
            tabLink.classList.remove("active-link");
        }
        for( tabContent of tabContents){
            tabContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");

        document.getElementById(tabname).classList.add("active-tab");
    }




// <!-- ------------------------------nav bar side menu------------------------ -->


    var sidemenu= document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }


// <!-- --------------------------------contact form data sheet-------------------------- -->

    const scriptURL = 'https://script.google.com/macros/s/AKfycby4av3Thjz2f_z0rtyYcEhZkT-_4Dc6CK5e-sFk5PhAkCcREA8kmmjvAFIn1rieJ0NR/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent sucessfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000) 
            form.reset()
            })
        .catch(error => console.error('Error!', error.message))
    })



// <!-- ---------------------------Show more projects----------------------------- -->
 
    function toggleProjects() {
var moreProjects = document.getElementById("more-projects");
var moreBtn = document.getElementById("more-btn");

if (moreProjects.style.display === "none") {
    moreProjects.style.display = "block";  // Show the hidden projects
    moreProjects.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to reveal the new content
    moreBtn.textContent = "Show Less Projects";  // Change button text
} else {
    moreProjects.style.display = "none";  // Hide the additional projects
    moreBtn.textContent = "Show More Projects";  // Reset button text
} 
}

 
// <!-- <script>
//  document.getElementById('more-btn').addEventListener('click', () => {
// const extendedContent = document.getElementById('more-projects');
// const currentScrollPosition = window.scrollY;
// const targetScrollPosition = currentScrollPosition + extendedContent.offsetTop;

// window.scrollTo({
//   top: targetScrollPosition,
//   behavior: 'smooth',
//   scr
// });
// });
// </script> -->
   



// function toggleProjects() {
// var moreProjects = document.getElementById("more-projects");
// var moreBtn = document.getElementById("more-btn");

// if (moreProjects.style.display === "none") {
//     moreProjects.style.display = "block"; // Show the hidden projects
//     moreProjects.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to reveal the new content
//     moreBtn.textContent = "Show Less Projects"; // Change button text
// } else {
//     moreProjects.style.display = "none"; // Hide the additional projects
//     document.getElementById("project1").scrollIntoView({ behavior: "smooth" }); // Smooth scroll back to the top project
//     moreBtn.textContent = "Show More Projects"; // Reset button text
// }
// }