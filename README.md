# Angular 8

https://codecraft.tv/courses/angular/

#=============================================================================

# List of Require Packages

1. @angular/core
   1. NgModule
      1. Creating Angular Module
   2. Component
      1. Creating Angular Component
   3. Injectable, for Service
   4. Pipe, Creating Pipe
   5. Directive, creating Custom Directive
   6. HostListener, for defining custom event in Directive
   7. Renderer, for defining custom rendering for Directive UI
   8. ElementRef, for referring DOM element in Directive
2. @angular/compiler, the Angular Compilation Services
   1. Developer
   2. Production, uses Ahead-Of-Time (AOT) compilation
3. @angular/common
   1. The Module Loader and Module Manager for Various Standard Angular Modules
      1. CommonModule
         1. The Object that is used to mamage and load depednencies across all custom modules when they are loaded by Main or(Root) module
      2. @angular/common/http
         1. New from Angular 4 and Mandatory for Http calls from Angular 6
4. @angular/platform-browser
   1. Provides BrowserModule that manages Angular app in browser
5. @angular/platform-browser-dynamic
   1. Provides 'platformBrowserDynamic()' method to manage
      1. Databinding, DOM Rendering and any dynamic DOM operations
6. @angular/forms
   1. Provides FormsModule for Two-Way Databinding
   2. ReactiveFormsModule for LOB Forms
7. @angular/router
   1. Provided RouterModule for Routing 
8. @angular/animation
9. rxjs
   1.  Dependency Package used by Angular for Reactive JavaScript to use Observable pattern 
10. zone.js
    1.  Used by platformBrowserDynamic for Any Browser level errors

#=============================================================================
# Angular Decorators
1. They are the objects. They are used for defining additional or predefined behavior to ES 6 classes
2. Applied on class, method, member usinf @ sign
3. Examples of Decorators in Angular
   1. @NgModule()
      1. Container for all Angular Objects like
         1. Component
         2. Services
         3. Pipes
         4. Directives
      2. Properties for NgModule
         1. imports: of the type array, used to import standard Angular modules and Modules from external NG applications in currenr project
         2. exports: of the type array, used to export components, services, pipes, directives from current application to other NG application
         3. declarations: of the type array, used to declare components, pipes and directives of current application in module. They are just ref. objects
         4. providers: of the type array, this provides DI container for all Angular Services of the current project.
         5. bootstrap: of the type array, contains instances of components from declarations array. These components will be loaded when NG application executes 
   2. @Component()
      1. Applied on ES 6 class to use it as NG Component.
      2. It has following properties
         1. selector: The custom HTML Tag. This will be used to render the component.
         2. template: Inline HTML Template
         3. templateUrl: External HTML file
         4. style and styleUrls: Inline and external CSS style files 
   3. @Pipe()
   4. @Injectable()
   5. @HostListener()
   6. @Directive()
   7. @Input()
   8. @Output()
   9. @ViewChild() 
#=============================================================================
# Folder Structure General
1. src
   1. app
      1. components
         1. folder for each component
            1. app.XXXX.component.ts
            2. app.XXXX.view.html
      2. models
         1. app.xxxx.model.ts
         2. app.xxxx.logic.ts
         3. app.xxxx.constants.ts
      3. services
         1. app.xxxx.services.ts
      4. pipes
         1. app.xxxx.pipes.ts
      5. directives
         1. app.xxxx.directives.ts

#=============================================================================

# Angular Binding
1. Interpolation --> Read-Only {{}}
2. Property Binding --> [<PROPERTY-OF-DOM>] ="<PROPERTY-FROM-COMPONENT>"
3. Event Binding --> (<EVENT>)="method()"
4. Two-Way Binding
   1. Property Binding + Event Binding
   2. [(ngModel)]
      1. Attribute Directivce used to listen property changes from UI component and Back using ngOnChanges() event
      2. The 'ngModel' needs FormsModule to be imported in @NgModule from the @angular/forms package
      3. ngModelChanges will listen to default event of the element
         1. It will update the element's property
         2. It will update the component, the ngOnChanges() event of component
         3. Component will update and it will update the property and all other properties depending on property being updated, the ngDoCheck() event of component
         4. Component will update UI will all of its updated proeprties 

#=============================================================================

# Angular Directives
What are directives?
They are objects used to set custom behavior to Standard DOM elements or can also be used to create custom views in Angular Apps

3 Types of Ditectives
1. Component Directive
2. Structurla Directive
   1. Used to add/remove DOM elements dynamically based on conditions
      1. *ngFor
      2. *ngIf
      3. *ngSwitch-ngSwichCase
3. Attribute Directives 
   1. Custom Attributes for DOM
      1. ngModel
      2. formControlName

#=============================================================================

