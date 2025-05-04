async function searchUser() {
    const username = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");

    if (!username) {
      resultDiv.innerHTML = "Please enter a username.";
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");

      }
      

      const data = await response.json();
 
      resultDiv.innerHTML = `
        <img src="${data.avatar_url}" width="100" />
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
      `;
    } catch (error) {
      resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  }

  let inputs = document.getElementById("username").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
      searchUser();
      
    }
  })