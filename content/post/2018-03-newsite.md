---
categories: ["Technology"]
description: ""
draft: false
slug: ""
tags: ["blog","hugo","route 53","aws","github"]
date: 2018-03-04T12:26:58-07:00
title: "New Website"
---

I know, it doesn't look any different. That's sort of the beauty of this story. I'm going to warn you, if you normally come here for my amusing anecdotes about my kids, or perhaps to be regaled about my home improvement exploits, this story will probably seem somewhat dull. However, I owe this entry to the greater technological community, as there might be somebody, somewhere, that thinks even a little bit like me and are trying to do something similar to what I'm trying to do. And if they are a little like me, they will systematically hack their way through problems using Google, and maybe this article will show up and help them.

If you've ever read my [about page]({{< ref "about.md" >}}), you have a vague notion of how this site is constructed. If you haven't, and still didn't follow the link I provided above, let me recap. This site is constructed using [Hugo](https://gohugo.io), a static site generation tool. Basically I write everything in Markdown syntax in static files, then Hugo applies templates to it and generates a static, HTML-only site. Until recently, I was hosting the site on (A Small Orange)[https://asmallorange.com], a hosting company that I've been using for over 10 years! If you have any hosting needs, I really do like this company. They have excellent customer support and decent prices. They don't have "silly-good" prices, however. Up until this month, I was paying $25 a year to use their hosting services, and another $15 to register the dogsbuttbrew.com domain. I was getting that price because I had been grandfathered in on the 10 year old prices that I was paying. Unfortunately for me, this year they finally had enough and charged me their lowest possible price of $61 a year. This isn't a bad price, but considering I had switched the site to be static only, I really didn't need all the features that the price got me. Like an e-mail address, database, backups, etc... So I went out to determine if I could find somewhere cheaper.

My criteria were basically somewhere that I could deploy static HTML content that was cheap or free, preferably free. Luckily, the Hugo site has some good recommendations, one of which I quickly followed through on - moving to [GitHub Pages](https://pages.github.com). For those that aren't in the tech community, GitHub's main claim to fame is that of a centra repository for source code. Since my website is written in Markdown and HTML/JS/CSS, that is definitely source code. The main limitation to using GitHub for free was that I had to make my repository public, so now you too can see the source for my blog and, maybe more interestingly, the template that is used for my blog. Anyway, Github Pages allows you to take a folder in your project, the default is the **docs** folder, and to host your site out of that folder. Among the nice things this affords includes:

* No deployment - it just shows whatever is on the latest "master" branch from the source repository
* Free - as long as the repository is public, there is no need to pay for it
* Custom Domain - Normally the page would show up at https://gradymke.github.io/dbb-blog, but through a CNAME entry, I can have the regular http://dogsbuttbrew.com point to there.

So I had my free hosting provider. Sweet. And in the process, I was able to massively simplify my deployment process. I still have to build the site on my local machine to generate the static files, but I just check those into the master branch, push them to GitHub, and my new content shows up. A nice improvement at some point would be to find a free provider that supports Hugo sites. There are some out there that support Jekyll, which is very much like Hugo but written in Python, but I've yet to find one that supports Hugo directly. The only reason that would be nice is because I could then conceivably author my entries on an iPad using an online editor of some sort, then the site would just be generated for me. For now, though, this is good enough.

A Small Orange was also hosting my domain and DNS entries, so I did need to move those as well. For the last year or so I've been registering all of my domains through Amazon AWS's Route 53 service. It's pretty cheap, $12 a year per domain, plus it costs about $0.50 a year per site to setup the DNS entries required to point people to GitHub or wherever I am hosting the pages. For dogsbuttbrew.com, I needed a couple of A records, a CNAME record, and an MX record to verify my Google Apps domain ownership, along with the various records required for AWS.

So there it is, in a nutshell. I will probably update my [About Page]{{ ref "about.md" }} at some point to reflect the new setup, along with my README.md page that shows up in the public repo when you browse to it. If you have any questions about this setup, feel free to contact me or to write up an issue on the GitHub page.