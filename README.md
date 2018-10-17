# Cara Michele Ryan's Portfolio

## About

This is the repo for [my portfolio site](https://caramiki.com/). When my 12 week experience in the inaugural [Omaha Code School](http://omahacodeschool.com/) class was coming to a close, I wanted to redo my portfolio site completely to showcase all my new work and skills (before OCS, all I knew was basic HTML and CSS).

## Technical Stuff

### Jekyll
My portfolio site is built using the Jekyll framework. Omaha Code School primarily focuses on how to build Rails applications, but this site is simple enough that it only needs HTML, CSS, and JS. We spent about half a day learning Jekyll, and I decided I wanted to use my portfolio site to teach myself more about Jekyll since it seemed light-weight and easy to use.

### Javascript Clock
I'm a weirdo who's obsessed with clocks. (In high school I was such a nerd that I used to wear up to 4 clocks on one arm, each for a different time zone in the continental US.) I've always wanted to know enough Javascript to code a clockface. Before Omaha Code School, my Javascript skills were limited to googling how someone else did something and copying and pasting the code into my site.

So I'm very excited about my Javascript clock in the background of the site. If you check out my portfolio site at different times of day (or if you're a savvy enough coder to just cheat and read the code in **js/main.js** and **\_sass/\_global/\_colormagic.scss**), you'll notice a small surprise. :)

The clock itself is an SVG that I drew in Adobe Illustrator CC. Choosing an SVG over a simple JPG/PNG made it easier to manipulate the moving hands and the afore mentioned surprise. You can check out the code in **_includes/clock.html**.

### Lightbox
I used [Lightbox](http://lokeshdhakar.com/projects/lightbox2/) to display the work in my portfolio. Lightbox is incredibly easy to add to your site, and I highly recommend it.
