/* --------------------------------------------------------------------------------------- */


const workItems = document.querySelectorAll('.work');

workItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    workItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.opacity = '0.5';
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    workItems.forEach(otherItem => {
      otherItem.style.opacity = '1';
    });
  });
});

/* --------------------------------------------------------------------------------------- */

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  
  //-------- When the user clicks on the button, scroll to the top of the document--------
  
  document.getElementById('back-to-top').addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  });
  