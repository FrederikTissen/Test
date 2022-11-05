
function onload() {
    load();
    renderUsers();
    renderPosts();
}


// Render functions

function renderUsers() {
    for (let i = 0; i < users.length; i++) {
        const element = users[i];

        document.getElementById('sidebarUserContainer').innerHTML += 

        templateUsers(element, `${i}`);
    }
}


function renderPosts() {
    document.getElementById('posts').innerHTML = '';
    
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];

        document.getElementById('posts').innerHTML += 
        
        templatePosts(element, `${i}`);
        loadComments(`${i}`);
    };  
}


function renderComment(i) {
    let content = document.getElementById(`inputComment${i}`);
    let contentComments = document.getElementById(`comments${i}`);

    posts[i].comments.push(content.value);
    content.value = '';
    contentComments.innerHTML = '';

    for (let j = 0; j < posts[i].comments.length; j++) {
        let comment = posts[i].comments[j];

        templateComment(comment, `${j}`, `${i}`);
    };
    save();
}

// Delete functions

function deleteComments(i) {
    posts[i].comments = [];
    renderPosts();
    save();
}


// Show, hide and change functions

function change(x, y) {
    document.getElementById(y).classList.remove("d-none");
    document.getElementById(x).classList.add("d-none");
}


function addLikeNumber(i, id) {
    let sum = +posts[i].likes_number;

    sum = sum + 1;
    document.getElementById(id).innerHTML = `<b>Gefällt ${sum} mal</b>`;
}


function removeLikeNumber(i, id) {
    let sum = +posts[i].likes_number;

    document.getElementById(id).innerHTML = `<b>Gefällt ${sum} mal</b>`;
}


function changeFollowBtn(i) {
    let content = document.getElementById(i);

    if (content.innerHTML == 'Folgen') {
        content.innerHTML = '<b>Gefolgt</b>';
    } else {
        content.innerHTML = 'Folgen';
    };
}


// Save and Load functions

function loadComments(i) {
    document.getElementById(`comments${i}`).innerHTML = '';

    for (let j = 0; j < posts[i].comments.length; j++) {
        let comment = posts[i].comments[j];

        document.getElementById(`comments${i}`).innerHTML += /*html*/ `
        
        <p id='myComment${j}'><b>Dan: </b>${comment}</p>`;
    };
}

function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}


function load() {
    let postsAsText = localStorage.getItem('posts');
    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    };
}



