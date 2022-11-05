function templateUsers(element, i) {
    return /*html*/ `
        <div class="my_profile">
        <div class="d-flex">
          <img class="img_profile" src="${element['image']}">
          <div >
            <p class="margin_5"><b>${element['user']}</b></p>
            <p class="margin_5 font_smaller">${element['sub_title']}</p>
          </div>
        </div>
        <button onclick="changeFollowBtn('follow_button${i}')" id='follow_button${i}'>Folgen</button>
      </div>
        `;
    }


function templatePosts(element, i){
    return /*html*/ `
    <div class="post_block">
        <div class="d-flex-b padding_10">
            <div class="d-flex">
                <img class="img_profile " src="${element['profile_image']}">
                <div >
                    <p class="margin_5 padding_left"><b>${element['user']}</b></p>
                    <p class="margin_5 padding_left">${element['location']}</p>
                </div>
            </div>
            <p class="pointer">...</p>
        </div>

        <img class="img_post" src="${element['image']}">

        <div class="d-flex-b padding_10">
            <div>              
                <img onclick="change('heart${i}', 'heartBlack${i}'); addLikeNumber(${i}, 'likes${i}')" id='heart${i}' class="icons_heart pointer" src="img/icons_heart_20px.png">
                <img onclick="change('heartBlack${i}', 'heart${i}'); removeLikeNumber(${i}, 'likes${i}')" id='heartBlack${i}' class="icons_heart_black pointer d-none" src="img/icons_heart_black.png">
                <img class="pointer" src="img/icons_comment.png">
                <img class="pointer" src="img/icons-send_20px.png">
            </div>
            <img onclick="change('bookmark_empty${i}', 'bookmark_black${i}')" id='bookmark_empty${i}' class="icons_bookmark_empty pointer" src="img/icons_bookmark_empty.png">
            <img onclick="change('bookmark_black${i}', 'bookmark_empty${i}')" id='bookmark_black${i}' class="icons_bookmark_black pointer d-none" src="img/icons_bookmark_black.png">
        </div>

        <div class="post_text padding_10">
            <span id='likes${i}' class="padding_bottom"><b>Gefällt ${element['likes_number']} mal</b></span>
            <span class="padding_bottom"><b>${element['user']}</b> ${element['user_comment']}</span>
            <div class="padding_bottom">
                <a href="#">${element['hashtag1']}</a>
                <a href="#">${element['hashtag2']}</a>
                <a href="#">${element['hashtag3']}</a>
                <a href="#">${element['hashtag4']}</a>
            </div>
            <span class="padding_bottom">${element['date']}</span>
            <div id='comments${i}'></div>
        </div>
        <form onsubmit="renderComment(${i}); return false;"  class="d-flex-b padding_10" >
            <div class="d-flex">
                <img class="icons_post pointer" src="img/icons_smiley.png">
                <input class="comment_Post" required id='inputComment${i}' type="text" placeholder="Kommentieren...">
            </div>
            <div class="d-flex flex_dc">
                <button> <b>Posten</b></button>
                <button onclick="deleteComments(${i})"><b>Löschen</b></button>    
            </div>      
        </form>
    </div>
        `;
}

function templateComment(comment, j, i){
    
    document.getElementById(`comments${i}`).innerHTML += `

    <p id='myComment${j}'><b>Dan: </b>${comment}</p>`;
}


