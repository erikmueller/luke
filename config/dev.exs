use Mix.Config

config :luke, Luke.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "luke_repo_dev",
  username: "postgres",
  password: "",
  hostname: "localhost"