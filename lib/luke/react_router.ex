defmodule Luke.ReactRouter do
  use Plug.Router

  plug :match
  plug :dispatch

  match _ do
    %{"html" => html} = StdJsonIo.json_call!(
      %{
        "component" => "priv/main.js",
        "props" => %{
            "message" => "rendering...",
            "method" => conn.method ,
            "path" => conn.request_path,
            "query" => conn.query_string,
        }
      }
    )

    conn |> send_resp(200, html)
  end
end
