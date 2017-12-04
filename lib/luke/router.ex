defmodule Luke.Router do
  use Plug.Router

  plug Plug.Static,
    at: "/static",
    from: "priv/static",
    brotli: true
  plug Plug.Logger,
    log: :debug
  plug :match
  plug :dispatch

  forward "/api", to: Luke.ApiRouter
  forward "/", to: Luke.ReactRouter

  match _ do
    conn |> send_resp(404, "Not found")
  end
end
