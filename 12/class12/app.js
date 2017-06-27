/*
1. Add a button to the page that when clicked, uses the
browsers current location for searching 500px and loads the photos.

2. Add an input box for a user to type in a latitude and longitude
in the format of "42.0,42.0" and use that to search 500px and display
the photos

3. When the photos are being loaded (they have not loaded yet),
display a "Loading..." somewhere on the page that disappears
when the photos have loaded.

Also!

* Send in a paragraph or so of what your final project is going to be
via Slack but also via email.

Due: EOD Sat 24th, 11:59pm

*/


$(function() {
  // DOM is now ready


  _500px.init({
    // this is setting up the OAuth2
    //user the JavaScript SDK Key from 500px
    sdk_key: '9a744cb7203e440feb033ca4e32284fd50972925'
  });


  $('#login').click(function(){
    _500px.login();
    $('#location-button').show();
    $('#manualLocation').show();
  });

  _500px.on('authorization_obtained', function(){
    console.log("Authorized Successfully!");
    $('#login').hide();

    $('#location-button').on('click', function(){
        $('#location-button').hide();

        //get browsers current location.
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos)

      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;

      var searchOptions = {
          geo: lat + ','+ long + ',' + '25mi',
          only:'Landscapes',
          image_size: 3,
          rpp: 28,
          sort: 'highest_rating'
      };
      console.log(searchOptions);

      _500px.api('/photos/search', searchOptions, function(resp){
          $('.image-results-view').show();

          var photos = resp.data.photos;
          for(var i = 0; i < photos.length; i++){
              var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
              $('.images').append(newImg);
          }

        });
      });


    });
       console.log("manual location button")
    $('#get-pic').on('click', function(event){
    //    var loading = $('#loading-marquee');
    // loading.hide();

    //     loading.show();
    //     event.preventDefault();

        var long = $('#longitude').val();
        var lati = $('#lattitude').val();
        console.log(long, lati);

              var searchOptions = {
          geo: lati + ','+ long + ',' + '25mi',
          only:'Landscapes',
          image_size: 3,
          rpp: 28,
          sort: 'highest_rating'

      };
      console.log(searchOptions);

      _500px.api('/photos/search', searchOptions, function(resp){
          $('.image-results-view').show();

          var photos = resp.data.photos;
          for(var i = 0; i < photos.length; i++){
              var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
              $('.images').append(newImg);
          }

        });


    })

  });
});
