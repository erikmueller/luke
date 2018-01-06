defmodule Luke do
  use Application

  def start(_type, _opts) do
    Supervisor.start_link(__MODULE__, [], name: __MODULE__)

    children = [
      # The Plug adapter provides a child spec for supervised use
      # so we don't hav e to implement it by hand
      Plug.Adapters.Cowboy.child_spec(:http, Luke.Router, [], [port: 4001]),
      Luke.Repo
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Luke.Supervisor)
  end
end
