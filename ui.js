class UI {
  constructor(){
    this.profile = profile
  }

  getProfile(user){
    document.getElementById("profile").innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
         <div class="col-md-3">
           <img class="img-fluid mb-2" src="${user.avatar_url}">
           <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
         </div>
         <div class="col-md-9">
           <span class="badge badge-primary bage-repo">Public Repos: ${user.public_repos}</span>
           <span class="badge badge-secondary bage-gists">Public Gists: ${user.public_gists}</span>
           <span class="badge badge-success bage-followers">Followers: ${user.followers}</span>
           <span class="badge badge-info bage-following">Following: ${user.following}</span>
         </div>
         <br><br>
         <ul class="list-group">
           <li class="list-group-item">Company: ${user.company}</li>
           <li class="list-group-item">Website/Blog: ${user.blog}</li>
           <li class="list-group-item">Location: ${user.location}</li>
           <li class="list-group-item">Member Since: ${user.created_at.slice(0,10)}</li>
         </ul>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    <style>
      .bage-following {
        background-color: #6c757d !important;
      }
      
      .bage-gists {
        background-color: #007bff !important;
      }
      
      .bage-repo {
        background-color: #17a2b8 !important;
      }
      
      .bage-followers {
        background-color: #28a745 !important;
      }
      
      .bage-stars {
        background-color: #007bff !important;
      }
      
      .bage-watchers {
        background-color: #17a2b8 !important;
      }
      
      .bage-forks {
        background-color: #28a745 !important;
      }
      
      .footer {
        text-align: center;
        margin-top: 100vh;
      }
    </style>
    `
  }

  showRepos(repos){
    let output = ''

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary bage-stars">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary bage-watchers">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-info bage-forks">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `
    })

    document.querySelector('#repos').innerHTML = output;
  }

  clearProfile(){
    document.getElementById("profile").innerHTML = ""
  }
  
  showAlertMessage(message, className){
    this.clearAlert()
    //create a div to append before searchContainer
    const div = document.createElement("div");
    //give it a className
    div.className = className
    //append a message into it 
    div.innerHTML = `<span>${message}</span>`
    //element that comes aftert the alert 
    const container = document.querySelector(".searchContainer")
    const afterElement = document.querySelector(".search")
    //append it before searchContainer
    container.insertBefore(div,afterElement) 

    setTimeout(()=>{div.remove()},3000)
  }

  clearAlert(){
    const alert = document.querySelector(".alert");
    if (alert){
      alert.remove();
    }
  }

}