

var sidebarVisible = false;
var currentPageID = "#tm-section-1";



  // Setup Nav
  function setupNav() {
      // Add Event Listener to each Nav item
     $(".tm-main-nav a").click(function(e){
         e.preventDefault();
        
        var currentNavItem = $(this);
        
        
        setupFooter();

        // Hide the nav on mobile
        $("#tmSideBar").removeClass("show");
    });	    
  }

  

  // Setup Nav Toggle Button
  function setupNavToggle() {

    $("#tmMainNavToggle").on("click", function(){
        $(".sidebar").toggleClass("show");
    });
  }

  // If there is enough room, stick the footer at the bottom of page content.
  // If not, place it after the page content
  function setupFooter() {
      
      var padding = 10;
      var footerPadding = 4;
      var mainContent = $("section"+currentPageID);
      var mainContentHeight = mainContent.outerHeight(true);
      var footer = $(".footer-link");
      var footerHeight = footer.outerHeight(true);
      var totalPageHeight = mainContentHeight + footerHeight + footerPadding + padding;
      var windowHeight = $(window).height();		

      if(totalPageHeight > windowHeight){
          $(".tm-content").css("margin-bottom", footerHeight + footerPadding + "px");
          footer.css("bottom", footerHeight + "px");  			
      }
      else {
          $(".tm-content").css("margin-bottom", "0");
          footer.css("bottom", "20px");  				
      }  			
  }

  // Everything is loaded including images.
  $(window).on("load", function(){

      // Render the page on modern browser only.
      if(renderPage) {
        // Remove loader
          $('body').addClass('loaded');

          // Page transition
          var allPages = $(".tm-section");

          // Handle click of "Continue", which changes to next page
          // The link contains data-nav-link attribute, which holds the nav item ID
          // Nav item ID is then used to access and trigger click on the corresponding nav item
          
        
        
          


          $("#tm-section-1").fadeIn();

         // Set up background first page
         var bgImg = $("#tmNavLink1").data("bgImg");
         
         $.backstretch("img/" + bgImg, {fade: 500});

         // Setup  Nav, and Nav Toggle
        setupNav();
        setupNavToggle();
        setupFooter();

        // Resize  upon window resize
        $(window).resize(function() {
            setupFooter();
        });
      }	      	
});














