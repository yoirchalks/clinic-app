# Know problems

## Failed sockets connections

### Problem

Currently HTTP post requests are sent to api/signUps on form submit in the StaffLoginPage and the PatientLoginPage. Sockets are only connected subsequently in the Patient/StaffPage. If the sockets fail to connect the user remains on the page but will not receive socket messages, the main point of this app.

### Solution

Separate logic connecting to sockets from sockets UI. Connect to sockets in LoginPages after form submit, where we can query backend for UUID but before the HTTP post request is sent. We can then prevent the post request if the sockets do not connect.

## Limited UI

### Problem

The current UI doesn't allow for users or staff to be added. This must be done by sending requests directly to the backend via a ... such as Postman.

### Solution

This is by design. The project focuses on the instant messaging aspect of the app. One could imagine that in a retail level app there would also be a separation of concerns between the instant messaging aspect and the secretarial/administrative aspects. I have demonstrated these skills in other projects. I plan of writing a script that can be run to populate a DB with dummy data.
