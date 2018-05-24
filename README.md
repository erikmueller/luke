# Luke

> The `react`ing `Cowboy`

This project is solely for fun and learning.
It uses a supervised cowboy plug adapter and creates a __very__ simplistic router.
All API calls are forwarded to the `ApiRouter` while the `ReactRouter` uses `react-stdio` with `std_json_io` to render react elements through a little `nodejs` process.

## Running

Make sure to run `mix deps.get` and `yarn` as well as `yarn build` before running `mix` to start the application.

## Development

You can run `yarn start` to have webpack recompile while you change files.

## Resources

* [react-stdio](https://github.com/mjackson/react-stdio) by Michael Jackson
* [std_json_io fork](https://github.com/chvanikoff/std_json_io/tree/refactoring) by Roman (chvanikoff) You should also read his awesome medium post about [refactoring this module](https://medium.com/@chvanikoff/lets-refactor-std-json-io-e444b6f2c580)
* Overstuffed Gorilla(s) blog post about [Rendering React with phoenix](http://blog.overstuffedgorilla.com/render-react-with-phoenix/)
