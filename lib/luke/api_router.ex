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
