const fs = require('fs');

// followers
let data = JSON.parse(fs.readFileSync('./followers_1.json', 'utf-8'));
let followers = [];

data.forEach(item => {
    item["string_list_data"].forEach(subItem => {
        followers.push(subItem["value"]);
    });
});

// following
data = JSON.parse(fs.readFileSync('./following.json', 'utf-8'));
let following = [];

data["relationships_following"].forEach(item => {
    item["string_list_data"].forEach(subItem => {
        following.push(subItem["value"]);
    });
});

// main
let goodpeople = [];

following.forEach(user => {
    if (followers.includes(user)) {
        goodpeople.push(user);
    }
});

following.forEach(user => {
    if (!goodpeople.includes(user)) {
        console.log(`https://www.instagram.com/${user}`);
    }
});
