defmodule Luke.Sensor do
  use Ecto.Schema

  schema "sensor" do
    field :timestamp, :naive_datetime
    field :temp, :integer
    field :humidity, :integer
  end
end