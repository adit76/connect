# The HTML

This project is built using HTML5 on top of Bootstrap framework.
This project has two pages:

* [`index.html`](#indexhtml) - The Landing Page for this website
* `404.html` - a placeholder 404 error page

## `index.html`

### The order of the `<title>` and `<meta>` tags

The charset declaration (`<meta charset="utf-8">`) must be included completely
within the [first 1024 bytes of the
document](https://html.spec.whatwg.org/multipage/semantics.html#charset)
and should be specified as early as possible (before any content that could be
controlled by an attacker, such as a `<title>` element) in order to avoid a
potential [encoding-related security
issue](https://code.google.com/archive/p/doctype-mirror/wikis/ArticleUtf7.wiki)
in Internet Explorer

### Packages and Includes Used in this Project

* Bootstrap 5.0
* Owl Carousel 2.3.4
* Font Family (GalaxieCopernicus and Inter-Regular)
* Jquery 3.5.1
* GSAP (TweenMax 2.1.3, CSSPlugin 2.1.2, ScrollMagic 2.0.7)

### Meta Tags

The `description` meta tag provides a short description of the page. In some
situations this description is used as a part of the snippet shown in the search
results.
The `keywords` meta tag provides a list of important site defining words. This includes the site's main-title, video titles, important words.

```html
<meta name="description" content="This is a description">
<meta name="keywords" content="connect, learn, header-titles">
```

Google's [Create good meta
descriptions](https://support.google.com/webmasters/answer/35624?hl=en#meta-descriptions)
documentation has useful tips on creating an effective description.

### Mobile Viewport

Required for responsive design.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

If you want to take advantage of edge-to-edge displays of iPhone X/XS/XR you
can do so with additional viewport parameters. [Check the WebKit
blog](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) for
details.

### Open Graph Metadata

The [Open Graph Protocol](https://ogp.me/) allows you to define the way your
site is presented when referenced on third party sites and applications
(Facebook, Twitter, LinkedIn). The protocol provides a series of meta elements
that define the details of your site. The required attributes define the title,
preview image, URL, and [type](https://ogp.me/#types) (e.g., video, music,
website, article).

``` html
<meta property="og:title" content="">
<meta property="og:type" content="">
<meta property="og:url" content="">
<meta property="og:image" content="">
```

In addition to these four attributes there are many more attributes you can use
to add more richness to the description of your site. This just represents the
most basic implementation.

To see a working example, the following is the open graph metadata for the HTML5
Boilerplate site. In addition to the required fields we add `og:description` to
describe the site in more detail.

``` html
<meta name="og:url" content="https://html5boilerplate.com/">
<meta name="og:title" content="HTML5 ★ BOILERPLATE">
<meta name="og:type" content="website">
<meta name="og:description" content="The web’s most popular front-end template which helps you build fast, robust, and adaptable web apps or sites.">
<meta name="og:image" content="https://html5boilerplate.com/icon.png">
```

### Web App Manifest

HTML5 Boilerplate includes a simple web app manifest file.

The web app manifest is a simple JSON file that allows you to control how your
app appears on a device's home screen, what it looks like when it launches in
that context and what happens when it is launched. This allows for much greater`
control over the UI of a saved site or web app on a mobile device.

It's linked to from the HTML as follows:

```html
<link rel="manifest" href="site.webmanifest">
```

### Favicons and Touch Icon

The shortcut icons should be put in the root directory of your site.
`favicon.ico` is automatically picked up by browsers if it's placed in the root.
HTML5 Boilerplate comes with a default set of icons (include favicon and one
Apple Touch Icon) that you can use as a baseline to create your own.

Please refer to the more detailed description in the [Extend section](extend.md)
of these docs.




### Modernizr

HTML5 Boilerplate uses a custom build of Modernizr.

[Modernizr](https://modernizr.com/) is a JavaScript library which adds classes
to the `html` element based on the results of feature test and which ensures
that all browsers can make use of HTML5 elements (as it includes the HTML5
Shiv). This allows you to target parts of your CSS and JavaScript based on the
features supported by a browser.

Starting with version 3 Modernizr can be customized using the
[modernizr-config.json](https://github.com/h5bp/html5-boilerplate/blob/master/modernizr-config.json)
and the [Modernizr command line
utility](https://www.npmjs.com/package/modernizr-cli).


### Google Universal Analytics Tracking Code

An optimized version of the Google Universal Analytics tracking code is
included.

We use `analytics.js` rather than the newer `gtag.js` as [it's faster and
supports tasks and
plugins](https://github.com/philipwalton/analyticsjs-boilerplate/issues/19#issuecomment-333714370)

Starting with version 8.0.0 we, by default, [anonymize IP
addresses](https://support.google.com/analytics/answer/2763052). By
default Google Analytics records the full IP address of a user visiting the
site, but that full IP address is never available to the Google Analytics
property admin. By anonymizing the IP address you can make your site more
GDPR-compliant as a full IP address can be defined as PII (personally
identifiable information.)

The beacon transport mechanism is used to send all hits [which saves HTTP
requests and improves
performance](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/#loading-analytics.js).

Google recommends that this script be placed at the top of the page. Factors to
consider: if you place this script at the top of the page, you’ll be able to
count users who don’t fully load the page, and you’ll incur the max number of
simultaneous connections of the browser.

Please be aware that while Google [states that it is fully GDPR compliant](https://privacy.google.com/businesses/compliance/),
it is still possible to use analytics to violate GDPR.

Further information:

* [Introduction to
  Analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
* [Google Analytics Demos & Tools](https://ga-dev-tools.appspot.com/)
* [Privacy Controls in Google Analytics](https://support.google.com/analytics/answer/9019185)

**N.B.** The Google Analytics snippet is included by default mainly because
Google Analytics is [currently one of the most popular tracking
solutions](https://trends.builtwith.com/analytics/Google-Analytics) out there.
However, its usage isn't set in stone, and you SHOULD consider exploring the
[alternatives](https://en.wikipedia.org/wiki/List_of_web_analytics_software) and
use whatever suits your needs best.



#### #### #### #### #### #### ####
####     Into the Code Now    ####
#### #### #### #### #### #### ####

Initially the site was divided into two section [CONNECT] and [LEARN]. But for better animation implementations they have further been split into multiple sections differentiated by className. The HTML has been commented properly so finding code should not be that hard.  First, Let's list individual components which can be used later on on any pages:

* Slider Componnent (Used in Our Members Section, Categories Section and Featured Resources Section)
* Button Component
* Section Header with Animation
* Promotion Section 
* HR for section breaker