function getIssues() {
  const token = "4024d395a0ede019e09a21facf88a490b2a85979"
  fetch('https://api.github.com/repos/JoWilks/javascript-fetch-lab/issues',
   { headers: {Authorization: `token ${token}`}}
  )
    .then(resp => resp.json())
    .then(json => {
      showIssues(json)
    })
}

function showIssues(json) {
  const issuesDiv = document.querySelector("#issues")
  const createBreak = document.createElement("br")
    json.forEach(function(issue) {
      const createP = document.createElement("p")
      createP.innerHTML = `Title: ${issue.title} <br> User: ${issue.user.login} <br> State: ${issue.state} <br> Info: ${issue.body} <br> <a href= "${issue.html_url}">Go to issues Page</a>`
      issuesDiv.append(createP)
      issuesDiv.append(createBreak)
    })
}

function createIssue() {
  const token = "4024d395a0ede019e09a21facf88a490b2a85979"
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody};
    fetch('https://api.github.com/repos/JoWilks/javascript-fetch-lab/issues',
    {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
          Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {console.log(json);
        getIssues();
      })
}

function showResults(json) {

}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = "4024d395a0ede019e09a21facf88a490b2a85979"
  //use fetch to fork it
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks',
  {
    method: 'post',
    headers: {
        Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => console.log(json))
  }

  function getToken() {
    const token = '4024d395a0ede019e09a21facf88a490b2a85979'
    return ''
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    // return ''
  }


function testPost() {
  const token = "4024d395a0ede019e09a21facf88a490b2a85979"
  const postData = {
    body: 'Great stuff'
  }

  fetch('https://api.github.com/repos/JoWilks/javascript-fetch-london-web-071618/commits/4e52ddc3a0639ecf079a7b19175fb8b53b602592/comments',
   {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}
