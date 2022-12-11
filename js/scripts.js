window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});


//form Validation
$(function () {
  //declare function 
  $.fn.activateSubmit2 = function () {
    return true;
  };
});


$(document).ready(function () {
  var name = 0;
  var mail = 0;
  var phone = 0;
  var password = 0;

  var validateEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var validatePhone = /^\d*(?:\.\d{1,2})?$/;
  var validatePassword=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  function activateSubmit() {
    if (name == 1 && mail == 1 && phone == 1 && password == 1) {
      $("#submitButton").removeClass("disabled");
    } else {
      $("#submitButton").addClass("disabled");
    }
  };


  $('#txtName').blur(function () {
    $("#error-name").fadeOut(100).hide();
    if ($.trim($(this).val()).length == 0) {
      $("#error-name").html("A name is required");
      $("#error-name").fadeIn(200).show();
      name = 0;
    } else {
      name = 1;
    }
	  activateSubmit();
  });

  $('#txtEmail').blur(function () {
    $("#error-email").fadeOut(100).hide();
    if ($.trim($(this).val()).length == 0) {
      $("#error-email").html("An email is required");
      $("#error-email").fadeIn(200).show();
      mail = 0;

    } else if (!validateEmail.test($(this).val())) {
      $("#error-email").html("This email ID is invalid");
      $("#error-email").fadeIn(200).show();
      mail = 0;
    } else {
      mail = 1;
    }
	activateSubmit();
  });

  $('#txtPhone').blur(function () {
    $("#error-phone").fadeOut(100).hide();
    if ($.trim($(this).val()).length == 0) {
      $("#error-phone").html("A phone number is required");
      $("#error-phone").fadeIn(200).show();
      phone = 0;
    } else if (!validatePhone.test($(this).val()) || $(this).val().length != 10) {
      $("#error-phone").html("This phone number is invalid");
      $("#error-phone").fadeIn(200).show();
      phone = 0;
    } else {
      phone = 1;
    }
	activateSubmit();
  });
	
  $('#txtPassword').blur(function () {
    $("#error-password").fadeOut(100).hide();
    if ($.trim($(this).val()).length == 0) {
      $("#error-password").html("A strong password is required");
      $("#error-password").fadeIn(200).show();
      password = 0;
    } else if (!validatePassword.test($(this).val())) {
      $("#error-password").html("7 to 15 characters which contain at least one numeric digit and a special character");
      $("#error-password").fadeIn(200).show();
      password = 0;
    } else {
      password = 1;
    }
	activateSubmit();
  });


});

// Submit form
$("#contactForm").submit(function(e) {

    e.preventDefault(); 

    var form = $(this);
    var actionUrl = form.attr('action');
    
    $.ajax({
        type: "POST",
        url: "get-data.php",
        data: form.serialize(), 
        success: function(data)
        {
		 $("#submitStatus").html(data);
        }
    });
    
});



