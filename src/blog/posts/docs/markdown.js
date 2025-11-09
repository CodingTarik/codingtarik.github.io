export default {
    id: 'markdown-feature-guide',
    title: 'Markdown & Component Feature Guide',
    description: 'The official documentation and live demo for all custom Markdown features and interactive components available in this blog.',
    date: '2025-11-09',
    author: 'Tarik',
    categories: ['Documentation', 'Meta', 'How-To'],
    thumbnail: null,
    featured: true,
    keywords: ['markdown', 'guide', 'docs', 'charts', 'latex', 'geogebra', 'tabs', 'interactive', 'documentation'],
    
    content: `
  # Welcome to the Feature Guide 🚀
  
  This post is the official documentation for all custom Markdown and interactive React components used in this blog. It serves as a live demo and a reference for authors (that's you!) and anyone who forks this repository.
  
  Let's dive into what you can build.
  
  ---
  
  ## 1. Content Structure & Callouts
  
  These components help structure your content and draw attention to key information.
  
  ### GitHub-Style Callouts (Preferred)
  
  Use the standard blockquote syntax with a special tag. This is the recommended way to create alerts as it's semantic and clean.
  
  **Syntax:**
  \\\`\`\`markdown
  > [!INFO]
  > This is an information block. Perfect for supplemental details.
  
  > [!WARNING]
  > This is a warning block. Use this for important, non-critical advice.
  
  > [!ALERT]
  > This is an alert block. Use this for critical information or dangers.
  \\\`\`\`
  
  **Live Demo:**
  
  > [!INFO]
  > This is an information block. Perfect for supplemental details.
  
  > [!WARNING]
  > This is a warning block. Use this for important, non-critical advice.
  
  > [!ALERT]
  > This is an alert block. Use this for critical information or dangers.
  
  ### Component Callouts (Alternative)
  
  You can also use React components directly if you prefer.
  
  **Syntax:**
  \\\`\`\`markdown
  <Info>This is an info component.</Info>
  <Warning>This is a warning component.</Warning>
  <Alert>This is an alert component.</Alert>
  \\\`\`\`
  
  ### Spoilers / Accordions
  
  You can hide content that doesn't need to be immediately visible (like quiz answers or long logs) using the standard HTML \`<details>\` and \`<summary>\` tags. They are automatically styled.
  
  **Syntax:**
  \\\`\`\`html
  <details>
    <summary>Click me to reveal the details</summary>
  
    This content is hidden until you click. You can include **Markdown**, lists, and even other components inside.
    
    - Point 1
    - Point 2
  
  </details>
  \\\`\`\`
  
  **Live Demo:**
  
  <details>
    <summary>Click me to reveal the details</summary>
  
    This content is hidden until you click. You can include **Markdown**, lists, and even other components inside.
    
    - Point 1
    - Point 2
  
  </details>
  
  ---
  
  ## 2. Code & Interactivity
  
  We have multiple ways to display code, from static blocks to fully interactive playgrounds.
  
  ### Standard Code Blocks
  
  Standard fences are rendered with \`react-syntax-highlighter\`, including language detection and a copy button.
  
  **Syntax:**
  \\\`\`\`js
  // A standard JavaScript code block
  function helloWorld() {
    console.log("Hello, World!");
  }
  \\\`\`\`
  
  ### Code Tabs
  
  For examples in multiple languages, use the \`<Tabs>\` and \`<Tab>\` components.
  
  **Syntax:**
  \\\`\`\`markdown
  <Tabs>
    <Tab title="JavaScript">
      \\\`\`\`js
      console.log("Hello from JS!");
      \\\`\`\`
    </Tab>
    <Tab title="Python">
      \\\`\`\`py
      print("Hello from Python!")
      \\\`\`\`
    </Tab>
    <Tab title="Rust">
      \\\`\`\`rust
      println!("Hello from Rust!");
      \\\`\`\`
    </Tab>
  </Tabs>
  \\\`\`\`
  
  **Live Demo:**
  
  <Tabs>
    <Tab title="JavaScript">
      \\\`\`\`js
      console.log("Hello from JS!");
      \\\`\`\`
    </Tab>
    <Tab title="Python">
      \\\`\`\`py
      print("Hello from Python!")
      \\\`\`\`
    </Tab>
    <Tab title="Rust">
      \\\`\`\`rust
      println!("Hello from Rust!");
      \\\`\`\`
    </Tab>
  </Tabs>
  
  ### Live React Sandbox
  
  Using \`react-live\`, you can create live, editable React sandboxes. This is perfect for component demos. Note that the scope is limited, but it includes \`React\`, \`useState\`, \`useEffect\`, etc.
  
  **Syntax:**
  \\\`\`\`react-live
  function Counter() {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ padding: '1rem', border: '1px solid #555', borderRadius: '8px' }}>
        <p style={{ marginBottom: '1rem' }}>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            background: '#007bff',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Click me
        </button>
      </div>
    );
  }
  \\\`\`\`
  
  **Live Demo:**
  
  \\\`\`\`react-live
  function Counter() {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ padding: '1rem', border: '1px solid #555', borderRadius: '8px' }}>
        <p style={{ marginBottom: '1rem' }}>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            background: '#007bff',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Click me
        </button>
      </div>
    );
  }
  \\\`\`\`
  
  ---
  
  ## 3. Data Visualization
  
  Bring your data to life with interactive charts and tables.
  
  ### Mermaid Diagrams
  
  Render complex diagrams from text. The block includes a toggle to switch between the rendered diagram and the source code.
  
  **Syntax:**
  \\\`\`\`mermaid
  graph TD
      A[Start] --> B{Is it?};
      B -- Yes --> C[OK];
      B -- No --> D[Not OK];
      C --> E[End];
      D --> E[End];
  \\\`\`\`
  
  **Live Demo:**
  
  \\\`\`\`mermaid
  graph TD
      A[Start] --> B{Is it?};
      B -- Yes --> C[OK];
      B -- No --> D[Not OK];
      C --> E[End];
      D --> E[End];
  \\\`\`\`
  
  ### Interactive Charts (Chart.js)
  
  Render theme-aware, interactive charts from JSON data. Supported types: \`chart-bar\`, \`chart-line\`, \`chart-pie\`, \`chart-doughnut\`.
  
  **Syntax:**
  \\\`\`\`chart-line
  {
    "title": "Blog Growth (Demo Data)",
    "labels": ["January", "February", "March", "April"],
    "datasets": [
      {
        "label": "Articles",
        "data": [5, 9, 15, 22],
        "borderColor": "rgb(75, 192, 192)",
        "backgroundColor": "rgba(75, 192, 192, 0.5)"
      },
      {
        "label": "Users",
        "data": [120, 300, 750, 1500],
        "borderColor": "rgb(255, 99, 132)",
        "backgroundColor": "rgba(255, 99, 132, 0.5)"
      }
    ]
  }
  \\\`\`\`
  
  **Live Demo:**
  
  \\\`\`\`chart-line
  {
    "title": "Blog Growth (Demo Data)",
    "labels": ["January", "February", "March", "April"],
    "datasets": [
      {
        "label": "Articles",
        "data": [5, 9, 15, 22],
        "borderColor": "rgb(75, 192, 192)",
        "backgroundColor": "rgba(75, 192, 192, 0.5)"
      },
      {
        "label": "Users",
        "data": [120, 300, 750, 1500],
        "borderColor": "rgb(255, 99, 132)",
        "backgroundColor": "rgba(255, 99, 132, 0.5)"
      }
    ]
  }
  \\\`\`\`
  
  ### Interactive Tables (TanStack Table)
  
  Render a JSON array into a sortable table. Click any column header to sort.
  
  **Syntax:**
  \\\`\`\`table-data
  [
    { "id": 1, "framework": "React", "license": "MIT", "stars": 220500 },
    { "id": 2, "framework": "Vue", "license": "MIT", "stars": 205100 },
    { "id": 3, "framework": "Svelte", "license": "MIT", "stars": 75900 },
    { "id": 4, "framework": "Angular", "license": "MIT", "stars": 90400 }
  ]
  \\\`\`\`
  
  **Live Demo:**
  
  \\\`\`\`table-data
  [
    { "id": 1, "framework": "React", "license": "MIT", "stars": 220500 },
    { "id": 2, "framework": "Vue", "license": "MIT", "stars": 205100 },
    { "id": 3, "framework": "Svelte", "license": "MIT", "stars": 75900 },
    { "id": 4, "framework": "Angular", "license": "MIT", "stars": 90400 }
  ]
  \\\`\`\`
  
  ---
  
  ## 4. Academic & Media Embeds
  
  Perfect for tutorials, e-learning content, and technical articles.
  
  ### LaTeX Math Formulas (KaTeX)
  
  Render beautiful, fast math formulas using LaTeX.
  
  **Inline Syntax:** \`<Katex> ... \</Katex>\`
  **Block Syntax:** \`<Katex block> ... \</Katex>\`
  
  **Live Demo:**
  The Pythagorean theorem, <Katex>a^2 + b^2 = c^2</Katex>, is a fundamental relation. For a centered, display-mode formula, use the \`block\` prop:
  
  <Katex block>
    \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
  </Katex>
  
  ### Interactive Math (GeoGebra)
  
  Embed interactive GeoGebra applets. You just need the \`materialId\` from the applet's URL.
  
  **Syntax:**
  \\\`\`\`markdown
  <GeoGebra materialId="v3a4b9c8" />
  \\\`\`\`
  
  **Live Demo:**
  
  <GeoGebra materialId="v3a4b9c8" />
  
  ### YouTube Videos
  
  Embed responsive YouTube videos with just the \`videoId\`.
  
  **Syntax:**
  \\\`\`\`markdown
  <YouTube videoId="6vK1qKfgP8c" title="What is Bouldering?" />
  \\\`\`\`
  
  **Live Demo:**
  
  <YouTube videoId="6vK1qKfgP8c" title="What is Bouldering?" />
  
  ---
  
  ## Authoring Guidelines
  
  To maintain quality, consistency, and performance, please adhere to these guidelines.
  
  ### 1. Be Semantic
  Use the right tool for the job.
  * **Charts vs. Tables:** Don't use a chart for a 2x2 grid of data; a standard Markdown table is better. Use \`\`\`table-data\`\`\` only when you need sortable columns.
  * **Callouts:** Use \`> [!INFO]\` to highlight information, not to style an entire section.
  * **KaTeX:** Use for mathematical notation, not for styling regular text.
  
  ### 2. Prioritize Performance
  **Embeds are expensive.** Every Chart, GeoGebra applet, \`react-live\` sandbox, and YouTube video adds significant load time (JavaScript, iframes, network requests).
  * **Limit Embeds:** A single post should not be a dumping ground. Try to limit the number of *heavy* embeds (GeoGebra, \`react-live\`, YouTube) per page.
  * **Prefer Native:** KaTeX and Mermaid are generally faster than iframe-based embeds.
  * **Alternative:** For complex, multi-file code examples, consider linking to an external StackBlitz or CodePen rather than embedding.
  
  ### 3. Design for Accessibility (a11y)
  All content must be accessible.
  * **Provide Titles:** Always provide a descriptive \`title\` prop for \`<YouTube>\` and \`<GeoGebra>\` embeds for screen readers.
  * **Chart Data:** Ensure your \`label\` and \`title\` fields in Chart JSON are descriptive.
  * **Spoilers:** The \`<summary>\` text must clearly describe the content it hides (e.g., "Click to see solution" is better than "Click me").
  
  ### 4. Ensure Data Integrity
  All components that consume JSON (\`\`\`chart-...\`\`\`, \`\`\`table-data\`\`\`) will fail or show an error if the JSON is malformed.
  * **No Trailing Commas:** Ensure your last property in an object or item in an array does *not* have a trailing comma.
  * **Use Double Quotes:** JSON keys and string values *must* use double quotes (\`"\`).
  * **Test Locally:** Always preview your post before publishing.
  
  ### 5. Maintain Code & Syntax Hygiene
  * **Backslash Escaping:** Remember that this content is inside a JavaScript template string. **All backslashes (\`\\\`) must be escaped with another backslash.**
      * KaTeX: \`\\frac\` must be written as \`\\\\frac\`.
      * Code Fences: \`\`\` must be written as \`\\\\\\`\`\`.
  * **Consistency:** Prefer the GitHub-style callouts (\`> [!INFO]\`) over the component version (\`<Info>\`) as they are more standard and less prone to nesting errors.
  
  ---
  
  That's it! You have all the tools you need to create stunning, informative, and interactive content. Happy authoring!
  `
  };