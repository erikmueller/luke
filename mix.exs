defmodule Luke.Mixfile do
  use Mix.Project

  def project do
    [
      app: :luke,
      version: "0.1.0",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:cowboy, :plug, :logger, :std_json_io],
      mod: {Luke, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:cowboy, "~> 1.0.4"},
      {:plug, "~> 1.4.3"},
      {:std_json_io, git: "https://github.com/chvanikoff/std_json_io", branch: "refactoring"},
      {:postgrex, ">= 0.0.0"},
      {:ecto, "~> 2.1"}
    ]
  end
end
