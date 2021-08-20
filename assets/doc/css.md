# The CSS

SASS is used as the preprocessor for this Project. The preprocessor generates a single [main.css] file (for the landing page only). Each component usually has it's own responsive code therefore can be reused as individial components all across the website. Other CSS files further down the road needs to be separated for optimum Performance.

This project includes the follwing CSS files:

* [main.scss]
* [_style.scss] (Which is eventually imported in main.css)


## main.scss

This is the primary CSS file for this project. All the base styles and declarations are done in this file.
These styles:

* Variable Declarations
* Basic styling and components reused multiple times.
* Custom Container and Grid System (Check HTML for Reference)
* Fonts 
* Button
* Importing other CSS Files

## _style.scss

This is the second CSS file for this project primarily meant for the landing page. All the styling specific to landing page is done in this file.
These styles:

* The first half of the code Until [connect-section] starts has base styling and common components across multiple sections like Section Title, Section Sub-Title, etc
* The rest of the code is divided as per specific sections
* Image wrapper with Custom borders for certain sections (For Better Aniamtion)
* Basic Gapping and Styling to meet design look and feel
* Slider Styling (2 Variants of Slider => Full slider[primary-slider-full] and Featured SLider [featured-slider])
* Slider Item styling for 2 variants


