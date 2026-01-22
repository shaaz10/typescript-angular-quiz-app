// Quiz Data - 60 Questions on TypeScript and Angular
const quizData = [
  {
    "id": 1,
    "topic": "TypeScript",
    "question": "TypeScript is a ____ of JavaScript.",
    "options": ["Framework", "Library", "Superset", "Replacement"],
    "answer": "Superset"
  },
  {
    "id": 2,
    "topic": "TypeScript",
    "question": "Which command compiles TypeScript to JavaScript?",
    "options": ["node", "npm", "tsc", "ng"],
    "answer": "tsc"
  },
  {
    "id": 3,
    "topic": "TypeScript",
    "question": "Which file configures the TypeScript compiler?",
    "options": ["package.json", "angular.json", "tsconfig.json", "config.ts"],
    "answer": "tsconfig.json"
  },
  {
    "id": 4,
    "topic": "TypeScript",
    "question": "Which type allows any value?",
    "options": ["unknown", "any", "void", "never"],
    "answer": "any"
  },
  {
    "id": 5,
    "topic": "TypeScript",
    "question": "Which type is safest alternative to any?",
    "options": ["any", "unknown", "never", "object"],
    "answer": "unknown"
  },
  {
    "id": 6,
    "topic": "TypeScript",
    "question": "Which symbol is used for union types?",
    "options": ["&", "|", ":", "=>"],
    "answer": "|"
  },
  {
    "id": 7,
    "topic": "TypeScript",
    "question": "Which keyword defines a constant?",
    "options": ["var", "let", "const", "static"],
    "answer": "const"
  },
  {
    "id": 8,
    "topic": "TypeScript",
    "question": "Which access modifier allows access only inside the class?",
    "options": ["public", "protected", "private", "readonly"],
    "answer": "private"
  },
  {
    "id": 9,
    "topic": "TypeScript",
    "question": "Which keyword is used to inherit a class?",
    "options": ["implements", "inherits", "extends", "super"],
    "answer": "extends"
  },
  {
    "id": 10,
    "topic": "TypeScript",
    "question": "Interfaces are mainly used to define:",
    "options": ["Functions", "Structure of objects", "Classes", "Modules"],
    "answer": "Structure of objects"
  },
  {
    "id": 11,
    "topic": "TypeScript",
    "question": "Which keyword implements an interface?",
    "options": ["extends", "implements", "inherits", "uses"],
    "answer": "implements"
  },
  {
    "id": 12,
    "topic": "TypeScript",
    "question": "Enums are used to:",
    "options": ["Store functions", "Store fixed constants", "Create services", "Handle APIs"],
    "answer": "Store fixed constants"
  },
  {
    "id": 13,
    "topic": "TypeScript",
    "question": "What does Partial<T> do?",
    "options": ["Makes all properties required", "Makes all properties optional", "Deletes properties", "Locks properties"],
    "answer": "Makes all properties optional"
  },
  {
    "id": 14,
    "topic": "TypeScript",
    "question": "Pick<T, K> is used to:",
    "options": ["Remove keys", "Select specific properties", "Make readonly", "Clone objects"],
    "answer": "Select specific properties"
  },
  {
    "id": 15,
    "topic": "TypeScript",
    "question": "Readonly<T> makes properties:",
    "options": ["Optional", "Mutable", "Immutable", "Private"],
    "answer": "Immutable"
  },
  {
    "id": 16,
    "topic": "TypeScript",
    "question": "Generics help to:",
    "options": ["Avoid functions", "Write reusable type-safe code", "Increase runtime speed", "Remove types"],
    "answer": "Write reusable type-safe code"
  },
  {
    "id": 17,
    "topic": "Angular",
    "question": "Angular is primarily used to build:",
    "options": ["Desktop apps", "Mobile OS", "Single Page Applications", "Databases"],
    "answer": "Single Page Applications"
  },
  {
    "id": 18,
    "topic": "Angular",
    "question": "SPA stands for:",
    "options": ["Single Program Application", "Single Page Application", "Secure Page App", "Static Page App"],
    "answer": "Single Page Application"
  },
  {
    "id": 19,
    "topic": "Angular",
    "question": "Which command creates a new Angular app?",
    "options": ["npm init", "ng new", "ng create", "angular init"],
    "answer": "ng new"
  },
  {
    "id": 20,
    "topic": "Angular",
    "question": "Which command runs an Angular app?",
    "options": ["npm start", "ng serve", "ng run", "node app"],
    "answer": "ng serve"
  },
  {
    "id": 21,
    "topic": "Angular",
    "question": "Which file is the root module?",
    "options": ["main.ts", "index.html", "app.module.ts", "app.component.ts"],
    "answer": "app.module.ts"
  },
  {
    "id": 22,
    "topic": "Angular",
    "question": "Which decorator defines a component?",
    "options": ["@Module", "@Component", "@Service", "@Pipe"],
    "answer": "@Component"
  },
  {
    "id": 23,
    "topic": "Angular",
    "question": "Component consists of:",
    "options": ["HTML only", "TS only", "Template, Class, Metadata", "CSS only"],
    "answer": "Template, Class, Metadata"
  },
  {
    "id": 24,
    "topic": "Angular",
    "question": "Angular follows which architecture?",
    "options": ["MVC", "MVP", "MVVM", "Flux"],
    "answer": "MVC"
  },
  {
    "id": 25,
    "topic": "Angular",
    "question": "Interpolation syntax is:",
    "options": ["[]", "()", "{{ }}", "#"],
    "answer": "{{ }}"
  },
  {
    "id": 26,
    "topic": "Angular",
    "question": "Property binding uses:",
    "options": ["()", "{}", "[]", "#"],
    "answer": "[]"
  },
  {
    "id": 27,
    "topic": "Angular",
    "question": "Event binding uses:",
    "options": ["()", "[]", "{{ }}", "=>"],
    "answer": "()"
  },
  {
    "id": 28,
    "topic": "Angular",
    "question": "Two-way binding uses:",
    "options": ["[ ]", "( )", "[( )]", "{{ }}"],
    "answer": "[( )]"
  },
  {
    "id": 29,
    "topic": "Angular",
    "question": "Which directive is used for looping?",
    "options": ["*ngIf", "*ngFor", "ngLoop", "ngRepeat"],
    "answer": "*ngFor"
  },
  {
    "id": 30,
    "topic": "Angular",
    "question": "Which directive is used for condition?",
    "options": ["*ngFor", "*ngIf", "ngSwitch", "ngCheck"],
    "answer": "*ngIf"
  },
  {
    "id": 31,
    "topic": "Angular",
    "question": "Pipes are used for:",
    "options": ["API calls", "Routing", "Data transformation", "Styling"],
    "answer": "Data transformation"
  },
  {
    "id": 32,
    "topic": "Angular",
    "question": "Which is a built-in pipe?",
    "options": ["reverse", "filter", "uppercase", "sort"],
    "answer": "uppercase"
  },
  {
    "id": 33,
    "topic": "Angular",
    "question": "Services are mainly used for:",
    "options": ["UI design", "Business logic", "HTML rendering", "Routing"],
    "answer": "Business logic"
  },
  {
    "id": 34,
    "topic": "Angular",
    "question": "Which decorator defines a service?",
    "options": ["@Component", "@Injectable", "@Service", "@Provider"],
    "answer": "@Injectable"
  },
  {
    "id": 35,
    "topic": "Angular",
    "question": "Dependency Injection helps to:",
    "options": ["Create objects manually", "Reduce coupling", "Increase errors", "Avoid services"],
    "answer": "Reduce coupling"
  },
  {
    "id": 36,
    "topic": "Angular",
    "question": "HttpClient belongs to which module?",
    "options": ["BrowserModule", "FormsModule", "HttpClientModule", "CommonModule"],
    "answer": "HttpClientModule"
  },
  {
    "id": 37,
    "topic": "Angular",
    "question": "HTTP methods include:",
    "options": ["GET, POST", "PUT, DELETE", "PATCH", "All of the above"],
    "answer": "All of the above"
  },
  {
    "id": 38,
    "topic": "Angular",
    "question": "Angular uses which language primarily?",
    "options": ["Java", "JavaScript", "TypeScript", "Python"],
    "answer": "TypeScript"
  },
  {
    "id": 39,
    "topic": "Angular",
    "question": "Observables are provided by:",
    "options": ["Promise API", "RxJS", "Zone.js", "Node.js"],
    "answer": "RxJS"
  },
  {
    "id": 40,
    "topic": "Angular",
    "question": "Which lifecycle hook runs first?",
    "options": ["ngOnInit", "ngOnChanges", "constructor", "ngAfterViewInit"],
    "answer": "constructor"
  },
  {
    "id": 41,
    "topic": "Angular",
    "question": "ngOnInit is mainly used for:",
    "options": ["Constructor logic", "DOM access", "Initialization logic", "API destruction"],
    "answer": "Initialization logic"
  },
  {
    "id": 42,
    "topic": "Angular",
    "question": "Which file bootstraps the Angular app?",
    "options": ["index.html", "main.ts", "app.component.ts", "polyfills.ts"],
    "answer": "main.ts"
  },
  {
    "id": 43,
    "topic": "Angular",
    "question": "Angular CLI is written in:",
    "options": ["Java", "Python", "TypeScript", "C++"],
    "answer": "TypeScript"
  },
  {
    "id": 44,
    "topic": "Angular",
    "question": "Which folder contains components?",
    "options": ["assets", "environments", "app", "node_modules"],
    "answer": "app"
  },
  {
    "id": 45,
    "topic": "Angular",
    "question": "Which file defines routes?",
    "options": ["app.module.ts", "app-routing.module.ts", "routes.ts", "router.ts"],
    "answer": "app-routing.module.ts"
  },
  {
    "id": 46,
    "topic": "Angular",
    "question": "Lazy loading improves:",
    "options": ["Memory usage", "Initial load time", "Security", "Styling"],
    "answer": "Initial load time"
  },
  {
    "id": 47,
    "topic": "Angular",
    "question": "Which directive switches views?",
    "options": ["*ngIf", "*ngFor", "ngSwitch", "ngView"],
    "answer": "ngSwitch"
  },
  {
    "id": 48,
    "topic": "Angular",
    "question": "Which pipe handles async data?",
    "options": ["json", "async", "date", "slice"],
    "answer": "async"
  },
  {
    "id": 49,
    "topic": "Angular",
    "question": "Angular change detection works using:",
    "options": ["Virtual DOM", "Zone.js", "Diffing", "Manual updates"],
    "answer": "Zone.js"
  },
  {
    "id": 50,
    "topic": "Angular",
    "question": "Which strategy improves performance?",
    "options": ["Default", "OnPush", "Manual", "Static"],
    "answer": "OnPush"
  },
  {
    "id": 51,
    "topic": "Angular",
    "question": "Signals in Angular are used for:",
    "options": ["Routing", "State management", "Styling", "HTTP calls"],
    "answer": "State management"
  },
  {
    "id": 52,
    "topic": "Angular",
    "question": "Signals are an alternative to:",
    "options": ["Promises", "Callbacks", "Observables for state", "Services"],
    "answer": "Observables for state"
  },
  {
    "id": 53,
    "topic": "Angular",
    "question": "Which keyword injects a service?",
    "options": ["new", "inject", "constructor", "provider"],
    "answer": "constructor"
  },
  {
    "id": 54,
    "topic": "Angular",
    "question": "Which module is needed for forms?",
    "options": ["BrowserModule", "FormsModule", "HttpClientModule", "CoreModule"],
    "answer": "FormsModule"
  },
  {
    "id": 55,
    "topic": "Angular",
    "question": "Template-driven forms use:",
    "options": ["ReactiveFormsModule", "FormsModule", "HttpClientModule", "CommonModule"],
    "answer": "FormsModule"
  },
  {
    "id": 56,
    "topic": "Angular",
    "question": "Reactive forms use:",
    "options": ["FormsModule", "BrowserModule", "ReactiveFormsModule", "CoreModule"],
    "answer": "ReactiveFormsModule"
  },
  {
    "id": 57,
    "topic": "Angular",
    "question": "Which directive tracks list changes?",
    "options": ["trackBy", "keyBy", "idBy", "ngTrack"],
    "answer": "trackBy"
  },
  {
    "id": 58,
    "topic": "Angular",
    "question": "Which lifecycle hook cleans up subscriptions?",
    "options": ["ngOnInit", "ngOnDestroy", "ngAfterViewInit", "ngOnChanges"],
    "answer": "ngOnDestroy"
  },
  {
    "id": 59,
    "topic": "Angular",
    "question": "Angular apps are bundled using:",
    "options": ["Webpack", "Vite", "Parcel", "Rollup"],
    "answer": "Webpack"
  },
  {
    "id": 60,
    "topic": "Angular",
    "question": "Angular is maintained by:",
    "options": ["Facebook", "Microsoft", "Google", "Amazon"],
    "answer": "Google"
  }
];
