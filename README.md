Assignment 4: Forms and Validation

Student: Abdulmobin Rahmani
Group: IT-2503

1. Project Overview

This assignment demonstrates how to create HTML forms, validate user
input, style form elements with Bootstrap, and improve page appearance
with custom CSS. The project is divided into five tasks, from a basic
contact form to a registration form with JavaScript validation.

2. Learning Objectives

Create forms with labels and common input types.
Apply HTML5 validation attributes.
Use Bootstrap form controls, grid classes, and validation feedback.
Style forms with CSS and responsive media queries.
Use JavaScript to check password confirmation and display form
feedback.



4. Tasks and Implementation

Task 0 --- Simple Contact Form

A basic contact form contains: - Name - Email - Message - Submit button

Labels are associated with the corresponding form fields. This task
demonstrates the basic structure of an HTML form.

Screenshot

<img width="1272" height="444" alt="image" src="https://github.com/user-attachments/assets/7d8a6ccc-9eb4-4182-8a56-13c55f2606ad" />


Task 1 --- HTML5 Form Validation

The second form demonstrates built-in browser validation: - required
makes the name, email, and message mandatory. - type="email" asks the
browser to check the email format. - maxlength="50" limits the name to
50 characters. - maxlength="300" limits the message to 300 characters.

Screenshot
<img width="1186" height="421" alt="image" src="https://github.com/user-attachments/assets/9098840a-ccd8-4c14-9af9-cd300471e690" />


Task 2 --- Bootstrap Form Styling

This contact form uses Bootstrap classes and layout utilities. The name
and email fields share a row on medium and larger screens, while the
message field appears below them. Placeholders and helper text guide the
user.

Screenshot

<img width="1214" height="469" alt="image" src="https://github.com/user-attachments/assets/46024714-32c7-4389-8d2c-fdcf9128e4bf" />



Task 3 --- Bootstrap Validation Feedback

This task demonstrates visual validation states using: - is-valid for
fields shown as valid. - is-invalid for a field shown as invalid. -
valid-feedback for success feedback. - invalid-feedback for error
feedback.

The example displays a valid name, an invalid email field, and a valid
message field.

Screenshot

<img width="1224" height="443" alt="image" src="https://github.com/user-attachments/assets/22a91a47-4904-4f4d-86fd-a0ad114eea59" />



Task 4 --- Registration Form

The registration form includes: - First name and last name - Email
address - Password and confirmation password - Gender radio buttons -
Hobbies checkboxes - Country dropdown - Register and Reset buttons

The form uses Bootstrap's grid classes to arrange fields. Required
fields and an eight-character minimum password length are specified in
the HTML.

JavaScript checks whether the password and confirmation password match,
displays feedback for gender selection after validation begins, prevents
normal form submission, and shows a success alert when the form is
valid. The Reset button clears the form and its validation state.

Screenshot
<img width="1239" height="364" alt="image" src="https://github.com/user-attachments/assets/9aee630f-64d8-40dc-8024-58c53797e56d" />
<img width="1352" height="421" alt="image" src="https://github.com/user-attachments/assets/d17c6cfd-3a29-40fb-a86e-761d3173bd9e" />



5. Conclusion

This assignment provides practical experience with HTML forms,
browser-based validation, Bootstrap components, responsive CSS, and
JavaScript form validation. The five tasks demonstrate progressively
more advanced ways to collect information and provide feedback to users.
