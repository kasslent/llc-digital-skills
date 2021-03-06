---
layout: lessons
module: 4
lesson: 2
title: CSS Responsive Design
description: Intro to fluid and responsive web design.
permalink: module4-2.html
---


Even before including responsive web design techniques, it’s important to create fluid layouts and maintainable code from the get-go to make the transitions and changes easier. Let’s go over some best practices and tips.

## Fluid images and components

Use percentages to create flexible images:

    img {
      /* image stretches full width of its container */
      width: 100%;

      /* image will stretch full width of its container, but will not stretch an image larger than its natural size */
      max-width: 100%;
    }

<a href="exercises/module3/sample/fluid-images.html" target="_blank">See example here</a>.

<br>

This can also apply to page components:

    .wrapper {
      max-width: 800px;
      width: 80%;
      margin: 0 auto;
    }

## Background images

So far we've used `background` for colours, but it can also be used for setting background *images*.

    /* longhand */
    background-image: url(folder/file.jpg);

    /* shorthand */
    background: url(folder/file.jpg);

<div class="summary">

### Files Paths & Folder Directories

</div>

<div class="details">

    project-folder
      |---css (folder)
           |---styles.css
      |---images (folder)
           |---picture.jpg
      |---index.html    

To find the correct path to add a background image using CSS, the starting point is **styles.css**.  If your folder directory looks like the above example, the steps to follow are:

1. navigate up and out of the css folder (`../`)
1. go into the images folder (`../images/`)
1. image file name (`../images/picture.jpg`)

---
    background-image: url(../images/picture.jpg);

To navigate *up and out* of a folder, the syntax is always `../`  to represent moving up the directory by *one* folder.

</div>

<div class="summary">

## `background-repeat`

</div>

<div class="details">

If the image file is *smaller* than the element than you're applying the background image to, the image will automatically repeat to fill up the space.

![]({{ site.img }}/module3/background-repeat.jpg)

To keep the image from repeating, use the `background-repeat` property. You can also add it to the shorthand `background` property:

    /* shorthand */
    background: url(../images/picture.jpg) no-repeat;

    /* longhand */
    background-image: url(../images/picture.jpg);
    background-repeat: no-repeat;

</div>

<div class="summary">

## `background-attachment`

</div>

<div class="details">

