export default {
    id: 'mermaid-comprehensive-guide',
    title: 'Mermaid: A Comprehensive Guide to Creating Diagrams with Code',
    description: 'Learn how to create beautiful diagrams using Mermaid syntax. This guide covers flowcharts, sequence diagrams, Gantt charts, class diagrams, and more with practical examples.',
    date: '2023-11-15',
    author: 'Tarik',
    categories: ['Web Development', 'Documentation', 'Tools'],
    thumbnail: null,
    featured: true,
    keywords: ['mermaid', 'diagrams', 'flowcharts', 'sequence diagrams', 'documentation', 'visualization', 'markdown'],
    
    content: `
  # Mermaid: A Comprehensive Guide to Creating Diagrams with Code
  
  Mermaid is a powerful diagramming and charting tool that uses text and code to create diagrams dynamically. It's perfect for documentation, presentations, and any scenario where you need to visualize complex information. This comprehensive guide will walk you through all the major diagram types and their syntax.
  
  ## What is Mermaid?
  
  Mermaid is a JavaScript-based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. It allows you to create diagrams using simple text syntax, making it easy to version control, edit, and maintain diagrams alongside your code.
  
  **Key Benefits:**
  - **Text-based**: Diagrams are defined as code, making them easy to version control
  - **No GUI needed**: Create diagrams using simple text syntax
  - **Multiple diagram types**: Supports flowcharts, sequence diagrams, Gantt charts, and more
  - **Integration**: Works with Markdown, documentation tools, and various platforms
  - **Customizable**: Themes and styling options available
  
  ## Getting Started
  
  To use Mermaid in your Markdown files, simply wrap your Mermaid code in a code block:
  
  \`\`\`mermaid
  graph TD
      A[Start] --> B[End]
  \`\`\`
  
  In this blog, you can switch between the diagram view and code view using the toggle buttons in the header of each Mermaid code block.
  
  ## Flowcharts
  
  Flowcharts are one of the most commonly used diagram types. They represent processes, workflows, or decision trees.
  
  ### Basic Flowchart Syntax
  
  \`\`\`mermaid
  graph TD
      Start --> Process1
      Process1 --> Decision{Is it done?}
      Decision -->|Yes| End
      Decision -->|No| Process1
  \`\`\`
  
  ### Flowchart Shapes
  
  Mermaid supports various shapes for different purposes:
  
  \`\`\`mermaid
  graph LR
      A[Rectangle] --> B(Round Edges)
      B --> C([Stadium-shaped])
      C --> D[[Subroutine]]
      D --> E[(Database)]
      E --> F((Circle))
      F --> G>Asymmetric shape]
      G --> H{Diamond}
      H --> I[/Parallelogram/]
      I --> J[\\Trapezoid\\]
  \`\`\`
  
  ### Flowchart Direction
  
  You can control the direction of your flowchart:
  
  \`\`\`mermaid
  graph TD
      A[Top to Bottom] --> B[Default Direction]
  \`\`\`
  
  \`\`\`mermaid
  graph LR
      A[Left to Right] --> B[Horizontal Flow]
  \`\`\`
  
  \`\`\`mermaid
  graph BT
      A[Bottom to Top] --> B[Upward Flow]
  \`\`\`
  
  ### Complex Flowchart Example
  
  \`\`\`mermaid
  graph TD
      Start([User Login]) --> Validate{Valid Credentials?}
      Validate -->|No| Error[Show Error Message]
      Error --> Start
      Validate -->|Yes| CheckRole{Check User Role}
      CheckRole -->|Admin| AdminPanel[Admin Dashboard]
      CheckRole -->|User| UserPanel[User Dashboard]
      CheckRole -->|Guest| GuestPanel[Guest View]
      AdminPanel --> End([Logout])
      UserPanel --> End
      GuestPanel --> End
  \`\`\`
  
  ## Sequence Diagrams
  
  Sequence diagrams show how objects interact in a particular sequence of operations. They're perfect for visualizing API calls, system interactions, or user flows.
  
  ### Basic Sequence Diagram
  
  \`\`\`mermaid
  sequenceDiagram
      participant User
      participant Frontend
      participant Backend
      participant Database
      
      User->>Frontend: Request Data
      Frontend->>Backend: API Call
      Backend->>Database: Query
      Database-->>Backend: Results
      Backend-->>Frontend: JSON Response
      Frontend-->>User: Display Data
  \`\`\`
  
  ### Message Types
  
  Sequence diagrams support different message types:
  
  \`\`\`mermaid
  sequenceDiagram
      participant A
      participant B
      
      A->>B: Solid line (synchronous)
      A-->>B: Dotted line (asynchronous)
      A->>+B: Activation start
      B-->>-A: Activation end
      A-xB: Lost message
      A--xB: Lost async message
  \`\`\`
  
  ### Complex Sequence Diagram Example
  
  \`\`\`mermaid
  sequenceDiagram
      participant User
      participant Browser
      participant AuthService
      participant Database
      participant EmailService
      
      User->>Browser: Enter Credentials
      Browser->>AuthService: POST /login
      AuthService->>Database: Verify Credentials
      Database-->>AuthService: User Data
      
      alt Valid Credentials
          AuthService->>AuthService: Generate JWT Token
          AuthService->>EmailService: Send Login Notification
          AuthService-->>Browser: Return Token
          Browser-->>User: Redirect to Dashboard
      else Invalid Credentials
          AuthService-->>Browser: Error 401
          Browser-->>User: Show Error Message
      end
  \`\`\`
  
  ## Gantt Charts
  
  Gantt charts are used for project management and scheduling. They show tasks, their duration, and dependencies.
  
  ### Basic Gantt Chart
  
  \`\`\`mermaid
  gantt
      title Project Timeline
      dateFormat YYYY-MM-DD
      section Phase 1
      Planning           :done,    des1, 2023-01-01, 2023-01-10
      Design             :active,  des2, 2023-01-11, 2023-01-20
      section Phase 2
      Development        :         des3, 2023-01-21, 2023-02-10
      Testing            :         des4, 2023-02-11, 2023-02-20
  \`\`\`
  
  ### Gantt Chart with Dependencies
  
  \`\`\`mermaid
  gantt
      title Software Development Lifecycle
      dateFormat YYYY-MM-DD
      
      section Requirements
      Gather Requirements    :crit, req1, 2023-01-01, 10d
      Document Requirements  :req2, after req1, 5d
      
      section Design
      System Design          :design1, after req2, 15d
      UI/UX Design           :design2, after req2, 12d
      
      section Development
      Backend Development    :dev1, after design1, 20d
      Frontend Development   :dev2, after design2, 18d
      
      section Testing
      Unit Testing           :test1, after dev1, 5d
      Integration Testing    :test2, after dev1 dev2, 7d
      
      section Deployment
      Production Deployment  :milestone, deploy1, after test2, 0d
  \`\`\`
  
  ## Class Diagrams
  
  Class diagrams represent the structure of a system by showing classes, their attributes, methods, and relationships.
  
  ### Basic Class Diagram
  
  \`\`\`mermaid
  classDiagram
    class Animal {
        +String name
        +makeSound()
    }
    class Dog {
        +String breed
        +bark()
    }
    class Cat {
        +String color
        +meow()
    }
    class Owner {
        +String name
        +feed()
    }

    Animal <|-- Dog
    Animal <|-- Cat
    
    %% Dies ist die geänderte Zeile:
    Owner "1" --> "*" Animal : hat
  \`\`\`
  
  ### Class Relationships
  
  \`\`\`mermaid
  classDiagram
      class Animal {
          +String name
          +makeSound()
      }
      
      class Dog {
          +String breed
          +bark()
      }
      
      class Cat {
          +String color
          +meow()
      }
      
      class Owner {
          +String name
          +feed()
      }
      
      Animal <|-- Dog
      Animal <|-- Cat
      Owner "1" --> "*" Animal
  \`\`\`
  
  ### Complex Class Diagram
  
  \`\`\`mermaid
  classDiagram
      class ECommerceSystem {
          +List~Product~ products
          +List~User~ users
          +processOrder()
      }
      
      class User {
          <<abstract>>
          +String name
          +String email
          +login()
          +logout()
      }
      
      class Customer {
          +String address
          +addToCart()
          +checkout()
      }
      
      class Admin {
          +String role
          +manageProducts()
          +viewOrders()
      }
      
      class Product {
          +String name
          +Float price
          +Integer stock
          +updateStock()
      }
      
      class Order {
          +Date orderDate
          +Float total
          +processPayment()
      }
      
      class Cart {
          +List~Product~ items
          +calculateTotal()
      }
      
      ECommerceSystem --> User
      ECommerceSystem --> Product
      User <|-- Customer
      User <|-- Admin
      Customer "1" --> "1" Cart
      Customer "1" --> "*" Order
      Cart "*" --> "*" Product
      Order "*" --> "*" Product
  \`\`\`
  
  ## State Diagrams
  
  State diagrams show the different states of an object and the transitions between them.
  
  ### Basic State Diagram
  
  \`\`\`mermaid
  stateDiagram-v2
      [*] --> Idle
      Idle --> Processing: Start
      Processing --> Success: Complete
      Processing --> Error: Fail
      Success --> [*]
      Error --> Idle: Retry
  \`\`\`
  
  ### Complex State Diagram
  
  \`\`\`mermaid
  stateDiagram-v2
      [*] --> Draft
      Draft --> Review: Submit
      Review --> Approved: Approve
      Review --> Rejected: Reject
      Approved --> Published: Publish
      Rejected --> Draft: Revise
      Published --> Archived: Archive
      Archived --> [*]
      
      note right of Draft
          Initial state
          Content can be edited
      end note
      
      note right of Review
          Awaiting approval
          Content is locked
      end note
  \`\`\`
  
  ## Entity Relationship Diagrams (ERD)
  
  ERDs are used to model database structures and relationships between entities.
  
  ### Basic ERD
  
  \`\`\`mermaid
  erDiagram
      USER ||--o{ ORDER : places
      ORDER ||--|{ ORDER_ITEM : contains
      PRODUCT ||--o{ ORDER_ITEM : "ordered in"
      CATEGORY ||--o{ PRODUCT : "belongs to"
      
      USER {
          int id PK
          string name
          string email
          date created_at
      }
      
      ORDER {
          int id PK
          int user_id FK
          float total
          date order_date
      }
      
      PRODUCT {
          int id PK
          int category_id FK
          string name
          float price
          int stock
      }
      
      CATEGORY {
          int id PK
          string name
          string description
      }
      
      ORDER_ITEM {
          int id PK
          int order_id FK
          int product_id FK
          int quantity
          float price
      }
  \`\`\`
  
  ## Pie Charts
  
  Pie charts are useful for showing proportions and percentages.
  
  ### Basic Pie Chart
  
  \`\`\`mermaid
  pie title Programming Languages Usage
      "JavaScript" : 35
      "Python" : 25
      "Java" : 20
      "TypeScript" : 15
      "Other" : 5
  \`\`\`
  
  ### Pie Chart Example
  
  \`\`\`mermaid
  pie title Project Budget Allocation
      "Development" : 40
      "Design" : 20
      "Testing" : 15
      "Documentation" : 10
      "Infrastructure" : 10
      "Marketing" : 5
  \`\`\`
  
  ## Git Graphs
  
  Git graphs visualize Git branches and commits, perfect for documentation and tutorials.
  
  ### Basic Git Graph
  
  \`\`\`mermaid
  gitGraph
      commit id: "Initial"
      branch develop
      checkout develop
      commit id: "Feature A"
      commit id: "Feature B"
      checkout main
      commit id: "Hotfix"
      checkout develop
      commit id: "Feature C"
      checkout main
      merge develop
      commit id: "Release"
  \`\`\`
  
  ### Complex Git Workflow
  
  \`\`\`mermaid
  gitGraph
      commit id: "Initial Commit"
      branch feature/login
      checkout feature/login
      commit id: "Add login form"
      commit id: "Add validation"
      branch feature/auth
      checkout feature/auth
      commit id: "JWT implementation"
      checkout feature/login
      merge feature/auth
      commit id: "Integrate JWT"
      checkout main
      commit id: "Update dependencies"
      checkout feature/login
      merge main
      commit id: "Resolve conflicts"
      checkout main
      merge feature/login
      commit id: "Release v1.0"
  \`\`\`
  
  ## Journey Diagrams
  
  Journey diagrams show user journeys and experiences through a system or process.
  
  ### User Journey Example
  
  \`\`\`mermaid
  journey
      title User Shopping Journey
      section Discovery
        Visit Website: 5: User
        Browse Products: 4: User
        Search for Item: 3: User
      section Consideration
        View Product Details: 4: User
        Read Reviews: 5: User
        Compare Prices: 3: User
      section Purchase
        Add to Cart: 4: User
        Checkout: 3: User
        Complete Payment: 5: User
      section Post-Purchase
        Receive Confirmation: 5: User
        Track Order: 4: User
        Receive Product: 5: User
  \`\`\`
  
  ## Requirement Diagrams
  
  Requirement diagrams show relationships between requirements in a system.
  
  ### Requirement Diagram Example
  
  \`\`\`mermaid
  requirementDiagram
      requirement FunctionalReq {
          id: 1
          text: System shall allow user login
          risk: high
          verifymethod: test
      }
      
      requirement NonFunctionalReq {
          id: 2
          text: System shall respond within 2 seconds
          risk: medium
          verifymethod: test
      }
      
      requirement SecurityReq {
          id: 3
          text: Passwords shall be encrypted
          risk: high
          verifymethod: test
      }
      
      FunctionalReq - satisfies -> SecurityReq
      NonFunctionalReq - satisfies -> FunctionalReq
  \`\`\`
  
  ## C4 Context Diagrams
  
  C4 diagrams help visualize software architecture at different levels of abstraction.
  
  ### C4 Context Diagram
  
  \`\`\`mermaid
  C4Context
      title System Context Diagram
      
      Person(user, "User", "Uses the web application")
      System(webapp, "Web Application", "Provides user interface")
      System(api, "API Server", "Handles business logic")
      SystemDb(database, "Database", "Stores application data")
      
      Rel(user, webapp, "Uses", "HTTPS")
      Rel(webapp, api, "Makes API calls", "HTTPS")
      Rel(api, database, "Reads from and writes to", "SQL")
  \`\`\`
  
  ## Best Practices
  
  ### 1. Keep Diagrams Simple
  
  Avoid overcrowding your diagrams. If a diagram becomes too complex, consider breaking it into multiple smaller diagrams.
  
  ### 2. Use Meaningful Names
  
  Use descriptive names for nodes, participants, and entities to make diagrams self-documenting.
  
  ### 3. Consistent Styling
  
  Maintain consistent styling across your diagrams for better readability and professionalism.
  
  ### 4. Version Control
  
  Since Mermaid diagrams are text-based, they can be easily version controlled with Git, allowing you to track changes over time.
  
  ### 5. Documentation
  
  Add comments and notes to complex diagrams to explain non-obvious relationships or decisions.
  
  ## Advanced Features
  
  ### Styling
  
  You can customize the appearance of your diagrams using CSS-like styling:
  
  \`\`\`mermaid
  graph TD
      A[Start] --> B[Process]
      B --> C[End]
      
      classDef startEnd fill:#90EE90,stroke:#333,stroke-width:2px
      classDef process fill:#87CEEB,stroke:#333,stroke-width:2px
      
      class A,C startEnd
      class B process
  \`\`\`
  
  ### Subgraphs
  
  Organize related nodes using subgraphs:
  
  \`\`\`mermaid
  graph TD
      subgraph Frontend
          A[React App] --> B[Components]
      end
      
      subgraph Backend
          C[API Server] --> D[Database]
      end
      
      B --> C
  \`\`\`
  
  ### Links and Interactions
  
  You can add clickable links to nodes:
  
  \`\`\`mermaid
  graph LR
      A[Homepage] -->|Click| B[About Page]
      B -->|Click| C[Contact]
      
      click A "https://example.com" "Homepage"
      click B "https://example.com/about" "About"
      click C "https://example.com/contact" "Contact"
  \`\`\`
  
  ## Common Use Cases
  
  ### 1. API Documentation
  
  Use sequence diagrams to document API interactions:
  
  \`\`\`mermaid
  sequenceDiagram
      participant Client
      participant API
      participant Auth
      participant DB
      
      Client->>API: POST /api/users
      API->>Auth: Validate Token
      Auth-->>API: Token Valid
      API->>DB: Insert User
      DB-->>API: User Created
      API-->>Client: 201 Created
  \`\`\`
  
  ### 2. System Architecture
  
  Visualize system architecture with flowcharts and C4 diagrams:
  
  \`\`\`mermaid
  graph TB
      subgraph "Client Layer"
          Web[Web App]
          Mobile[Mobile App]
      end
      
      subgraph "API Layer"
          Gateway[API Gateway]
          Auth[Auth Service]
          API[Main API]
      end
      
      subgraph "Data Layer"
          DB[(Database)]
          Cache[(Redis Cache)]
      end
      
      Web --> Gateway
      Mobile --> Gateway
      Gateway --> Auth
      Gateway --> API
      API --> DB
      API --> Cache
  \`\`\`
  
  ### 3. Project Planning
  
  Use Gantt charts for project timelines and task management.
  
  ### 4. Database Design
  
  ERDs are perfect for documenting database schemas and relationships.
  
  ## Integration with Documentation
  
  Mermaid works seamlessly with:
  - **Markdown**: Most Markdown processors support Mermaid
  - **GitHub**: Native Mermaid support in README files
  - **GitLab**: Built-in Mermaid rendering
  - **Documentation Tools**: Docusaurus, VuePress, MkDocs, and more
  - **Notebooks**: Jupyter notebooks with Mermaid extensions
  
  ## Conclusion
  
  Mermaid is a powerful tool for creating diagrams programmatically. Its text-based syntax makes it easy to create, maintain, and version control diagrams alongside your code. Whether you're documenting APIs, designing systems, planning projects, or explaining processes, Mermaid provides a flexible and efficient way to visualize information.
  
  **Key Takeaways:**
  - Mermaid supports multiple diagram types: flowcharts, sequence diagrams, Gantt charts, class diagrams, and more
  - Text-based syntax makes diagrams easy to version control and maintain
  - Diagrams can be customized with styling and themes
  - Perfect for documentation, presentations, and technical communication
  - Works with various platforms and documentation tools
  
  Start creating your own diagrams today and enhance your documentation with visual representations that make complex information easier to understand!
  
  ## Further Resources
  
  - [Mermaid Official Documentation](https://mermaid.js.org/)
  - [Mermaid Live Editor](https://mermaid.live/)
  - [Mermaid GitHub Repository](https://github.com/mermaid-js/mermaid)
  - [Mermaid Examples Gallery](https://mermaid.js.org/ecosystem/tutorials.html)
  `
  };