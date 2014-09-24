var renderTweets = function (tweet) {
  var posts_list = $("#posts-list")
  posts_list.append("<div class='tweet-container'></div>")
  var tweetContainer = posts_list.find(".tweet-container").last()

  tweetContainer.append("<section class='tweet-text'></section>");
  tweetContainer.find(".tweet-text").text(tweet.text);

  tweetContainer.append("<section class='tweet-username'></section>");
  tweetContainer.find(".tweet-username").html("<img src='" + tweet.profile_image_url + "' class='avatar' /> @" + tweet.screen_name);  

  tweetContainer.append("<section class='tweet-picture'></section>");
  if (tweet.media_url){
    tweetContainer.find(".tweet-picture").html("<img src='" + tweet.media_url + "' />");  
  }

  tweetContainer.append("<section class='tweet-created-at'><i class='fa fa-2x fa-"+tweet.source+"'></i>"+tweet.created_at_formatted+"</section>");
  return tweetContainer;
}

var create_post_content = function(data) {
  var bgColor = 0;
  for (var i = 0; i < data.length; i++){
    bgColor += 1;
    var obj = data[i];
    var tweetContainer = renderTweets(obj);
    tweetContainer.addClass("background-color-"+bgColor);
    if(bgColor == 4) { bgColor = 0 }
  }
    var posts_list = document.querySelector('#posts-list');
    var msnry = new Masonry(posts_list);
    imagesLoaded( posts_list, function() {
        msnry.layout();
    });
}