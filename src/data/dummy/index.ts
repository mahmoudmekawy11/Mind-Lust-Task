import { type Task, TaskCategory, TaskStatus } from "@/types/task.types";

export const DUMMY_TASKS: Task[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        title: "Build CRUD Page",
        description: "Implement basic CRUD operations for project tasks",
        assignedTo: "Miles",
        dueDate: "2025-10-31",
        estimatedHours: 5,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        title: "Create Dashboard",
        description: "Add charts showing task statistics",
        assignedTo: "Alex",
        dueDate: "2025-11-02",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        title: "User Authentication API",
        description: "Develop REST API endpoints for user login, registration, and password reset functionality",
        assignedTo: "Sarah",
        dueDate: "2025-11-05",
        estimatedHours: 8,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440004",
        title: "Database Schema Design",
        description: "Create normalized database schema for user management and task tracking",
        assignedTo: "Michael",
        dueDate: "2025-10-28",
        estimatedHours: 6,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440005",
        title: "Unit Tests for Task Service",
        description: "Write comprehensive unit tests covering all task service methods and edge cases",
        assignedTo: "Emma",
        dueDate: "2025-11-01",
        estimatedHours: 4,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440006",
        title: "Mobile Responsive Layout",
        description: "Optimize UI components for mobile devices and tablet screens",
        assignedTo: "David",
        dueDate: "2025-11-08",
        estimatedHours: 7,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440007",
        title: "Payment Integration",
        description: "Integrate Stripe payment gateway for subscription management",
        assignedTo: "Lisa",
        dueDate: "2025-11-12",
        estimatedHours: 12,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440008",
        title: "Performance Testing",
        description: "Conduct load testing and identify performance bottlenecks",
        assignedTo: "James",
        dueDate: "2025-11-03",
        estimatedHours: 5,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440009",
        title: "Data Migration Script",
        description: "Create scripts to migrate data from legacy system to new database",
        assignedTo: "Rachel",
        dueDate: "2025-10-30",
        estimatedHours: 10,
        category: TaskCategory.Db,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440010",
        title: "Search Functionality",
        description: "Implement advanced search with filters and sorting options",
        assignedTo: "Kevin",
        dueDate: "2025-11-06",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440011",
        title: "Design System Components",
        description: "Create reusable UI components following design system guidelines",
        assignedTo: "Sophie",
        dueDate: "2025-11-04",
        estimatedHours: 8,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440012",
        title: "API Documentation",
        description: "Write comprehensive API documentation using Swagger/OpenAPI",
        assignedTo: "Tom",
        dueDate: "2025-11-07",
        estimatedHours: 4,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440013",
        title: "Security Audit",
        description: "Perform security testing and vulnerability assessment",
        assignedTo: "Anna",
        dueDate: "2025-11-09",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440014",
        title: "Database Optimization",
        description: "Optimize database queries and add proper indexing",
        assignedTo: "Chris",
        dueDate: "2025-11-01",
        estimatedHours: 5,
        category: TaskCategory.Db,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440015",
        title: "Email Notification System",
        description: "Build automated email notifications for task updates",
        assignedTo: "Maya",
        dueDate: "2025-11-10",
        estimatedHours: 7,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440016",
        title: "Dark Mode Implementation",
        description: "Add dark mode theme support across all UI components",
        assignedTo: "Alex",
        dueDate: "2025-11-05",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440017",
        title: "Integration Testing",
        description: "Create end-to-end integration tests for critical user flows",
        assignedTo: "Ben",
        dueDate: "2025-11-08",
        estimatedHours: 8,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440018",
        title: "User Profile Management",
        description: "Develop user profile editing and avatar upload functionality",
        assignedTo: "Nicole",
        dueDate: "2025-11-03",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440019",
        title: "Backup Strategy",
        description: "Implement automated database backup and recovery procedures",
        assignedTo: "Mark",
        dueDate: "2025-10-29",
        estimatedHours: 4,
        category: TaskCategory.Db,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440020",
        title: "Loading States Design",
        description: "Design and implement loading skeletons and progress indicators",
        assignedTo: "Olivia",
        dueDate: "2025-11-02",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440021",
        title: "File Upload Service",
        description: "Create secure file upload service with virus scanning",
        assignedTo: "Ryan",
        dueDate: "2025-11-11",
        estimatedHours: 9,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440022",
        title: "Accessibility Compliance",
        description: "Ensure WCAG 2.1 AA compliance across all UI components",
        assignedTo: "Grace",
        dueDate: "2025-11-06",
        estimatedHours: 7,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440023",
        title: "Real-time Notifications",
        description: "Implement WebSocket-based real-time notifications",
        assignedTo: "Jake",
        dueDate: "2025-11-13",
        estimatedHours: 8,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440024",
        title: "Data Analytics Dashboard",
        description: "Create analytics dashboard with charts and metrics",
        assignedTo: "Zoe",
        dueDate: "2025-11-07",
        estimatedHours: 10,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440025",
        title: "Cache Implementation",
        description: "Add Redis caching layer for improved performance",
        assignedTo: "Lucas",
        dueDate: "2025-11-04",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440026",
        title: "Database Migration",
        description: "Migrate from MySQL to PostgreSQL for better performance",
        assignedTo: "Elena",
        dueDate: "2025-11-15",
        estimatedHours: 15,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440027",
        title: "Automated Testing Pipeline",
        description: "Set up CI/CD pipeline with automated testing",
        assignedTo: "Sam",
        dueDate: "2025-11-09",
        estimatedHours: 8,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440028",
        title: "Error Handling System",
        description: "Implement global error handling and logging system",
        assignedTo: "Diana",
        dueDate: "2025-11-01",
        estimatedHours: 5,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440029",
        title: "Component Library",
        description: "Build comprehensive component library with Storybook",
        assignedTo: "Adrian",
        dueDate: "2025-11-12",
        estimatedHours: 12,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440030",
        title: "Data Validation Layer",
        description: "Add server-side data validation and sanitization",
        assignedTo: "Mia",
        dueDate: "2025-11-03",
        estimatedHours: 4,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440031",
        title: "Multi-language Support",
        description: "Implement internationalization (i18n) for multiple languages",
        assignedTo: "Carlos",
        dueDate: "2025-11-14",
        estimatedHours: 9,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440032",
        title: "Performance Monitoring",
        description: "Set up application performance monitoring and alerting",
        assignedTo: "Lily",
        dueDate: "2025-11-05",
        estimatedHours: 5,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440033",
        title: "User Onboarding Flow",
        description: "Design and implement guided user onboarding experience",
        assignedTo: "Nathan",
        dueDate: "2025-11-08",
        estimatedHours: 7,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440034",
        title: "API Rate Limiting",
        description: "Implement rate limiting and throttling for API endpoints",
        assignedTo: "Sophia",
        dueDate: "2025-11-02",
        estimatedHours: 4,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440035",
        title: "Database Seeding",
        description: "Create database seeders for development and testing",
        assignedTo: "Oliver",
        dueDate: "2025-10-27",
        estimatedHours: 3,
        category: TaskCategory.Db,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440036",
        title: "Cross-browser Testing",
        description: "Test application compatibility across different browsers",
        assignedTo: "Isabella",
        dueDate: "2025-11-06",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440037",
        title: "Social Media Integration",
        description: "Add social login and sharing functionality",
        assignedTo: "Ethan",
        dueDate: "2025-11-10",
        estimatedHours: 8,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440038",
        title: "Typography System",
        description: "Establish consistent typography scale and components",
        assignedTo: "Ava",
        dueDate: "2025-11-01",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440039",
        title: "Logging Infrastructure",
        description: "Set up centralized logging with log aggregation",
        assignedTo: "Logan",
        dueDate: "2025-11-04",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440040",
        title: "Data Export Feature",
        description: "Allow users to export data in various formats (CSV, PDF, Excel)",
        assignedTo: "Chloe",
        dueDate: "2025-11-09",
        estimatedHours: 7,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440041",
        title: "Query Optimization",
        description: "Optimize slow database queries and improve response times",
        assignedTo: "Mason",
        dueDate: "2025-11-03",
        estimatedHours: 5,
        category: TaskCategory.Db,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440042",
        title: "Mobile App Testing",
        description: "Test mobile responsiveness and touch interactions",
        assignedTo: "Harper",
        dueDate: "2025-11-07",
        estimatedHours: 4,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440043",
        title: "Content Management System",
        description: "Build CMS for managing static content and pages",
        assignedTo: "Jackson",
        dueDate: "2025-11-16",
        estimatedHours: 14,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440044",
        title: "Animation Framework",
        description: "Implement smooth transitions and micro-interactions",
        assignedTo: "Aria",
        dueDate: "2025-11-05",
        estimatedHours: 6,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440045",
        title: "Session Management",
        description: "Implement secure session handling and timeout features",
        assignedTo: "Liam",
        dueDate: "2025-11-01",
        estimatedHours: 5,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440046",
        title: "Database Connection Pooling",
        description: "Optimize database connections with connection pooling",
        assignedTo: "Emma",
        dueDate: "2025-11-02",
        estimatedHours: 3,
        category: TaskCategory.Db,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440047",
        title: "Smoke Testing Suite",
        description: "Create automated smoke tests for critical functionality",
        assignedTo: "Noah",
        dueDate: "2025-11-04",
        estimatedHours: 4,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440048",
        title: "Notification Preferences",
        description: "Allow users to customize notification settings",
        assignedTo: "Charlotte",
        dueDate: "2025-11-08",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440049",
        title: "Grid System Implementation",
        description: "Create flexible grid system for layout consistency",
        assignedTo: "William",
        dueDate: "2025-11-03",
        estimatedHours: 5,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440050",
        title: "Health Check Endpoints",
        description: "Add health check endpoints for monitoring system status",
        assignedTo: "Amelia",
        dueDate: "2025-10-30",
        estimatedHours: 2,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440051",
        title: "Data Archiving System",
        description: "Implement automated data archiving for old records",
        assignedTo: "Benjamin",
        dueDate: "2025-11-11",
        estimatedHours: 8,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440052",
        title: "Regression Testing",
        description: "Run comprehensive regression tests before release",
        assignedTo: "Mila",
        dueDate: "2025-11-12",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440053",
        title: "Webhook Implementation",
        description: "Add webhook system for third-party integrations",
        assignedTo: "James",
        dueDate: "2025-11-06",
        estimatedHours: 7,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440054",
        title: "Icon System",
        description: "Create consistent icon library and usage guidelines",
        assignedTo: "Evelyn",
        dueDate: "2025-11-01",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440055",
        title: "Input Validation Framework",
        description: "Build reusable input validation components",
        assignedTo: "Alexander",
        dueDate: "2025-11-04",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440056",
        title: "Database Monitoring",
        description: "Set up database performance monitoring and alerts",
        assignedTo: "Sofia",
        dueDate: "2025-11-07",
        estimatedHours: 4,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440057",
        title: "Usability Testing",
        description: "Conduct user experience testing and gather feedback",
        assignedTo: "Daniel",
        dueDate: "2025-11-10",
        estimatedHours: 8,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440058",
        title: "Code Review Process",
        description: "Establish code review guidelines and automation",
        assignedTo: "Madison",
        dueDate: "2025-11-02",
        estimatedHours: 3,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440059",
        title: "Modal System",
        description: "Create reusable modal components with accessibility",
        assignedTo: "Henry",
        dueDate: "2025-11-05",
        estimatedHours: 5,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440060",
        title: "Environment Configuration",
        description: "Set up configuration management for different environments",
        assignedTo: "Scarlett",
        dueDate: "2025-10-28",
        estimatedHours: 3,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440061",
        title: "Database Backup Testing",
        description: "Test database backup and recovery procedures",
        assignedTo: "Sebastian",
        dueDate: "2025-11-03",
        estimatedHours: 4,
        category: TaskCategory.Db,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440062",
        title: "Load Testing",
        description: "Perform load testing to identify system limits",
        assignedTo: "Victoria",
        dueDate: "2025-11-08",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440063",
        title: "OAuth Integration",
        description: "Implement OAuth 2.0 for third-party authentication",
        assignedTo: "Jack",
        dueDate: "2025-11-09",
        estimatedHours: 7,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440064",
        title: "Form Validation UI",
        description: "Design and implement form validation feedback",
        assignedTo: "Luna",
        dueDate: "2025-11-01",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440065",
        title: "Memory Optimization",
        description: "Optimize application memory usage and garbage collection",
        assignedTo: "Owen",
        dueDate: "2025-11-06",
        estimatedHours: 5,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440066",
        title: "Data Consistency Checks",
        description: "Implement data integrity and consistency validation",
        assignedTo: "Layla",
        dueDate: "2025-11-04",
        estimatedHours: 6,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440067",
        title: "API Testing Suite",
        description: "Create comprehensive API testing with various scenarios",
        assignedTo: "Gabriel",
        dueDate: "2025-11-07",
        estimatedHours: 7,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440068",
        title: "Microservices Architecture",
        description: "Design microservices architecture for scalability",
        assignedTo: "Penelope",
        dueDate: "2025-11-15",
        estimatedHours: 16,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440069",
        title: "Responsive Images",
        description: "Implement responsive image handling and optimization",
        assignedTo: "Carter",
        dueDate: "2025-11-03",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440070",
        title: "Error Tracking System",
        description: "Integrate error tracking and monitoring service",
        assignedTo: "Riley",
        dueDate: "2025-11-05",
        estimatedHours: 3,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440071",
        title: "Database Sharding",
        description: "Implement database sharding for horizontal scaling",
        assignedTo: "Zoey",
        dueDate: "2025-11-18",
        estimatedHours: 20,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440072",
        title: "Browser Compatibility Testing",
        description: "Test application across different browser versions",
        assignedTo: "Nolan",
        dueDate: "2025-11-09",
        estimatedHours: 5,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440073",
        title: "Progressive Web App",
        description: "Convert application to Progressive Web App (PWA)",
        assignedTo: "Stella",
        dueDate: "2025-11-12",
        estimatedHours: 10,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440074",
        title: "Color Palette System",
        description: "Establish consistent color system and accessibility",
        assignedTo: "Max",
        dueDate: "2025-10-31",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440075",
        title: "Request Throttling",
        description: "Implement request throttling to prevent abuse",
        assignedTo: "Delilah",
        dueDate: "2025-11-02",
        estimatedHours: 4,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440076",
        title: "Data Warehouse Setup",
        description: "Set up data warehouse for analytics and reporting",
        assignedTo: "Connor",
        dueDate: "2025-11-20",
        estimatedHours: 18,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440077",
        title: "Automated UI Testing",
        description: "Create automated UI tests using Selenium or Playwright",
        assignedTo: "Maya",
        dueDate: "2025-11-11",
        estimatedHours: 9,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440078",
        title: "GraphQL API",
        description: "Implement GraphQL API for flexible data fetching",
        assignedTo: "Ian",
        dueDate: "2025-11-13",
        estimatedHours: 11,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440079",
        title: "Spacing System",
        description: "Create consistent spacing tokens and utilities",
        assignedTo: "Kinsley",
        dueDate: "2025-10-30",
        estimatedHours: 2,
        category: TaskCategory.UI,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440080",
        title: "Audit Logging",
        description: "Implement comprehensive audit trail for user actions",
        assignedTo: "Aaron",
        dueDate: "2025-11-06",
        estimatedHours: 8,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440081",
        title: "Database Partitioning",
        description: "Implement table partitioning for better performance",
        assignedTo: "Skylar",
        dueDate: "2025-11-14",
        estimatedHours: 12,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440082",
        title: "Stress Testing",
        description: "Conduct stress testing to find breaking points",
        assignedTo: "Jordan",
        dueDate: "2025-11-10",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440083",
        title: "Container Orchestration",
        description: "Set up Kubernetes for container orchestration",
        assignedTo: "Violet",
        dueDate: "2025-11-16",
        estimatedHours: 14,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440084",
        title: "Skeleton Loading Components",
        description: "Create skeleton loading states for better UX",
        assignedTo: "Blake",
        dueDate: "2025-11-04",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440085",
        title: "Feature Flags System",
        description: "Implement feature flags for gradual feature rollout",
        assignedTo: "Savannah",
        dueDate: "2025-11-08",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440086",
        title: "Read Replicas Setup",
        description: "Configure database read replicas for scaling",
        assignedTo: "Jose",
        dueDate: "2025-11-05",
        estimatedHours: 7,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440087",
        title: "Penetration Testing",
        description: "Conduct security penetration testing",
        assignedTo: "Brooklyn",
        dueDate: "2025-11-12",
        estimatedHours: 8,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440088",
        title: "Service Worker Implementation",
        description: "Add service worker for offline functionality",
        assignedTo: "Easton",
        dueDate: "2025-11-07",
        estimatedHours: 9,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440089",
        title: "Breadcrumb Navigation",
        description: "Implement breadcrumb navigation for better UX",
        assignedTo: "Leah",
        dueDate: "2025-11-01",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440090",
        title: "Dependency Management",
        description: "Audit and update application dependencies",
        assignedTo: "Jeremiah",
        dueDate: "2025-11-03",
        estimatedHours: 4,
        category: TaskCategory.Dev,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440091",
        title: "Database Cleanup Scripts",
        description: "Create scripts to clean up orphaned and old data",
        assignedTo: "Addison",
        dueDate: "2025-11-06",
        estimatedHours: 5,
        category: TaskCategory.Db,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440092",
        title: "Visual Regression Testing",
        description: "Set up visual regression testing for UI consistency",
        assignedTo: "Mateo",
        dueDate: "2025-11-09",
        estimatedHours: 6,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440093",
        title: "Message Queue System",
        description: "Implement message queue for asynchronous processing",
        assignedTo: "Bella",
        dueDate: "2025-11-11",
        estimatedHours: 10,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440094",
        title: "Toast Notification System",
        description: "Create toast notification component library",
        assignedTo: "Wyatt",
        dueDate: "2025-11-02",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.Closed
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440095",
        title: "Code Coverage Analysis",
        description: "Analyze and improve code coverage metrics",
        assignedTo: "Claire",
        dueDate: "2025-11-05",
        estimatedHours: 4,
        category: TaskCategory.Test,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440096",
        title: "Serverless Functions",
        description: "Migrate some services to serverless architecture",
        assignedTo: "Eli",
        dueDate: "2025-11-14",
        estimatedHours: 12,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440097",
        title: "Database Schema Versioning",
        description: "Implement database schema migration versioning",
        assignedTo: "Natalie",
        dueDate: "2025-11-04",
        estimatedHours: 5,
        category: TaskCategory.Db,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440098",
        title: "Tooltip System",
        description: "Create accessible tooltip components",
        assignedTo: "Caleb",
        dueDate: "2025-10-31",
        estimatedHours: 3,
        category: TaskCategory.UI,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440099",
        title: "Content Delivery Network",
        description: "Set up CDN for static asset delivery",
        assignedTo: "Hadley",
        dueDate: "2025-11-07",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440100",
        title: "Component Documentation",
        description: "Write comprehensive documentation for UI components",
        assignedTo: "Cooper",
        dueDate: "2025-11-08",
        estimatedHours: 7,
        category: TaskCategory.UI,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440101",
        title: "Data Privacy Compliance",
        description: "Ensure GDPR and CCPA compliance for user data",
        assignedTo: "Kennedy",
        dueDate: "2025-11-13",
        estimatedHours: 9,
        category: TaskCategory.Dev,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440102",
        title: "Database Connection Security",
        description: "Implement encrypted database connections and security",
        assignedTo: "Parker",
        dueDate: "2025-11-06",
        estimatedHours: 4,
        category: TaskCategory.Db,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440103",
        title: "Performance Benchmarking",
        description: "Establish performance benchmarks and monitoring",
        assignedTo: "Maya",
        dueDate: "2025-11-10",
        estimatedHours: 5,
        category: TaskCategory.Test,
        status: TaskStatus.New
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440104",
        title: "State Management Optimization",
        description: "Optimize global state management and performance",
        assignedTo: "Roman",
        dueDate: "2025-11-04",
        estimatedHours: 6,
        category: TaskCategory.Dev,
        status: TaskStatus.Active
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440105",
        title: "Design Token System",
        description: "Implement design tokens for consistent styling",
        assignedTo: "Iris",
        dueDate: "2025-10-29",
        estimatedHours: 4,
        category: TaskCategory.UI,
        status: TaskStatus.Closed
    }
]