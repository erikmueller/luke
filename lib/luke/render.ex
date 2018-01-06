defmodule Luke.Render do
  require EEx

  @template_dir "lib/luke/templates/"

  # generate a function definition (`index`) from file contents accepting an `html` prop
  EEx.function_from_file(:def, :index, @template_dir <> "index.html.eex", [:html])
end
