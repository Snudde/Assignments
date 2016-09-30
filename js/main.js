
//Ni kommer ändå bara googla de här länkarna, lika bra att lägga in dem.


//Här nedanför är det lugnt att skriva kod

$( ".adtr" ).on('click', function() {
   $( ".album" ).fadeToggle("slow");
     $( ".song" ).fadeOut("slow");
     $(".bad_vibrations_container").fadeOut("slow");
     $(".wsmfy_container").fadeOut("slow");
     $(".cc_container").fadeOut("slow");
     $(".ftwhh_container").fadeOut("slow");
     $(".homesick_container").fadeOut("slow");
});




$(".adtr").hover(
  // Mouse Over
  function(){
   $(this).css('cursor','pointer');
  
});

$(".album").hover(
  // Mouse Over
  function(){
   $(this).css('cursor','pointer');
  
});








$(".song").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "gray");
});

$(".song").hover(function(){
    $(this).css("color", "gray");
    }, function(){
    $(this).css("color", "white");
});

$(".song").hover(function(){
    $(this).css("border", "2px solid gray");
});

$(".song").hover(function(){
$(this).css('cursor','pointer');
})


$( ".bad_vibrations" ).on('click', function() {
   $(".bad_vibrations_container").fadeToggle("slow");
   $( ".bad_vib_1" ).fadeToggle("slow");
   $( ".bad_vib_2" ).fadeToggle("slow");
   $( ".bad_vib_3" ).fadeToggle("slow");
   $( ".bad_vib_4" ).fadeToggle("slow");
   $( ".bad_vib_5" ).fadeToggle("slow");
   $( ".bad_vib_6" ).fadeToggle("slow");
   $( ".bad_vib_7" ).fadeToggle("slow");
   $( ".bad_vib_8" ).fadeToggle("slow");
   $( ".bad_vib_9" ).fadeToggle("slow");
   $( ".bad_vib_10" ).fadeToggle("slow");
   $( ".bad_vib_11" ).fadeToggle("slow");
   $( ".bad_vib_12" ).fadeToggle("slow");
   $( ".bad_vib_13" ).fadeToggle("slow");
});

$(".bad_vibrations").hover(
  // Mouse Over
  function(){
    $(this).animate({width: 120,height: 100}, 200);
  },
  // Mouse Out
  function(){
      $(this).animate({width: 100,height: 80}, 200);
});

$(".bad_vibrations").hover(
  // Mouse Over
  function(){
     $('#bvtext').text("Bad Vibrations");
  },
  // Mouse Out
  function(){
       $('#bvtext').text("");
});



