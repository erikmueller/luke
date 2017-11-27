defmodule Luke.ReactRouter do
  use Plug.Router

  plug :match
  plug :dispatch

  match _ do
    location = case conn.query_string do
      "" -> conn.request_path
      query_string -> conn.request_path <> "?" <> query_string
    end

    %{"html" => html} = StdJsonIo.json_call!(
      %{
        "component" => "priv/main.js",
        "props" => %{
          "location" => location
        }
      }
    )

    conn |> send_resp(200, html)
  end
end
