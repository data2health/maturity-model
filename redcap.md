# Setting up the REDCap Project

In order to be allowed into the app (even in development), you'll need a record in the REDCap project `User` form.

## Creating the `User` Form

The `User` form is a record of all the users and their login info. To add new users, this form must be completed to grant them access.

The following fields are currrently being used in the app and can be modified to project needs.

RECORD_ID = 'record_id' (REDCap automatically makes this field)
EMAIL_ADDRESS = 'email'
ENTRY_CODE = 'entry_code'
APPROVED = 'approved'
FNAME = 'user_fname'
LNAME = 'user_lname'
The app uses the variable names `email` and `entry_code` to log in, which must be included in the form.
Additionally, there is an `approved` field, which validates whether the login is approved or not. If the variable is set to `false`, the login will fail.

The `User` form can also store additional information about the user which may or may not be used.
The app uses the `user_fname` and `user_lname`


-------

Adding models to the Maturity Models Survey app is straightforward.

1. Add a new `Form` to the [REDCap project](https://rcdev.iths.org/redcap_v9.4.2/Design/online_designer.php?pid=277) to represent the Model you'd like to add. 

Name the variables in the project uses the convention `<form_name>_q<question_num>_<short_name>`, and be sure to use `Multiple Radio Buttons (Single Answer)` as the type.

So for example, a form called `Example` could have variables of the form:
- `example_complete` (REDCap automatically makes this field)
- `example_q1_month_of_birth`
- `example_q2_fav_monty_python_joke`
- ...
