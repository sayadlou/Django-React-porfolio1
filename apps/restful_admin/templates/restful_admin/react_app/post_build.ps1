Copy-Item ".\build\index.html" -Destination "../" -Recurse -force
Copy-Item ".\build\static\" -Destination "../../.." -Recurse -force
