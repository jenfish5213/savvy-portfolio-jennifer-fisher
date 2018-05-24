var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var usersRequest = $.ajax( "https://jsonplaceholder.typicode.com/users" );

function generateUsers( user){
  return
    <li>$(user.name)</li>
    ;
}

function generatePost(post){
  return
    <div>
    <h2>$(post.title)</h2>
    <p>$(post,body)</p>
    </div>
  ;
}
function previewMarkup(post){
  return posts
  .slice( 0, 9 )
  .map( generatePost )
  .join( "" );
}
function previewList ( users ){
  var listItems = usersRequest
  .map( generateUser )
  .join( "" );

  return
  <ol>
    ${ listItems }
  </ol>
}

function injectPost( posts){
  document.querySelector("#content . container").innerHTML += previewMarkup( posts );

  return usersRequest;
}
function injectUsers( users ){
  document.querySelector("#content . container").innerHTML += users.map( generateUser ).join( "");
}
postsRequest
.then( injectPosts )
.then( injectUsers );
