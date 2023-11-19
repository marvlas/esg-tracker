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
    - [ ] Edit/delete page
        - [ ] Fetching data
        - [ ] Display forms
        - [ ] Event handler
        - [ ] POST request
    - [ ] Favourites page
        - [ ] Fetching data
        - [ ] Filtering data (.filter method)
        - [ ] Displaying information on favourites page
        - [ ] Delete company

### Milestone 3
- [ ] Implement navigation functionalities
    - [ ] Navbar (logo, home, favourites, add company, my company)
    - [ ] Social media section
    - [ ] Footer
- [ ] Styling with CSS
- [ ] Making the app responsive

## Bonuses
- [ ] Filtering, search queries
- [ ] Best featured companies for different categories (E,S,G) 
- [ ] Implementing map with companies
- [ ] Company contact form on detail page
- [ ] Histogram for the ESG scores
- [ ] Graphs/tables


## Resources
- https://www.esgbook.com/insights/esg-insights/esg-book-top-100/



