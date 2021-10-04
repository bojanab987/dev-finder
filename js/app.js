const OCTOCAT_API = "https://api.github.com/users/octocat";
const GITHUB_API = "https://api.github.com/users/";
const form = document.querySelector('.js-form');
const PROFILE_IMG = document.querySelector('.js-profile-img');
const USERNAME = document.querySelector('.js-username');
const NAME = document.querySelector('.js-name');
const JOINING_DATE = document.querySelector('.js-date');
const BIO = document.querySelector('.js-bio');
const NO_REPOS = document.querySelector('.js-repos');
const NO_FOLLOWERS = document.querySelector('.js-followers');
const NO_FOLLOWING = document.querySelector('.js-following');
const LOCATION = document.querySelector('.js-location');
const WEBSITE = document.querySelector('.js-website');
const TWITTER = document.querySelector('.js-twitter');
const COMPANY = document.querySelector('.js-company');

//on first load display octocat profile
window.addEventListener('load', displayDetails(OCTOCAT_API));

//display details fetched from forwarded api
function displayDetails(api) {
    fetch(api)
        .then((result) => result.json())
        .then((data) => {
            setProfileImage(data.avatar_url, data.login);
            showUserData(data.login, data.name, data.created_at);
            showBio(data.bio);
            displayStatistics(data.public_repos, data.followers, data.following);
            displayLinks(data.location, data.blog, data.twitter_username, data.company);
        })
}

//submit form and trigger displayDetails function to display info about searched profile
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //search input value
    let search = document.querySelector(".js-search").value;
    //remove spaces from input and then join string
    let username = search.split(' ').join('');
    //display info about searched profile
    displayDetails(GITHUB_API + username)
})

//set image atributes
function setProfileImage(image, alt) {
    PROFILE_IMG.setAttribute('src', image);
    PROFILE_IMG.setAttribute('alt', alt)
}

//show user intro details
function showUserData(username, name, date) {
    if (name == null) {
        NAME.textContent = username;
    } else {
        NAME.textContent = name;
    }
    USERNAME.textContent = `@${username}`;
    JOINING_DATE.textContent = date;
}

function showBio(bio) {
    if (bio == null) {
        BIO.textContent = "This profile has no bio"
        BIO.classList.add("no-info-transparency")
    } else {
        BIO.textContent = bio;
    }
}

function displayStatistics(repo, followers, following) {
    NO_REPOS.textContent = repo;
    NO_FOLLOWERS.textContent = followers;
    NO_FOLLOWING.textContent = following;
}

function displayLinks(location, website, twitter, company) {
    if (location == null) {
        LOCATION.textContent = "Not available"
        LOCATION.classList.add("no-info-transparency")
    } else {
        LOCATION.textContent = location;
    }

    if (website == null) {
        WEBSITE.textContent = "Not available"
        WEBSITE.classList.add("no-info-transparency")
    } else {
        WEBSITE.textContent = website;
        WEBSITE.setAttribute('href', website)
    }

    if (twitter == null) {
        TWITTER.textContent = "Not available";
        TWITTER.classList.add("no-info-transparency");
    } else {
        TWITTER.setAttribute('href', "https://twitter.com/" + twitter);
        TWITTER.textContent = twitter;
    }

    if (company == "null") {
        COMPANY.textContent = "Not available";
        COMPANY.classList.add("no-info-transparency");
    } else {
        COMPANY.textContent = company;
        let link = company.slice(1);
        COMPANY.setAttribute('href', "https://github.com/" + link);
        COMPANY.textContent = company;
    }
}

