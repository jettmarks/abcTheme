
var councilMembers = {};
councilMembers["Carla Smith"] = {"streets": "Peachtree St., Lee Street, and DeKalb Ave.", "district":"1"};
councilMembers["Kwanza Hall"] = {"streets": "Peachtree St., Lee Street, and DeKalb Ave.", "district":"2"};
councilMembers["Ivory Young"] = {"streets":"Peachtree St., Moreland, and North Ave.", "district":"3"};
councilMembers["Cleta Winslow"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"4"};
councilMembers["Natalyn Archibong"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"5"};
councilMembers["Alex Wan"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"6"};
councilMembers["Howard Shook"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"7"};
councilMembers["Yolanda Adrean"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"8"};
councilMembers["Felicia Moore"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"9"};
councilMembers["CT Martin"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"10"};
councilMembers["Keisha Bottoms"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"11"};
councilMembers["Joyce Shepards"] = {"streets": "Lee St., Hank Aaron Dr., and North Ave.", "district":"12"};



$('input[name="council_member"]').on('change', function(){
    $("#email_content").text("Dear Councilmember " + $(this).val() + ", " + "\n\n" +
    "I'm a resident of District " + councilMembers[$(this).val()]["district"] +
    " and I support and I support making bike lanes a priority of the Renew Atlanta 2015 Infrastructure Bond. " +
    "I have three requests for you: \n\n 1. Please take advantage of this prime opportunity to make our streets safer " +
    "for everyone by making sure all the soon-to-be resurfaced streets become Complete Streets.\n\n 2. People on bikes " +
    "throughout the city need safe and equitable access via flat streets that connect to jobs, schools, MARTA, and other " +
    "destinations. Please add Lee Street, Peachtree Street in Midtown, the rest of DeKalb Avenue, Capitol Ave, and the Cycle Atlanta " +
    "projects to the Complete Streets project list. \n\n3. All bridges on the list need to add space for bikes - especially " +
    "Courtland Ave, in keeping with Georgia State University's plan and student needs.");
});

$( "#submit-button" ).click(function( event ) {
  if ($( "input[name='email']").val().length > 0 && $( "input[name='name']").val().length > 0) {
			console.log("name and email");
  } else {
    		console.log("no name and email");
  }
  
});

(function($,W,D)
{
    
    $("#map").hide();
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#email_form").validate({
                rules: {
                    name: "required",
                    message: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: "Please enter your name",
                    email: "Please enter your email",
                    message: "Please enter a message"
                },
                submitHandler: function(form) {
                    form.submit();
                    $('#email_form').html('<h3>Thank you! Your message has been sent</h3>').fadeIn().siblings('div').slideUp();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
    
    

})(jQuery, window, document);
//fix responsive issue
//add search form at top
//styling

//$('input[name="name"]').on('change', function(){
//    if ($("#email_content").text.length > 0) {
//        var lines = $("#email_content").val().split("\n");
//        var lastLine = lines.length -1;
//        lines[lastLine] = $(this).val();
//        var flattened = lines.reduce(function(a, b) {
//            return a.concat(b);
//        }, []);
//        flattened.concat($('input[name="name"]').val());
//        $("#email_content").text(flattened);
//    }
//});
