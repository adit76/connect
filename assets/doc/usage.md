[HTML5 Boilerplate homepage](https://html5boilerplate.com/) | [Documentation
table of contents](TOC.md)

# Usage

The index.html is the landing page of this project. CSS Files [main.scss], [_styles.scss] are used for styling along with bootstrap for Structuring. Primary JS Files [main.js] and [animations.js] are used for scritping. Assets like fonts and images is included in the header. index.html can be used as reference to create new pages. All the assests must be included to start working on a new page. 

## Basic structure

The Basic Structure of the project looks something like this:

```
.
|──assets├── css
│        |   ├── main.scss
│        |   └── _style.scss
|        ├── doc
|        ├── fonts
|        ├── img
|        ├── js
|        │   ├── main.js
|        |   ├── animations.js
|        │   ├── plugins.js
|        │   └── vendor
|        │       └── modernizr.min.js
├── .editorconfig
├── .htaccess
├── 404.html
├── browserconfig.xml
├── favicon.ico
├── humans.txt
├── icon.png
├── index.html
├── package.json
├── robots.txt
├── site.webmanifest
├── tile.png
└── tile-wide.png
```

What follows is a general overview of each major part and how to use them.

### css

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.md).

### doc

This directory contains all the Project documentation. You can use it
as the location and basis for your own project's documentation.

### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### .htaccess

The default web server configs are for Apache. For more information, please
refer to the [Apache Server Configs
repository](https://github.com/h5bp/server-configs-apache).

Host your site on a server other than Apache? You're likely to find the
corresponding server configs project listed in our [Server
Configs](https://github.com/h5bp/server-configs/blob/master/README.md)
repository.

### 404.html

Error page

### browserconfig.xml

This file contains all settings regarding custom tiles for IE11 and Edge.

For more info on this topic, please refer to [Microsoft's
Docs](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)).

### .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your
team to maintain consistent coding styles between different editors and IDEs.
[Read more about the `.editorconfig` file](misc.md#editorconfig).

### index.html

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Universal Analytics, make sure that you edit the
corresponding snippet at the bottom to include your analytics ID.

### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### package.json

Edit this file to describe your application, add dependencies, scripts and
other properties related to node based development and the npm registry

### robots.txt

Edit this file to include any pages you need hidden from search engines.

### Icons

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch
Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).
