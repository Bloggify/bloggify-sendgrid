## Documentation

You can see below the API reference of this module.

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

