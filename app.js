//Init Github class
const github = new Github;
//Init UI class
const ui = new UI;


//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event Listener
searchUser.addEventListener('keyup',(e)=>{
    //get inptut text
    const userText = e.target.value;


    if(userText !== ''){
      //MAKE HTTP CALL
      github.getUser(userText)
      .then(data =>{
        if(data.profile_data.message === 'Not Found'){
        //SHow Alert
        ui.showAlert('User Not Found','alert alert-danger');
      }else{
        //Show profile
        ui.showProfile(data.profile_data);
        //Show repos
        ui.showRepos(data.repos_data);
      }
      }
      )
    }
    else{
      //Clear the profile
      ui.clearProfile();
    }
})
