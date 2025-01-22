# Cyber App

This is the frontend part of the application built using **React.js**. It includes user interfaces for managing users, events, and other resources.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ihumza/cyber-app
   cd cyber-app
   ```

Install dependencies:

```bash
npm install
```

Run the app

```bash
npm run dev
```

The app should be running on http://localhost:5173.

## Application Architecture

The application follows a component-based architecture to ensure modularity, reusability, and scalability. Key aspects include:

### Component Structure:

The application is divided into small, reusable React components, ensuring easy maintenance and updates.
Example components include Listings, and Forms and also Layout Components like Sidebar under the components/app.

### State Management:

Have implemented Redux Toolkit to validate the authenticated user to prevent unauthorized access further state management can be done according to needs in future

### Routing:

The use of protected routes prevent unauthorized access to routes.

### API Integration:

Axios is used to handle API calls with a centralized service utility (DataService).
CRUD operations for users and events are mapped to RESTful endpoints.

### Styling:

It is completely built from scratch, Styled with Tailwind CSS and shadcn components for consistent and modern design. It is also mobile responsive.

## Handling Additional Features

Approach to Incomplete Requirements
When implementing features with incomplete requirements, the following steps were taken:

**Understand Core Intent:**
Focused on the essential functionality (e.g., CRUD operations for events, pagination) based on general application needs.

**Iterative Development:**
Designed flexible and extendable components, allowing for easy modifications once requirements are clarified.

## Assumptions

While implementing the application, the following assumptions were made:

**Events:**

- Events require a title, description, date, and associated users and their reminders were also listed on the Event Details page.
- Added the public/private events to allow multiple event types

**Reminders:**

- To add reminders I used ReminderModal which use the event identifier to create reminders and add an optional message on reminders which will be sent via email to the respective users.
- Reminders will be shown on events detail page which can also be listed on separate menu of **Reminders** if needed.
