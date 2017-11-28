defmodule Luke.Render do
  require EEx

  @template_dir "lib/luke/templates/"

  EEx.function_from_file(:def, :index, @template_dir <> "index.html.eex", [:html])
end
