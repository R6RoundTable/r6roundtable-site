---
layout: page
title: Discord
description: Join the Round Table Discord server to connect with other cosplayers, seek advice, share your cosplays, and more!
---

<ul class="home-links link-collection">
    <li class="link">
        <a href="/discord/join">
            <div class="link-title">
                ✨ Join the <strong>R6 Round Table Discord</strong>!
            </div>
            <div class="link-description" id="server-info">
                Click to join
            </div>
        </a>
    </li>
</ul>

&nbsp;

This is a Rainbow Six cosplay-focused community. Apart from cosplayers, if you are not yet cosplaying but are considering it, or are in adjacent/related fields, you're welcome to join too!

We have channels for showcasing cosplays, sharing progress, seeking help and advice, planning and coordinating for events, and more!

---

🔑 **Server access**: At the moment, server access is manually granted. After joining the server, you will be invited to review the rules and to share a short introduction! 

Access will be granted as soon as a server staff is able to get to it, usually within minutes.


<script>
    "use strict";
    async function getData() {
    const url = "https://discord.com/api/v10/invites/7n4wsmVyst";
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("server-info").innerText += ` • ${data.profile.online_count} online • ${data.profile.member_count} members`;

        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    }

    getData();
</script>
