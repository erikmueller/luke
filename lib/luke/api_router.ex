defmodule Luke.ApiRouter do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/" do
    conn |> send_resp(200, "soon to be api resp")
  end

  # should be handled by the react router later
  match _ do
    conn |> send_resp(404, "We should not have ended up here.")
  end
end
