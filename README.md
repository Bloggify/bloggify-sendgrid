
# bloggify-sendgrid

 [![Version](https://img.shields.io/npm/v/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid) [![Downloads](https://img.shields.io/npm/dt/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid)

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



## :scroll: License

[MIT][license] © [Bloggify][website]

[license]: http://showalicense.com/?fullname=Bloggify%20%3Csupport%40bloggify.org%3E%20(https%3A%2F%2Fbloggify.org)&year=2016#license-mit
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
