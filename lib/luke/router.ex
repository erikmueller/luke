defmodule Luke.Router do
  use Plug.Router

  plug Plug.Logger, log: :debug

  plug :match
  plug :dispatch

  forward "/api", to: Luke.ApiRouter
  forward "/", to: Luke.ReactRouter
end
