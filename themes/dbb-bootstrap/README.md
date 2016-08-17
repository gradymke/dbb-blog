# dbb-bootstrap

DBB-Bootstrap is a [Hugo](https://github.com/spf13/hugo) (a fast and modern
static website engine) theme specific to DogsButtBrew.com.

### Dependencies

DBB-Bootstrap needs at least version 0.16 of Hugo, as it uses features such as partials
from before, but could use other stuff that is not available earlier.

### Partials

There are a few partials that is of great interest to override

#### author

The author partial is added at the end of each single page (such as blog posts) and by default only prints the name of the author registered in the site params, e.g. in your `config.toml`

    [params]
        author = "Markus"

In order to override and have your own markup appended to single pages, just create the file `layouts/partials/author.html` and roll your own.

### Shortcodes

Liquorice comes with these additional shortcodes:


#### <<Put shortcode here>>

# License

DBB-Bootstrap has no license. Copy it and take it as your own if you want.
