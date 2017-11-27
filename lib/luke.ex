defmodule Luke do
  use Application

  def start(_type, _opts) do
    Supervisor.start_link(__MODULE__, [], name: __MODULE__)

    children = [
        Plug.Adapters.Cowboy.child_spec(:http, Luke.Router, [], [port: 4001])
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Luke.Supervisor)
  end
end
