defmodule Luke.ReactRouter do
  use Plug.Router
  alias Luke.Render

  plug :match
  plug :dispatch

  get "*_path" do
    location = case conn.query_string do
      "" -> conn.request_path
      qs -> conn.request_path <> "?" <> qs
    end

    %{"html" => html, "context" => %{"status" => status}} = StdJsonIo.json_call!(
      %{
        "component" => "web/react-router.js",
        "props" => %{
          "location" => location
        }
      }
    )

    conn |> send_resp(status || 200, Render.index(html))
  end
end
