# ESG Tracker

## MVP

An app for investors, regulators, and individuals to explore companies' ESG and other relevant data. Companies can register their ESG information. Users can filter and save preferred companies.

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
- [x] Making the app responsive
    - [x] Add mobile navigation (toggle burger menu) -> J

## Bonuses
- [x] Filtering, search queries
    - [ ] Industry, ESG -> M
    - [ ] Heart effect, when company adeed to the favourites -> M
    - [ ] ? Sorting
- [x] Histogram for the ESG scores
- [ ] Best featured companies for different categories (E,S,G) -> J
- [ ] Implementing map with companies
- [ ] ? Company contact form on detail page
- [ ] ? Graphs/tables


## Resources
- https://www.esgbook.com/insights/esg-insights/esg-book-top-100/