$( ".bad_vib_1" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4iUFYqWo9l1BpOZAHsR7zf" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_2" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3HhaSocKwTptze7PySNZlW" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_3" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2RgUp8wGi8bpELvHJpRDWD" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_4" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4NTXBPFmZIB2KcTQ6DIVC0" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_5" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1wxatjgEEte0f0XrP1HXAj" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_6" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A48vkclgG3Fmbvrln1RqtDh" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_7" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1n0kky8rXeLrPx1y0cPT2o" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_8" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6SRMpCmXRkpdF9fTxHUd0w" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_9" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1XIps6jwikt2WSLHdPfAaM" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_10" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_11" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3mB1IHTguT3ozqtuHnSh1n" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_12" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3TIcp0jPXDzopMjSiQv2ot" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".bad_vib_13" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2aisqTM9SHI9OzZrHv2scp" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});




$( ".homesick" ).on('click', function() {
   $(".homesick_container").fadeToggle("slow");
   $( ".homesick_1" ).fadeToggle("slow");
   $( ".homesick_2" ).fadeToggle("slow");
   $( ".homesick_3" ).fadeToggle("slow");
   $( ".homesick_4" ).fadeToggle("slow");
   $( ".homesick_5" ).fadeToggle("slow");
   $( ".homesick_6" ).fadeToggle("slow");
   $( ".homesick_7" ).fadeToggle("slow");
   $( ".homesick_8" ).fadeToggle("slow");
   $( ".homesick_9" ).fadeToggle("slow");
   $( ".homesick_10" ).fadeToggle("slow");
   $( ".homesick_11" ).fadeToggle("slow");
   $( ".homesick_12" ).fadeToggle("slow");
 
});


$(".homesick").hover(
  // Mouse Over
  function(){
    $(this).animate({width: 120,height: 100}, 200);
  },
  // Mouse Out
  function(){
      $(this).animate({width: 100,height: 80}, 200);
});

$(".homesick").hover(
  // Mouse Over
  function(){
     $('#hstext').text("Homesick");
  },
  // Mouse Out
  function(){
       $('#hstext').text("");
});

$( ".homesick_1" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4iUFYqWo9l1BpOZAHsR7zf" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_2" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3HhaSocKwTptze7PySNZlW" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_3" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2RgUp8wGi8bpELvHJpRDWD" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_4" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4NTXBPFmZIB2KcTQ6DIVC0" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_5" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1wxatjgEEte0f0XrP1HXAj" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_6" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A48vkclgG3Fmbvrln1RqtDh" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_7" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1n0kky8rXeLrPx1y0cPT2o" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_8" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6SRMpCmXRkpdF9fTxHUd0w" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_9" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1XIps6jwikt2WSLHdPfAaM" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_10" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_11" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3mB1IHTguT3ozqtuHnSh1n" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".homesick_12" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3TIcp0jPXDzopMjSiQv2ot" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});




$( ".wsmfy" ).on('click', function() {
   $(".wsmfy_container").fadeToggle("slow");
   $( ".wsmfy_1" ).fadeToggle("slow");
   $( ".wsmfy_2" ).fadeToggle("slow");
   $( ".wsmfy_3" ).fadeToggle("slow");
   $( ".wsmfy_4" ).fadeToggle("slow");
   $( ".wsmfy_5" ).fadeToggle("slow");
   $( ".wsmfy_6" ).fadeToggle("slow");
   $( ".wsmfy_7" ).fadeToggle("slow");
   $( ".wsmfy_8" ).fadeToggle("slow");
   $( ".wsmfy_9" ).fadeToggle("slow");
   $( ".wsmfy_10" ).fadeToggle("slow");
 
});


$(".wsmfy").hover(
  // Mouse Over
  function(){
    $(this).animate({width: 120,height: 100}, 200);
  },
  // Mouse Out
  function(){
      $(this).animate({width: 100,height: 80}, 200);
});

$(".wsmfy").hover(
  // Mouse Over
  function(){
     $('#wsmfytext').text("What Separates Me From You");
  },
  // Mouse Out
  function(){
       $('#wsmfytext').text("");
});

$( ".wsmfy_1" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4iUFYqWo9l1BpOZAHsR7zf" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_2" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3HhaSocKwTptze7PySNZlW" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_3" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2RgUp8wGi8bpELvHJpRDWD" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_4" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4NTXBPFmZIB2KcTQ6DIVC0" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_5" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1wxatjgEEte0f0XrP1HXAj" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_6" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A48vkclgG3Fmbvrln1RqtDh" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_7" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1n0kky8rXeLrPx1y0cPT2o" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_8" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6SRMpCmXRkpdF9fTxHUd0w" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_9" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1XIps6jwikt2WSLHdPfAaM" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".wsmfy_10" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});



$( ".cc" ).on('click', function() {
   $(".cc_container").fadeToggle("slow");
   $( ".cc_1" ).fadeToggle("slow");
   $( ".cc_2" ).fadeToggle("slow");
   $( ".cc_3" ).fadeToggle("slow");
   $( ".cc_4" ).fadeToggle("slow");
   $( ".cc_5" ).fadeToggle("slow");
   $( ".cc_6" ).fadeToggle("slow");
   $( ".cc_7" ).fadeToggle("slow");
   $( ".cc_8" ).fadeToggle("slow");
   $( ".cc_9" ).fadeToggle("slow");
   $( ".cc_10" ).fadeToggle("slow");
   $( ".cc_11" ).fadeToggle("slow");
   $( ".cc_12" ).fadeToggle("slow");
   $( ".cc_13" ).fadeToggle("slow");
   $( ".cc_14" ).fadeToggle("slow");
   $( ".cc_15" ).fadeToggle("slow");
   $( ".cc_16" ).fadeToggle("slow");
   
 
});

$(".cc").hover(
  // Mouse Over
  function(){
    $(this).animate({width: 120,height: 100}, 200);
  },
  // Mouse Out
  function(){
      $(this).animate({width: 100,height: 80}, 200);
});

$(".cc").hover(
  // Mouse Over
  function(){
     $('#cctext').text("Common Courtesy");
  },
  // Mouse Out
  function(){
       $('#cctext').text("");
});

$( ".cc_1" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1LKScCsG356DT8nzrBoSiw" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_2" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0OQmxZOINqWsbKysfiPSTO" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_3" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5rDPm1vZz9YD4Eu86GS6E6" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_4" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A7AkHPytVBykhcnVFMKgsAR" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_5" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0td6n7lIccGyYKgnWBGUvD" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_6" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6A4FCCugA1IvfCD0flEnzr" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_7" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4MxzupiYCSCp0ld7Ojo8Hv" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_8" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2ZsyiMM5KRLZwyy0LCu5iR" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_9" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A79n8VyEQW9qwN1gIvcgK2A" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_10" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0oCbufslImiZ4YmpvT7zco" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_11" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5nXwGh9Ya2VbPPp5w28nLb" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_12" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0TCC3hyjFm6aQ7T98pzycc" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_13" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4ytywdXHz0EZ4S8eY8jhZW" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_14" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0dFsNvz1D17kysz0trTqwu" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_15" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A14gsJ2n8m2UWqUHLTI3fZn" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".cc_16" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3Ejg9kHDlXEhi4h0sMagfy" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});



$( ".ftwhh" ).on('click', function() {
   $(".ftwhh_container").fadeToggle("slow");
   $( ".ftwhh_1" ).fadeToggle("slow");
   $( ".ftwhh_2" ).fadeToggle("slow");
   $( ".ftwhh_3" ).fadeToggle("slow");
   $( ".ftwhh_4" ).fadeToggle("slow");
   $( ".ftwhh_5" ).fadeToggle("slow");
   $( ".ftwhh_6" ).fadeToggle("slow");
   $( ".ftwhh_7" ).fadeToggle("slow");
   $( ".ftwhh_8" ).fadeToggle("slow");
   $( ".ftwhh_9" ).fadeToggle("slow");
   $( ".ftwhh_10" ).fadeToggle("slow");
   $( ".ftwhh_11" ).fadeToggle("slow");
   $( ".ftwhh_12" ).fadeToggle("slow");
   $( ".ftwhh_13" ).fadeToggle("slow");
   $( ".ftwhh_14" ).fadeToggle("slow");
   $( ".ftwhh_15" ).fadeToggle("slow");
   $( ".ftwhh_16" ).fadeToggle("slow");
   
 
});

$(".ftwhh").hover(
  // Mouse Over
  function(){
    $(this).animate({width: 120,height: 100}, 200);
  },
  // Mouse Out
  function(){
      $(this).animate({width: 100,height: 80}, 200);
});

$(".ftwhh").hover(
  // Mouse Over
  function(){
     $('#ftwhhtext').text("For Those Who Have Heart");
  },
  // Mouse Out
  function(){
       $('#ftwhhtext').text("");
});

$( ".ftwhh_1" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4iUFYqWo9l1BpOZAHsR7zf" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_2" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3HhaSocKwTptze7PySNZlW" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_3" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A2RgUp8wGi8bpELvHJpRDWD" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_4" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4NTXBPFmZIB2KcTQ6DIVC0" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_5" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1wxatjgEEte0f0XrP1HXAj" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_6" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A48vkclgG3Fmbvrln1RqtDh" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_7" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1n0kky8rXeLrPx1y0cPT2o" width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_8" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A6SRMpCmXRkpdF9fTxHUd0w" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_9" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A1XIps6jwikt2WSLHdPfAaM" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_10" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});
$( ".ftwhh_11" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});

$( ".ftwhh_12" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});

$( ".ftwhh_13" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});

$( ".ftwhh_14" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});

$( ".ftwhh_15" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});

$( ".ftwhh_16" ).on('click', function() {
  $( ".player :first" ).replaceWith( '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A5Aioyy2Ar0cvuCy9wtsfiO" width="100%" height="100% frameborder="0" allowtransparency="true"></iframe>' );
});











