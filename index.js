const inquirer = require('inquirer');
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main () {
    console.log('starting');
    const userResponse = await inquirer
  .prompt([
    /* Pass your questions in here */
    { 
        type: 'input',
        message: "What is your project title",
        name: "title"
    },
    {
        type: 'input',
        message: "What is the description of the project",
        name: "description"
    },
    {
        type: 'input',
        message: "What is the usage information of the project",
        name: "usage"
    },
    {
        type: 'input',
        message: "What is your username",
        name: "username"
    }
  ]);
console.log('starting');
console.log(userResponse);
const title = userResponse.title;
const description = userResponse.description;
const usage = userResponse.usage;
const username = userResponse.username;

const gitResponse = await axios.get('http://api.github.som/users/${gitUsername}');
const gitData = gitResponse.data;
const gitName = gitData.login;
const gitEmail = gitData.email;
const gitLocation = gitData.location;
const gitUrl = gitData.html_url;
const gitProfileImage = gitData.avatar_url;

const contributorUserNamesArray = contributorUserNames.split(",");
console.log(contributorUserNamesArray);

var resultContributor;
for (i=0; i<contributorUserNamesArray.length; i++){
    var contributorsGitUserName = contributorUserNamesArray[i]
    const gitResponse2 = await axios.get('https:api.github.com/users/${contributorsGitUserName}');
    var gitContributorProfileImage = gitResponse2.data.avatar_url;
    var gitContributorUrl = gitResponse2.data.html_url;
    var gitContributorEmail = gitResponse2.data.email;
    var resultContributor = resultContributor + (`
    \n <img src = " ${gitContributorProfileImage}" width="150" display="inline"/> ${contributorsGitUserName} GitHublink: ${gitContributorUrl}`);
}
var result = (`
# ${title}
${description}
##Usage
${usage}
##Contributors
${username}
##Author
\n![ProfileImage](${gitProfileImage})
\n**${gitName}**
\nEmail: ${gitEmail}
\nLocation: ${gitLocation}
\nGithub: ${gitUrl}
`)
var writeResult = fs.writeFileSync(path.join(__dirname, '../Readme-Generator', 'README.md'), result)
console.log("file generating...")
}
main();