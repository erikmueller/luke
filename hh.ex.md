---
title: Luke
theme: black
revealOptions:
    controls: false
    transition: 'slide'
---

# Luke

Render React Elements with Cowboy and Plug

<small>or how to make cowboy take milliseconds to respond</small> <!--.element: class="fragment" -->

---

## Plug in Baby
<ul>
  <li class="fragment">`Plug.Adapter` for the cowboy web server</li>
  <li class="fragment">Convient `child_spec` for being supervised </li>
  <li class="fragment">`Plug.Router` entrypoint</li>
</ul>

---

## The Router

Plug bundles different plugs and macros

<ul>
  <li class="fragment">`Plug.Static`</li>
  <li class="fragment"> `Plug.Logger`</li>
  <li class="fragment"> `:match` and `:dispatch`</li>
</ul>

---

## Route Splitting

```
  forward "/api", to: Luke.ApiRouter
  forward "/", to: Luke.ReactRouter
```

---

## The API

```elixir
defmodule Luke.ApiRouter do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/" do
    conn |> send_resp(200, "soon to be api resp")
  end
 
  match _ do
    conn |> send_resp(501, "Not implemented")
  end
end
```

---

# Rendering

<ul>
<li>Rendering: <span class="fragment">Fork of `react-stdio`</span></li>
<li>Routing:  <span class="fragment">`react-router@4`</span></li>
<li>Communicating: <span class="fragment">`StdJsonIo`</span></li>
</ul>

---

# Workings

<pre>
  <span class="fragment">Conn</span>
  <span class="fragment">  |> Plug.Router</span>
  <span class="fragment">  |> Luke.ReactRouter</span>
  <span class="fragment">  |> StdJsonIo(component, props)</span>
  <span class="fragment">  --- nodejs ---</span>
  <span class="fragment">  JSONStream |> React.renderToString() |> JSONStream</span>
  <span class="fragment">  --- nodejs ---</span>
  <span class="fragment">  |> Luke.ReactRouter</span>
  <span class="fragment">  |> send_resp</span>
</pre>

---

`react_router.ex`

```elixir
%{"html" => html, "context" => context} = 
  StdJsonIo.json_call!(
    %{
      "component" => "priv/react-router.js",
      "props" => %{
        "location" => location
      }
    }
  )
```

---

`react-router.js`

```js
const context = {}

const Router = ({ location }) => (
  <StaticRouter location={location} context={context}>
    <App />
  </StaticRouter>
)

Router.context = context
module.exports = Router
```

---

# Routing and ctx


```js 
const App = () => (
  <Switch>
    ...
    <Route component={NotFound} />
  </Switch>
)
```


```js
const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404

  return <h3>Sorry, we took a wrong turn.</h3>
}
```
<!--.element: class="fragment" -->

---

# TIL

- Foundations: No Phoenix <!--.element: class="fragment" -->
- Supervisors and child specs <!--.element: class="fragment" -->
- Power and simplicty of Plug <!--.element: class="fragment" -->

---

# TBC

- Database <!--.element: class="fragment" -->
- Async data fetching during render <!--.element: class="fragment" -->
- Having @mjackson merge my PR <!--.element: class="fragment" -->