
# bloggify-sendgrid

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid) [![Downloads](https://img.shields.io/npm/dt/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid)

> Bloggify plugin for sending emails via SendGrid.

## :cloud: Installation

```sh
$ npm i --save bloggify-sendgrid
```


## :clipboard: Example



```js
const Email = Bloggify.require("bloggify-sendgrid", true);

Email.send({
    to_email: "someone@domain.com"
  , from_email: "me@domain.com"
  , subject: "Hello world!"
  , template_id: "your template id"
  , substitutions: {
      "-name-": "Alice"
    }
}, (err, data) => {
    console.log(err || data);
});
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `bloggify:init(config)`

#### Params
- **Object** `config`:
  - `key` (String): The Sendgrid API key.

### `send(data, cb)`
Send an email.

#### Params
- **Object** `data`: An object containing the following fields:
 - `subject` (String): The email subject.
 - `from_email` (String): The `from` email.
 - `from_name` (String): The `from` name (optional).
 - `to_email` (String): The `to` email.
 - `to_name` (String): The `to` name (optional).
 - `template_id` (String): The SendGrid template id.
 - `substitutions` (Object): The template substitutions.

In the Bloggify config you will have to provide the following data:

 - `key` (String): The SendGrid key.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
