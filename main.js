/** Simple extension that adds a "Navigate > LastEdit" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus");


    // Function to run when the menu item is clicked
    function lastEditHandler() {
        window.alert("Hello, world!");
    }


    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "algonquinlive.maad.show0017.lastedit";   // package-style naming to avoid collisions
    CommandManager.register("Last Edit", MY_COMMAND_ID, lastEditHandler);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
    //menu.addMenuItem(MY_COMMAND_ID);

    // We could also add a key binding at the same time.
    /*Note: "Ctrl" is automatically mapped to "Cmd" on Mac)*/
    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Opt-H");
});
