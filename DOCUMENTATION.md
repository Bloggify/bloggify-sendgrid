## Documentation

You can see below the API reference of this module.

### Plugin Configuration

- **Object** `config`:
  - `key` (String): The Sendgrid API key.

### `send(data)`
Send an email.

#### Params

- **Object** `data`: An object containing the message object sent to Sendgrid, as [documented here](https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md).
In the Bloggify config you will have to provide the following data:

 - `key` (String): The SendGrid key.

#### Return
- **Promise** A promise resolving the result from Sendgrid.

