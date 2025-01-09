# TS
##extra info
- press cmd+p to search on vsc  
## startup
- To initiate tsconfig.json, type `tsc --init`
- To see available options in tsconfig.json, remove the value and press Ctrl+Space
## debugging
- You can go to Debug in VS Code, and click on 'launch debug ... something', then you can add  to the 'configurations' array's object, the following :-
- `      "preLaunchTask": "tsc: build - tsconfig.json",`
- This will tell our application to build our typescript files before running the application, using this config file.
- # Rayyan-TypeScript
