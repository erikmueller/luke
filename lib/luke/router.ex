defmodule Luke.Router do
  use Plug.Router

  # serve static files and prefer *.br files if existent
  plug Plug.Static,
    at: "/static",
    from: "priv/static",
    brotli: true

  # Log requests obviously
  plug Plug.Logger,
    log: :info

  # To match a route and execute the appropriate handler we need
  # invoke the `:match` as well as the `dispatch` plug
  plug :match
  plug :dispatch

  # forward requests to appropriate router (plug)
  forward "/api", to: Luke.ApiRouter
  forward "/", to: Luke.ReactRouter
end
