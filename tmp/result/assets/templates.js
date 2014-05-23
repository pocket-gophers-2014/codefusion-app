define('appkit/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h2 id='title'>Welcome to Ember.js</h2>\n\n{{outlet}}\n"); });

define('appkit/templates/component-test', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("{{#each}}\n  {{pretty-color name=this}}\n{{/each}}\n"); });

define('appkit/templates/components/pretty-color', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("Pretty Color: {{name}}\n"); });

define('appkit/templates/error', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Sorry, Something went wrong</h1>\n{{message}}\n<pre>\n{{stack}}\n</pre>\n"); });

define('appkit/templates/helper-test', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h3>My name is {{reverse-word name}}.</h3>\n"); });

define('appkit/templates/index', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<ul>\n{{#each}}\n  <li>{{this}}</li>\n{{/each}}\n</ul>\n"); });

define('appkit/templates/loading', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Loading...</h1>\n"); });