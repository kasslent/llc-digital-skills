---
layout: lessons
module: 8
lesson: 1
title: Free Hack Time, Domains, Hosting & FTP
description: Choose Your Own Adventure
permalink: module8.html
class: module8
---

## Choose Your Own Adventure! 

With the remaining time left together we're giving you an opportunity to own your experience today as much as possible. In this document we have added some crucial information for you to be able to publish your websites when you're ready. 

For today, it's your job to continue working on your own website and ask mentors and the instructor any questions you may have about any part of the material that you didn't understand. 

If everything's clear, read ahead to some bonus material that may be of interest. 

## Local development vs live websites

Developing your website *locally* just means working on your files on your computer. You're the only person who can see the website until you move it to a *web host*.

Websites are basically just a bunch of files (HTML pages, images, css files, etc) in a folder. To put that website online and make it *live*, you will need to move your *local* folders to a *server*. 

### What is a server?

A server is a like a computer, but they never turn off and are always connected to the internet. *Hosts* own many different servers and are responsible for server maintenance to ensure that all the websites running on that server are always available. 

## Moving files to a server

It's similar to moving files from one folder to another. But instead, you'll be moving files from your computer to your server.

You'll need 3 things:

* a domain name - your web address (e.g. mywebsite.com)
* a server/host - web space for your files
* an FTP client - software/app to upload files to the server


## Removing your files from c9.io

Before we explore the subject of moving files more, let's see how we can remove our files from Cloud9 to be able to move them. 

First, remember that WordPress websites have the theme files and overall WordPress core files to deal with AND a database file. To launch a WordPress website on your own server you'll need both of these. 

Here's how to remove them from c9.io. 

> ## Bonus Exercise: Accessing your files on Cloud 9
> ### Getting the database
>
>To grab our database file which contains all of our settings and actual pages and posts content in the website, we need to access a program called phpMyAdmin. This is a graphical user interface that makes it easy to interact with MySQL databases. 
> 
> 1. Open up a terminal: Watch this video of how: 
> ![]({{site.img}}/module7/c9-opening-terminal.gif)
>
> 1. Enter the following in the terminal.
> 
>		    phpmyadmin-ctl install
>
> You will see a url generated to access your phpMyAdmin dashboard where you'll download the database.
> You'll select the database c9 on the sidebar and the go to "Export" to download the database for your website.
> Follow the instructions in this gif: 

