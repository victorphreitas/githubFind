//connecting to the github.js
const github = new Github;
const ui = new UI;

const searchUser = document.querySelector("#searchUser")

searchUser.addEventListener("keyup", searchProfile);

function searchProfile(event) {

  const userText = event.target.value
  let footer = document.querySelector(".footer");

  if (userText !== ""){
    //make an HTTP call to github API
    github.getUser(userText)
    .then(data => {
      if (data.profile.message !== "Not Found"){
        ui.getProfile(data.profile)
        ui.showRepos(data.repos)
        footer.style.marginTop = "10px";
      } else {
        //show allert
        ui.showAlertMessage("User Not Found!", "alert alert-danger")
      }
    })
    .catch(err=>{if (err){console.log(err)}})
  } else {
    //clear the profile
    ui.clearProfile()
    footer.style.marginTop = "50vh"
  }
  
  event.preventDefault()
}

