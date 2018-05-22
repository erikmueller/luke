defmodule Luke.ApiRouter do
  use Plug.Router

  plug :match
  plug :dispatch

  match _ do
    send_resp conn, 501, "Not implemented"
  end
end