> ![]({{site.img}}/module7/downloading-database-from-c9.gif)
> 
> 1. Once you're done downloading the database, go back to c9, select your entire project folder, right click on it and select download. 
> You will use the files and the database to upload them to a hosting service/server. 
> ### Resources
Watch this awesome video walkthrough of [how to launch a wordpress website](http://wesbos.com/migrate-wordpress/) by Wes Bos:

## Server vs Domain

A **server** is the computer that will "host" the folder with your files.

The **domain** is the internet address used to access that folder on the server.

Many companies will sell domains and hosting but you can also purchase these separately and connect them through your hosting provider.

There are many hosting and domain companies to choose from. Here are a few:

* [Dreamhost](http://www.dreamhost.com/r.cgi?2085384) - hosting and domains - $40 off with promo code **LLC40**
* [Hover](Hover.com/learningcode) - domains only - 10% off with promo code **learningcode**
* [Compare Hosting](http://www.whoishostingthis.com/compare/)
* [The Best Web Hosting Services for 2016](http://www.pcmag.com/article2/0,2817,2424725,00.asp)

Read more about keeping hosting and domains separate [here](http://ladieslearningcode.com/getting-hosted-domains-with-hover/). 


## Domains & Hover
Setting up a domain name will be slightly different based on which option you choose because it depends on that service providers website interface.  To set up a domain with [Hover](Hover.com/learningcode), follow the instructions below.

### Step 1: 
Visit [hover.com](http://hover.com) and select **Find a domain** and enter your desired domain name into the search box.

![]({{site.img}}/module7/1-search-domain.png)

### Step 2: 
A list of available domain name extensions will show as well as suggestions for similar names.  This is useful if your desired domain name is already taken.

Select an option and add to cart.

![]({{site.img}}/module7/2-domain-options.gif)

### Step 3: 
Optional email customizations

**Mail Forwards**  
Forward your custom domain email address to your Gmail, Hotmail, etc.  Get the benefit of a custom email address without managing multiple accounts.

**Small & Big Mailbox**  
Ad-free email accounts. The Big option has more storage and a few other features.

You can always add this option later. See full details [here](https://www.hover.com/email).

![]({{site.img}}/module7/3-cart-email-options.png)

### Step 4: 
Create an account & add your WHOIS registration info.

**What is a registration record?**

When registering a domain name, the Internet Corporation for Assigned Names and Numbers (ICANN) requires your contact information for the WHOIS database which is publicly available using a WHOIS search tool. 

Hover (and most other domain registrars) offer a privacy option, automatic with Hover's domain registration (see previous screenshot, the privacy option is automatically checked).  

More info [here](https://help.hover.com/entries/21196313-Domain-WHOIS-Privacy).


![]({{site.img}}/module7/4-create-account.png)

![]({{site.img}}/module7/5-whois-info.png)


### Step 5: 
Add your billing info. 

To add another domain name, log into your new account, choose the **Add New** option and follow the same steps.

![]({{site.img}}/module7/6-get-another-domain.png)

<br>
And you're done!

## Domains & Hosting

**If you have a domain with your hosting company, skip this step.**

To forward your domain to your hosting company, follow the steps below. First, find your hosting provider’s **nameservers**. It will look something like this:

    ns1.hostingcompany.com
    ns2.hostingcompany.com

This info is provided by your hosting company but the website's interface for finding this info will vary. Sometimes it is also included in your confirmation email when you sign up.

You could also contact customer support or just do a web search for "[your host] nameservers".  For example, searching for "Dreamhost nameservers" brings up [this page](http://wiki.dreamhost.com/Nameservers).  Dreamhost's nameservers are:

    ns1.dreamhost.com
    ns2.dreamhost.com
    ns3.dreamhost.com

To forward your Hover domain to your hosting account, follow these steps. (This will be similar for other domain/hosting company)

1. login to your Hover account
1. go to **Your Account > Domains** (also the landing page when you log in)
1. click your domain
1. go down to **Nameservers** and select **Edit**
  ![]({{site.img}}/module7/hover-nameservers-1.png)
1. update it with your host's nameservers
  ![]({{site.img}}/module7/hover-nameservers-2.png)

## FTP (File Transfer Protocol)

FTP (File Transfer Protocol) allows you to connect to the server to upload files.

To use FTP, you will need to create an FTP username and password in your **hosting** account, since that is where your servers are.

To create an FTP user in Dreamhost, follow these steps. (This will be similar with other hosting companies).

* go to **Users > Manage users > Add a new user**
* create a username, password and save

![]({{site.img}}/module7/dreamhost-ftp-1.png)
![]({{site.img}}/module7/dreamhost-ftp-2.png)


## FTP Client

To get your files online, you will need upload your files to your newly purchased hosting server. Be sure to have the below information.

* FTP Username
* FTP Password
* FTP Address (usually `ftp.yourdomain.com` or just `yourdomain.com` - check with your hosting provider)

There are many free FTP Clients.  A great one is [FileZilla](https://filezilla-project.org) or [CyberDuck](https://cyberduck.io/).

Here's a tutorial to get your files online using FileZilla: [FileZilla Client Tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)

<br>
Feeling adventurous? Want to try a free hosting option?  
Try [Hosting Static Sites on Github for Beginners](http://thephuse.com/development/hosting-static-sites-on-github-for-beginners/).

>## Final Class exercise: launching your website on github
> Github is a wonderful platform that enables developers to share code and collaborate on it. It also enables anyone to host a website for free if it's just a plain HTML & CSS website. Let's try doing it with our plain websites, without the WP parts we worked on. Those will need more work anyhow before we can launch them:
> 1. Go to [http://github.io](http://github.io) and create an account or sign in. 
> 1. Create a new repo: 
>
> ![]({{site.img}}/module7/github-repo.gif)
> 1. Fill in your repo info and initialize it with a Read Me. 
> 1. Select "Upload Files"
> 1. From your Finder or File Explorer drag and drop the index.html, css folder, js folder and any images for your website into the uploader.
> 1. Write a commit message such as "Added files" and submit your commit message.(Commit messages help you keep track of when you make file changes in github).
> 1. Go into the settings of your repository and enable Github Pages.
> 1. Go to your-username.github.io/your-repo-name and you should see your site! 

## Resources
To set up your custom domain with github pages [read here](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/)

Here's another more effective way of managing your website on Github if you want to keep making changes and uploading them. In fact, this is a better way in the long run: [Sharing your website on Github](https://medium.com/@svinkle/publish-and-share-your-own-website-for-free-with-github-2eff049a1cb5)

Deploying websites can be tricky at first. It's always good to find a buddy to help you through it if it's your first time. In some Chapters Ladies Learning Code hosts free "Coffee & Code" sessions. This is exactly the kind of thing you can get help with there. 

Most importantly, don't stop coding and have fun! 

## Resources

For more advanced training, there are numerous institutions in Toronto that run in-person classes: 
1. [HackerYou](http://hackeryou.com)
1. [Bitmaker Labs](http://bitmaker.co)
1. [Lighthouse Labs](http://lighthouselabs.com)
1. [Brainstation](http://brainstation.io)
1. Colleges and universities
1. Maker Spaces: For example, [SteamLabs](steamlabs.ca)
1. [Dames Making Games](https://dmg.to/)

For free online training: 

1. [Free Code Camp](http://freecodecamp.com)
1. [Lynda](http://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMEDB0187&R=EDB0187) This is free through Toronto Libraries
1. [Glitch](http://glitch.com)


