# Overview

This project is using:

<table>
    <tbody>
        <tr>
            <td style="font-weight:bold" >Language: -></td>
            <td >TypeScript</td>
        </tr>
        <tr>
            <td style="font-weight:bold" >State Management:</td>
            <td>Redux</td>
            <td>Redux-toolkit</td>
        </tr>
         <tr>
            <td style="font-weight:bold" >Styles/UI Components:</td>
            <td>Material UI</td>
            <td>styled-components</td>
        </tr>
        <tr>
            <td style="font-weight:bold" >Testing:</td>
            <td>React testing library</td>
            <td>Jest</td>
        </tr>
        <tr>
            <td style="font-weight:bold" >Containerization:</td>
            <td>Docker</td>
        </tr>
        <tr>
            <td style="font-weight:bold" >HTTP client:</td>
            <td>axios</td>
        </tr>
    </tbody>
</table>

**Notes are the end of this file.**

# Set up

- Clone this repo via `git clone https://github.com/SallarBhutto/contact-list.git`

## Locally

- Step1: In the project directory run `npm install`
- Step2: Run `npm start` to run the project.

## Docker

- Step1: In the project directory run `docker build -t inventorum:latest .`
- Step2: Run `docker run --name inventorum -d -p 3000:3000 inventorum:latest`

## Build

- Run `npm run build` to build the project.

## Test

- Run `npm test` to start the test runner in watch mode.
- Run `npm test -- --coverage` for test coverage report.

# Notes

- path `/` has the contact page.
- path `/contacts` also has the contact page.
- Contact page has the search input, add button and contactList.
- Mui Icons and Public logo of inventorum instead of assests provided.
- Focused on architecture and reusability.
- Added test cases for few of the components as samples.
- Remaining items:
  - Search
  - Add and Edit contact
