# dogsbuttbrew.com

This site is my personal blog, for the most part. Occasionally I will
use it for some other technical tests and what-not, but for the most
part it is my kid's babybook.

# How The Site Is Generated

## Hugo

I use [Hugo](http://gohugo.io) to manage and generate the site. Hugo is
a static site generator that uses Front Matter to organize content and
Markdown text as a markup source. It takes the configuration values from
the front matter configuration and the content created from markdown to
statically generate an HTML website that is then published to my host.

## Site Host

The site is hosted at [A Small Orange](http://asmallorange.com), a site
I've been using for a long time. I use one of their smallest hosting
plans which is a shared Linux offering and up to 1GB of bandwidth a
month (I think). Someday I could switch this, but for now it suffices
and is cheap ($25 a year).

## Publishing

I have created a couple of scripts to help easily deploy the site to the
host. It requires that you are on a Posix style authoring environemnt
(I'm on Mac OSX) and have generated and installed your public key on the
host.

*build.sh* - This script builds the site and puts it in the \_publish
directory. It accepts the **-d** option to deploy the site immediately
to the destination host.

*deploy.sh* - This script takes anything in the \_publish directory,
TARs and Zips the contents, then secure copies (scp) it to the host. For
this to work you must have exchanged keys with the host - the script
will not pause to prompt for login on the remote host. Once the targz
file is copied, the script will remotely extract the file, completing
the site publishing. In the future this script may be configured to
publish something to Facebook or Twitter so people can be alerted to the
site haveing been updated.

## Template

I created my own site template for Hugo using
[Liquorice](https://github.com/eliasson/liquorice/) as my starting
point. It is a simple theme with a couple of decent shortcodes. I will
likely update this at some point in the future to use PureCSS or
something similar, but this one was a good starting point.

The main shortcode provided is below to size an image to a smaller size to fit
on the page. Newer versions of Hugo may take care of this, so I will evaluate
that in the future.

{{< picture title="" height="400px" src="" >}}

## Brain Matter

I can't remember what this is supposed to be called, but it occasionally doesn't work when I upgrade Hugo. So here is a barebones information block for the top of each piece of content:

```
---
categories: ["Family"]
draft: true
tags: ["vacation","travel"]
date: 2020-03-19T08:50:41-06:00
title: "COVID Reality - Day 1"
---
```

## Color Palette

I'm not yet using it, but I've generated a color palette using
[Paletton](http://paletton.com) that should help to make the site look
better in the future. Details of this follow.

[Link to Palette](http://paletton.com/#uid=20k0u0koyu7kIpHjcuuuvJNn9P3)

```
/* CSS - Cascading Style Sheet */
/* Palette color codes */
/* Palette URL: http://paletton.com/#uid=20k0u0koyu7kIpHjcuuuvJNn9P3 */

/* Feel free to copy&paste color codes to your application */


/* As hex codes */

.color-primary-0 { color: #F07838 }/* Main Primary color */
.color-primary-1GB { color: #CD7648 }
.color-primary-2 { color: #F39461 }
.color-primary-3 { color: #FF610C }
.color-primary-4 { color: #FF8747 }

.color-complement-0 { color: #259E7A }/* Main Complement color */
.color-complement-1 { complementlor: #30876D }
.color-complement-2 { color: #40A083 }
.color-complement-3 { color: #0AD094 }
.color-complement-4 { color: #3EDFAE }



/* As RGBa codes */

.rgba-primary-0 { color: rgba(240,120, 56,1) }/* Main Primary color
*color/
.rgba-primary-1 { color: rgba(205,118, 72,1) }
.rgba-primary-2 { color: rgba(243,148, 97,1) }
.rgba-primary-3 { color: rgba(255, 97, 12,1) }
.rgba-primary-4 { color: rgba(255,135, 71,1) }

.rgba-complement-0 { color: rgba( 37,158,122,1) }/* Main Complement
color */
.rgba-Complementnt-1 { color: rgba( 48,135,109,1) }
.rgba-complement-2 { color: rgba( 64,160,131,1) }
.rgba-complement-3 { color: rgba( 10,208,148,1) }
.rgba-complement-4 { color: rgba( 62,223,174,1) }


/* Generated by Paletton.com Â© 2002-2014 */
/* http://paletton.com */
```
