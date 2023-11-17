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
- [ ] Backend API with 10 companies (JSON Server)
    - [x] Initial setup on VSCode with JSON data (.env PORT=5005)
    - [ ] Testing API with Postman (get, post, put, delete)
- [ ] React App structure on VSCode (routes, components, dependencies)
    - [ ] Index page 
    - [ ] Detail page
    - [ ] Add post page
    - [ ] Edit/delete post page
    - [ ] Favourites page

### Milestone 2

- [ ] Fetching data from API 
    - [ ] Index page: displaying companies list
    - [ ] Detail page: displaying companies details
    - [ ] Post page
        - [ ] Fetching data
        - [ ] Display forms
        - [ ] Event handler
        - [ ] POST request
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


## Resources
- https://www.esgbook.com/insights/esg-insights/esg-book-top-100/



