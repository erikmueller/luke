defmodule Luke.ReactRouter do
  use Plug.Router
  alias Luke.Render

  plug :match
  plug :dispatch

  get _ do
    case StdJsonIo.json_call(%{
      "component" => "web/react-router.js",
      "props" => %{
        "location" => conn.request_path
      }
    }) do
      {:ok, %{"html" => html, "context" => context}} ->
        send_resp conn, context["status"] || 200, Render.index(html)
      {:error, %{"message" => message}} ->
        send_resp conn, 500, Render.index(message)
      {:error, error} ->
        send_resp conn, 500, Render.index(error)
    end
  end
end
