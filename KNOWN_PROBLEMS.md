# Know problems

## Failed sockets connections

### Problem

Currently HTTP post requests are sent to api/signUps on form submit in the StaffLoginPage and the PatientLoginPage. Sockets are only connected subsequently in the Patient/StaffPage. If the sockets fail to connect the user remains on the page but will not receive socket messages, the main point of this app.

### Solution

Separate logic connecting to sockets from sockets UI. Connect to sockets in LoginPages after form submit, where we can query backend for UUID but before the HTTP post request is sent. We can then prevent the post request if the sockets do not connect.

## Limited UI

### Problem

The current UI doesn't allow for users or staff to be added. This must be done by sending requests directly to the backend via a HTTPrequest mocker, such as Postman. There is also no flexibility with regards to which staff member each patients get appointments. They are only allocated appointments with their primary provider as set when signing up. Similarly, rooms are allocated based on first available room as opposed to matching room type with staff's need.

### Solution

This is by design. The project focuses on the instant messaging aspect of the app. One could imagine that in a retail level app there would also be a separation of concerns between the instant messaging aspect and the secretarial/administrative aspects. I have demonstrated these skills in other projects. I plan of writing a script that can be run to populate a DB with dummy data.

## Late update message

### Problem

The name of the staff member is currently displayed in whichever casing it is stored in the DB, generally lower case. It must be converted to Title Casing.

### Solution

Add utility function which converts to Title casing. Call it, either before the data is entered into the DB or before it is rendered in UI.

```JS
name =  name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
```