#Angular for Line-of-Business (LOB) Apps
1. Angular Forms
   1. Template Forms
      1. Utility Forms e.g. Login
      2. Use '#' notation to set idnetity of the Element
      3. <input type="text" #username>
   2. Reactive Forms aka Model-Driven-Forms aka Data-Driven-Forms
      1. Used an Object-Model to handle HTML Form as a singe Unit of post
         1. ReactiveFormsModule, the object for Reactive Forms development
            1. The <form> is mapped with ngForm
            2. (onSubmit) is mapped wtih ngSubmit
            3. The 'FormGroup' object is used to create a collection of FormControls (?)
            4. FormControl is an editiable element inside FormGroup
            5. The [formGroup] a attribute directive is used to map with FormGroup
            6. formControlName is a attribute directive is used to link the editable element with formGroup and Model class properties
         2. FormGroup is instantiated using Model and its properties linked with FormControl 
         3. let fromGroup = new FormGroup({
               1. 'KEY': new FormControl(Model.Property)
         4. });
         5. FormGroup.value will return 'state' of form
            1. value that valid or invalid
         6. FormControl. value will return 'state' of individual element
      2. Form Validations
         1. Validators class
            1. Validation Static methods
               1. required(AbstractControl)/requiredTrue()
               2. pattern(RegEx/strring)
               3. minlength(number)/maxlength(number)
         2. Validation Rule Definition on UI element
            1. <FormGroup>.controls.<FormControlName>.dirty
               1. The element is focused and changed
            2. !<FormGroup>.controls.<FormControlName>.valid
               1. The value/element is invalid
         3. Validation Rule check
            1. <FormGroup>.controls.<FormControlName>.errors.<Validation-Rule>
               1. Validation-Ruke
                  1. required
                  2. pattern
                  3. minlength
                  4. maxlength
                  5. email
            2. Define validation rules on Model property using 
               1. Validators.compose([Array of Validations])
         4. Custom Validators
            1. The method must be static 
            2. The input parameter can be either AbstractControl or Standard Datatype
            3. If value is valid the return null
            4. For Invalid value return 
               1. {invalid:true} / {valid:false}   

#=============================================================================

# Angular Communication Across Components

# Two Cases

1. Components Knows each other based on Parent-Child Relationship
   1. Use @Input() and @Output() to pass data from Parent to Child and emit event from child to parent respectively
      1. @Input is applied on public property of child and this can be used for Property-Binding
      2. @Output is applied on EventEmitter<T> object in Child, this can be used for event binding   
         1. EventEmitter<T> object
            1. Used to define an event with T as 'Payload', means the data to be emitted when an event is raised and subscribed
            2. The subscriber will received the payload data using $event a standard object.
2. Components does not know each-other 

#=============================================================================

# Shared Module for containing Angular Service for Http calls
1. Create a 'lib' folder and create a folder of name 'sharedmodule' in it. This will have following
   1. app.shared.module.ts
      1. Angular Module with CommonModule imported in it
   2. services folder to contain services
      1. This will be 'root' service
2. The HttpClientModule from @angular/common/http is used to provide Object Model for HttpClient to perform Http Requests from Angular Application

#=============================================================================

# Angular Routing

1. The @angular/router package, provided following
   1. The RouterModule, the class used for providing routing Object Model for the application
   2. The Routes class
      1. The Route Table, each enrty in route table is 'Route' object
   3. The Route class   
      1. Following properties
         1. path: string, represents the Route URI --> Mandatory
         2. component: <COMPONENT-Object>, the component to be loaded --> Mandatory
         3. children: <Routes> type, child routing 
         4. redirectTo: string, redirect conditionaly to specific URI
         5. loadChildren: string, path of the lazy loaded module
         6. data: string | array, used in case of Guarded Routes 
   4. The Router class
      1. Provides event based routing using 'navigate()' method
         1. navigate([ROUTE URI])
   5. The ActivatedRoutes class
      1. Used for Subscribing to Parameterized Routes
   6. The 'routerLink' the attribute directive, this accepts an array of information for routing
      1. <a [routerLink]="['<URI-Match-With-Route-Table>', <parameter1>,<parameter2>,...]">
   7. The RouterOutlet component
      1. <router-outlet></router-outlet>
         1. The container where all components will be rendered 

#=============================================================================

# Angular Custom Directives --> Generally the Attribute Directive

1. WHat is the UI and its behavior?
   1. Decide the terget element and how it affects it (logic)
2. Define properties those will be used to set values for directive
   1. Declare @Input() decorated properties
3. Define event methods
   1. These methods will execute logic when events are fired on UI element.
4. Programming
   1. The @Directive() decorator
      1. For attribute directive we use the selector
         1. select:'[Name]'
   2. Input decorated (@Input) properties linked with Directive Selector
   3. Use the Renderer class to manage DOM Rendering and ElementRef class to refer the DOM element to apply directive effects
   4. Use @HostListener() decorator to apply on methods those will be executed on events.  





 
