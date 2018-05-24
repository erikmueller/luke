defmodule Mix.Tasks.Luke.Server do
  def run (_args) do
    Mix.Tasks.Run.run ["--no-halt"]
  end
end