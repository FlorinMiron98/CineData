# CineData - Testing

## [Main README.md File](https://github.com/FlorinMiron98/CineData/blob/main/README.md)

## Table of Contents
1. [Validator Testing](#validator-testing)
2. Performance, Accessibility and Best Practices Testing
3. Manual Testing
4. Bugs

## Validator Testing
1. [W3C Markup Validator](https://validator.w3.org/)
Some validation errors or warnings may appear when checking the HTML files. These are expected and are due to the use of Jinja2 templating syntax. Since the W3C validator analyzes static HTML, it does not recognize or process Jinja2 syntax, which is rendered dynamically by the Flask backend. As a result, it may incorrectly flag these template tags as errors.
When rendered in the browser via Flask, the templates output valid HTML. Therefore, these validation errors can be safely ignored during development. If needed, templates can be tested by:
- Rendering them in the browser
- Viewing the page source
- Copying the rendered HTML into the W3C validator
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
The result for CSS file checking is "Congratulations! No Error Found."

![css-validator](https://github.com/user-attachments/assets/78b74670-5a6b-4108-beea-30480a1bc9ca)