When the page scrolls, all the content scrolls with it, including the background image. Adding `background-attachment: fixed;` will change that behaviour:

    /* shorthand */
    background: url(../images/picture.jpg) no-repeat fixed;

    /* longhand */
    background-image: url(../images/picture.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;

>Try it out on your project and see the result when you scroll down the page.

</div>

<div class="summary">

## `background-size`

</div>

<div class="details">

CSS3 introduced the `background-size` property which can be used to change the size. The syntax is:

    background-size: 300px 100px; /* width, height */


    background-size: 500px; /* changes only the width, height will adjust accordingly */

The default values for width and height are `auto` which retains the original image dimensions.

There are several sizing dimensions: pixels, percentages and keywords.

`background-size` is the longhand property.

    /* longhand */
    background-image: url(../images/background-1.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50%;
    background-size: 100%;

To include it in the shorthand `background` property, it **must** be included after `background-position`, separated with the `/` character.  

    /* shorthand */
    background: url(../images/background-1.jpg) no-repeat fixed 50% / 100%;

**Important**: If no `background-position` value is being used, `background-size` will not work using the shorthand syntax. In this case, it may be less error prone to add it using the longhand syntax:

    background: url(../images/background-1.jpg) no-repeat fixed 50%;
    background-size: 100%;


`background-size` also accepts keyword values, `contain` and `cover`.

* `contain` scales the image to fit its container. The image will grow or shrink proportionally, but the width and height will not exceed the container’s dimensions
* `cover` scales the image to fit the entire container, but if the container has a different aspect ratio than the image, the image will be cropped.

</div>

>## EXERCISE: images & background images
>
>Download the exercise files <a href="exercises/module3/fluid-images.html" download>fluid-images.html</a> and in the text editor.
>Uncomment each property and change some values to see what happens.

#### Extra Resources: CSS Backgrounds
* [Mozilla Developer Network - background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
* [CSS Background Shorthand Property](http://sixrevisions.com/css/background-css-shorthand/)



## Intro to Responsive Web Design

When Ethan Marcotte introduced the [responsive web design](http://alistapart.com/article/responsive-web-design) approach in 2010, the idea that one website could target multiple screens got the dev community really excited.

Fluid websites are not new. Using percentage based widths in CSS will make the page fluid as the page is resized. Responsive techniques take that a step further and can be used to rearrange and change the styles of elements based on the device’s screen size using **media queries**.

[mediaqueri.es](http://mediaqueri.es) houses a collection of responsive websites. Take a look at a few sites and see how the layouts change when the browser window size changes.

![]({{ site.img }}/module3/rwd-example.png)
Prior to responsive and mobile web designs, the rule of thumb was to optimize for the most common resolution (`1024px x 768px` or `1280px x 1024px`).

If a mobile version was required, a separate website was created, often under a sub-domain (ex. m.mysite.com). It would have its own design and code base separate from the desktop version.

While responsive web design has become a popular standard, a separate mobile site may still be the best option for content heavy sites that require more simplicity for mobile or a layout for mobile users that goes beyond shifting and scaling content.


### Different types of web design

In order to understand responsive web design and web development better, we will explore some common techniques:

* Fixed/Static
* Fluid/Liquid
* Adaptive
* Responsive

> Let's take a look at and discuss this example: <http://www.liquidapsive.com/>
>
> Make your browser window bigger and smaller. How does the layout and styles change?

### Mobile-first design

When responsive design was introduced, it was common to start with a desktop design, then make the design responsive for smaller screens.

This has changed with the proliferation of smartphones and tablets, giving rise to another approach, mobile first design:

* design an experience for mobile devices first, then adapt for desktop
* make mobile integral, not an afterthought

### Resources

* The [article](http://alistapart.com/article/responsive-web-design) that started the Responsive Design movement.
* [Mobile First Design: Why It’s Great and Why It Sucks](https://codemyviews.com/blog/mobilefirst)
* [Graceful Degradation vs. Progressive Enhancement](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)


## Viewport Meta Tag

The viewport meta tag is **required** in the `<head>` of the HTML document to ensure that the page responds on mobile devices.

If you forget to include this tag, media queries **will not** render properly on a mobile device:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

* `name=”viewport”` differentiates it from other meta tags
* `viewport` gives the browser information about the sizing abilities of the site
* `content` provides info about the viewport, separate key value pairs with a comma
* `width=value` sets the width of the web page
* `initial-scale` is the zoom value at which the site is zoomed in/out by default
* `user-scalable=no` (not shown in example tag above) will limit users from being able to zoom in
* `minimum-scale, maximum-scale` will limit how far in or out a user is allowed to scale/zoom

## Media queries

Media queries allow you to apply CSS to your document only when the screen has reach a certain size (also referred to as a breakpoint).

Basic media query:

    @media (max-width: 940px) {
      /* CSS for screens 940px wide or smaller */
    }

The above example targets a browser with the maximum width of 940px (anything equal or less than 940px).

All rules for a specific screen size are required to be nested *within* the media query.

    @media (max-width: 940px) {
      body {
        background: red;
      }
      h2 {
        font-size: 20px;
      }
    }

You can also use `min-width` in media queries:

    @media (max-width: 940px) {
      /* any screen 940px and below */
    }
    @media (min-width: 941px) {
      /* any screen 941px and above */
    }

> Why do you think 941px was used for min-width instead of 940px?

When you are starting out, you may find it easier to stick to only `max-width` or only `min-width`. Switching between the two can get confusing, espeically if you are using many media queries.

Since we are adapting a desktop design for smaller devices, we will be using max-width queries to target smaller devices and give them specific styles. If we were adopting the mobile first approach, we would style for the smallest screen size first, and then use `min-width` queries to apply styles to larger devices.

<div class="summary">

### Height

</div>

<div class="details">

Most responsive techniques target width, but it is possible to target device heights:

    @media (min-height: 568px) {
      /* anything as high or higher than the iPhone 5 */
    }

Height and width can also be used together in the media query:

    @media (min-height: 568px) and (min-width:320px) {
      /* anything as high or higher than the iPhone 5 */
    }

**Note:** Relying on height-based media queries can be inconsistent, so most of the time it's better to let the content flow downward as the width of the device gets smaller.

</div>

<div class="summary">

### Common breakpoints

</div>

<div class="details">

    320px — Mobile portrait
    480px — Mobile landscape
    600px — Small tablet
    768px — Tablet portrait
    940px - 1024px — Tablet landscape, netbook, small desktop
    1280px & greater — Desktop

These are just general guidelines. There are no set-in-stone rules, because new devices are being made and purchased all the time. Depending on the design and the scope of the project, you may need to target different resolutions and add media queries at different breakpoints. A responsive design should however, have at least 2-3 breakpoints to optimize for mobile phones, tablets and desktops/laptops.

</div>

>## EXERCISE: Basic Media queries
>
> Download <a href="exercises/module3/media-queries.html" download>media-queries.html</a> and open it in your editor.  
>
> In the `<head>` section, a media query has already been included. Add 2 more media queries to target mobile and tablet.
> Change the background color and test it to make sure it works!

    @media (max-width: 768px) {
      * { // select all
        outline: 1px solid red;
      }
    }  /* -- end 768px -- */

**Pro-tip:** Apply `outlines` in the CSS to see which media query you should be adding your styles to. Outlines are similar to the `border` property, but have no affect on the layout. It will look something like this in your CSS:

## Best Practices

Try not to use too many breakpoints! If you find that you have two media queries that are close in size to one another, see if you can move the styles from one or the other.

When writing media queries and adding responsive changes, only add the specific CSS property that needs to be changed. No need to repeat styles.

    .wrapper {
      width: 100%;
      max-width: 1140px;
      font-family: Helvetica, Arial, sans-serif;
      background: white;
      padding: 40px;
    }

    @media (max-width: 940px) {
      .wrapper {
        padding: 20px 30px;
      }
    }

### Testing Mobile in the Browser

When creating mobile friendly sites, it’s always best to test on an actual device. However, there are a lot of interesting tools available to allow us to test in the browser.

Chrome has an emulator built right into the dev tools!

![]({{ site.img }}/module3/chrome-emulator.png)




>## EXERCISE: Responsive Web page
> Download the responsive exercise [here](exercises/module3/responsive.zip) (zip file). This also includes the solutions file.
>
> Follow the instructions in the comments in the `<head>` of **responsive.html** to make the 3 columns fluid and responsive.


>## EXERCISE: Making Your Website Responsive
> Continue working on your website's layout. If you have it working on desktop, try creating some media queries to improve the layout as you resize the browser.
>**Don't forget the [Viewport Metatag](#viewport-meta-tag)!**
>* Change 2 column layouts into a single column
>* Decrease the font size of headings
>* Want a mobile menu? We will cover this in the jQuery module!


Responsive Design Resources

* [Free device emulator](http://lab.maltewassermann.com/viewport-resizer/)
* [Responsive images](https://internetingishard.com/html-and-css/responsive-images/)
* [Responsive design framework: Foundation](https://foundation.zurb.com/)
* [Try a book! From the A Book Apart series](https://abookapart.com/products/responsive-web-design)
* [10 Responsive design problems and fixes](http://uxmag.com/articles/10-responsive-design-problems-and-fixes)

~ End ~
