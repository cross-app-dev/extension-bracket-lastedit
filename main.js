/** Simple extension that adds a "Navigate > LastEdit" menu item */
define(function (require, exports, module) {
    "use strict";

    /* Load command manager module from Bracket core as well as menu module.*/
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        MY_COMMAND_ID = "algonquinlive.maad.show0017.lastedit",  // package-style naming to avoid collisions
        Menus         = brackets.getModule("command/Menus"),
        menu          = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);


    // Function to run when the menu item is clicked or corresponding keys are pressed.
    function lastEditHandler() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange("Hello, world!", insertionPos);
        }
    }

    // First, register a command - a UI-less object associating an id to a handler
    CommandManager.register("Last Edit", MY_COMMAND_ID, lastEditHandler);
    
    // Then create a menu item bound to the command
    // The label of the menu item is the name that we used during regisertation of our new command.

    //menu.addMenuItem(MY_COMMAND_ID);

    // We could also add a key binding at the same time.
    /*Note: "Ctrl" is automatically mapped to "Cmd" on Mac)*/
    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Opt-H");
});
