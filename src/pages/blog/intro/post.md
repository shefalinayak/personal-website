---
title: I finally rebuilt my website!
date: "2018-08-23"
publish: true
---

Before this website update, I had a 2-page personal website written in plain HTML/CSS/JS. It had an animated homepage and a very sad projects page that was "under construction" for over a year and a half. I knew it was ugly and out of date, and yet the url was on my resume (eek).

So as I publish version two, I want to highlight the improvements I'm excited and relieved about. I also want to mention the tools and tech used, because I had a really experience with all of them and I really appreciate it.

### CSS Grid

CSS Grid made immediate sense to me in a way that no other CSS layout system ever has. I stumbled upon this [simple introduction](https://mozilladevelopers.github.io/playground/css-grid/03-firefox-devtools/) to Grid, which led me to a bunch of talks by [Jen Simmons](http://jensimmons.com/) about modern layouts on the web. With Grid I was able to move quickly from having a layout idea to putting it on a screen.

### p5.js

I used the [p5 Web Editor](https://alpha.editor.p5js.org/) to make the random-pentominoes animation on my homepage. P5 is great for creative coding experiments in general, but the web editor makes the process even simpler. I played with the sketch online for a few days and once I was happy with it, I used the embed link to include it on my site.

### Gatsby.js

Gatsby is the real hero here. I've had frustrating experiences with customizing Jekyll sites on GitHub Pages, so when I heard good things about Gatsby I was very hopeful. And Gatsby is truly great!

What I love about the official [Gatsby.js tutorial](https://www.gatsbyjs.org/tutorial/) is the detail. The tutorial has seven parts and it shows you not just how to get set up but also how to edit the typography, how to make a layout/template, how to grab data with queries, how to install plugins, and even more. By the end of the tutorial I had a good sense of the file structure and how to fiddle with things to get what I want. For most of the stuff I wanted that wasn't in the tutorial, I was able to look at the source code for some personal sites made with Gatsby and figure it out.

If I want to change the layout, I just have one file which hold my React layout component. The projects page and blog page are automatically populated with a list of posts thanks to GraphQL queries. I've set everything up so I can write posts in markdown. Images resize and blur in without much effort on my part! I feel like I'll have a much easier time making updates to this new version of the site.

### GitHub

Just a small mention because a year and a half ago I was a new and nervous GitHub user, but now I kind of know what I'm doing, whoa GitHub is useful. I can commit at reasonable points, and branches helped me experiment without destroying my work.

### Pentominoes

So clearly there's a pentomino theme going on here. I settled on pentominoes because I wanted something geometric and asymmetrical, but there were a lot of ways that idea could play out, and [this incredible site](https://isomerdesign.com/Pentomino/) helped me find all kinds of pentomino arrangements. Even within the same shape, there are arrangements that need to be 4-colored and arrangements that can be 3-colored. Sometimes I wanted an arrangement with the i-pentomino in a very specific location. This pentomino site is genius. (The [wiki page](https://en.wikipedia.org/wiki/Pentomino) is pretty solid, too.)
