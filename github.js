class Github{
  constructor(){
    this.client_id = '2173af7aedfa4603a691';
    this.client_secret = '38f9e63c886382fa32b587bbab24a6e3969ff4c0';
    this.repos_count = 5;
    this.repos_sort ='created:acs';

  }

  async getUser(user){
    const profile_responce   = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //console.log(profile_responce);
    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);



    const profile_data = await profile_responce.json();
    const repos_data = await repos.json();
    console.log(repos_data)

    return{
       profile_data,repos_data
    }
  }
}
