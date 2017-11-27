defmodule LukeTest do
  use ExUnit.Case
  doctest Luke

  test "greets the world" do
    assert Luke.hello() == :world
  end
end
