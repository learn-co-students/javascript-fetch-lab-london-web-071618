

function getIssues() {
  const repo = 'ritz-w/javascript-fetch-lab';
  const token = getToken();
fetch(`https://api.github.com/repos/${repo}/issues`, {
  method: 'GET',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).
  then(json => showIssues(json))

}

function showIssues(json) {
  function createHolder(element) {
    let issue = document.createElement("p");
    issue.innerText = `${element["title"]}:${element["body"]}` ;
    document.querySelector('div#issues').appendChild(issue)
  }
  json.forEach( element => createHolder(element))
}

function createIssue() {
  const repo = 'ritz-w/javascript-fetch-lab';
  const token = getToken();
  const title = document.querySelector('input#title').value
  const body = document.querySelector('input#body').value
  fetch(`https://api.github.com/repos/${repo}/issues`, {
  method: 'POST',
  headers: {
    Authorization: `token ${token}`
  },
  body: JSON.stringify({
  title: title,
  body: body
  })
}).then(res => res.json()).
  then(json => console.log(json)).
  then(getIssues())
}

function showResults(json) {
  let stringy = JSON.stringify(json)
  document.querySelector('div#results').innerHTML = stringy
  return json
}

function showForkedRepo(linkName) {
  let link = document.createElement("a");
  link.href = linkName;
  link.innerText = linkName
  document.querySelector('div#results').appendChild(link)
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'POST',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).
  then(json => showResults(json)).
  then(json => showForkedRepo(json["svn_url"]))
}

function getToken() {
  const token = "";
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ""
}
