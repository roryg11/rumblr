$(document).ready(function(){
  $('input[type ="submit"]').on('click', function(event){
    event.preventDefault();
    var newImageUrl = $('#post_image_url').val();
    var newCaption = $('#post_caption').val();
    var newUsername = $('#post_username').val();
    $.ajax('/posts',
      {type: 'post',
      data: {
        post: {
          image_url: newImageUrl,
          caption: newCaption,
          username: newUsername,
        }
      }
    }).done(function(data){
      $('ul').prepend("<li><img src =" + newImageUrl +"></li>");
      $('ul').prepend("<li>" + newCaption + "</li>");
      $('ul').prepend("<li>" + newUsername + "</li>");
    }).fail(function(data){
      console.log("IT FAILED!")
    })
  });
});
