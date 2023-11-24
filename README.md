# ESG Tracker

## About

An app for investors, regulators, and individuals to explore companies' ESG and other relevant data. From their perspective, they can see important information such as:
- ESG scores
- The country they are located in
- The industry they are active in
- Their market capitalization 

A filtering function is also present whenever they need to find a company that matches their specific criteria. If more information is needed, the specific company page can be accessed.

In addition, users can add their favourite company to their favourites list by clicking the heart button for later reference. If they decide to change their mind, they can remove it from that list.

From the companies perspective, they can register their ESG information by clicking the "Add Company" button where they can input all the relevant information. If something changes within their profile, they can always edit their information and even delete their profile when needed. 

At the bottom of the homepage, a map is also present to visualize the location of each company. 

## Steps to run the app locally

1. Fork this repo and clone it
2. Navigate to this directory and run the following codes:
    ```bash 
    npm install 
    code -r .
    ```
3. Once opened, install the following dependencies:
    ```bash
    npm install react-router-dom 
    npm install react react-dom leaflet 
    npm install react-leaflet
    ```
4. Once all the previous steps have been completed, type this code to enable the app to run locally on your browser:
    ```bash
    npm run dev
    ```
Please note that this app has a .env file which houses the url for the API. If not present, follow the steps bellow:

1. Create a .env file in the root/directory folder
2. Create a variable called VITE_API_URL and store this link:

    "https://json-esg-tracker.adaptable.app/companies"

3. When completed, it shoud look like this:
    ```bash
    VITE_API_URL = "https://json-esg-tracker.adaptable.app/companies"
    ```

## Demo 

https://esg-tracker.netlify.app/

## Pages

1. Index page: to show companies list and filters (for all)
2. Detail page: company information (for all)
3. Add post page (for companies)
4. Edit/delete post page (for companies)
5. Saved companies page (for users)

## DB Structure
- name
- id
- description
- logo
- location
    - region
    - country
    - city
    - address
    - postcode
- industry
- ESG
    - e_index
    - s_index
    - g_index
- marketCap


## Milestones

### Milestone 1
- [x] Initial project setup on GitHub
- [x] Backend API with 10 companies (JSON Server)
    - [x] Initial setup on VSCode with JSON data (.env PORT=5005)
    - [x] Testing API with Postman (get, post, put, delete)
- [x] React App structure on VSCode (routes, components, dependencies)
    - [x] Index page 
    - [x] Detail page
    - [x] Add post page
    - [x] Edit/delete post page
    - [x] Favourites page

### Milestone 2

- [x] Fetching data from API 
    - [x] Index page: displaying companies list
    - [x] Detail page: displaying companies details
    - [x] Post page
        - [x] Fetching data
        - [x] Display forms
        - [x] Event handler
        - [x] POST request
    - [x] Edit/delete page
        - [x] Fetching data
        - [x] Display forms
        - [x] Event handler
        - [x] POST request
    - [x] Favourites page
        - [x] Fetching data
        - [x] Filtering data (.filter method)
        - [x] Displaying information on favourites page
        - [x] Delete company

### Milestone 3
- [x] Implement navigation functionalities
    - [x] Navbar (logo, home, favourites, add company, my company)
    - [x] Footer
- [x] Styling with CSS
    - [x] Styling button in favourites page -> M
    - [x] Styling histograms colors -> J
    - [x] Homepage Cards -> M
    - [x] Company page -> M
- [x] Making the app responsive
    - [x] Add mobile navigation (toggle burger menu) -> J

## Bonuses
- [x] Filtering, search queries
    - [x] Industry, ESG -> M
    - [x] Heart effect, when company adds to the favourites -> M
- [x] Histogram for the ESG scores

## Minor fixes
- [x] Add 10 companies to API -> J
- [x] Implementing map with companies -> M
- [x] Homepage intro module (icons)
    - [x] Copyrighting -> J
    - [x] JSX structure -> M
- [x] Add ESG index to company page -> J
- [x] Adjust edit/creat forms style -> M



## Resources
- https://www.esgbook.com/insights/esg-insights/esg-book-top-100/



