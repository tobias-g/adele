# Adele

> 🎺 Hello from the other side

A client side library for sending errors to your backend API.

## Usage

Instantiate `adele` and it will send a `POST` request of any unhandled exceptions to the configured `endpoint`.

```
adele({
  endpoint: 'https://example.com/api/browser/logs',
  accessKey: 'foobar'
});
```
