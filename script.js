function block() {
    const domain = window.location.hostname;
    if (domain == 'www.linkedin.com' || domain == 'www.instagram.com' || domain == 'www.reddit.com' || domain == 'discord.com' || domain == 'twitter.com' || domain == 'www.facebook.com' || domain == 'www.pinterest.ca' || domain == 'www.youtube.com') {
        document.body.innerHTML = '<div style="color:#000;"><h1 style="margin-top: 250px; text-align: center; font-size: 48px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont; ">This website is blocked</h1></div>';
    }
}

block()