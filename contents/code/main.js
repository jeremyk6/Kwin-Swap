/*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.

* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.

* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

registerUserActionsMenu(function (client) {
    "use strict";
    items = []
    workspace.clientList().forEach(function (c) {
        if(c.specialWindow == false)
            items.push({
                text: c.caption,
                triggered: function () {
                    c.geometry = [client.geometry, client.geometry = c.geometry][0]
                    client.minimized = c.minimized
                    c.minimized = false
                    workspace.activeClient = c
                }
            })
    });
    return {
        text : "Swap with",
        items : items
    }
});
