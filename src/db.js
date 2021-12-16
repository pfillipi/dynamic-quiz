export const db =
  {
    "result": [
      {
        "uid": "03d1f4a1-9c05-46c7-a347-6a0e96c1d6cb",
        "question": "How can you intercept incoming or outgoing HTTP requests using HttpClient?",
        "possibleAnswers": [
          {
            "answer": "Create a class that uses the ```intercept()``` method."
          },
          {
            "answer": "Create a class that uses the ```HttpHandler```."
          },
          {
            "answer": "Add the intercept directive to the component's template."
          },
          {
            "answer": "Inject the intercept service into the component."
          },
          {
            "answer": "I don't know yet."
          }
        ]
      },
      {
        "question": "You are creating a new application using the Angular command-line interface (CLI). You want to use seperate styles for each component and want to include a routing configuration. Which is the correct command to use to create the app?",
        "uid": "35d555f3-9c43-496e-ba09-c0502fdaeaa4",
        "possibleAnswers": [
          {
            "answer": "```ng new --routing```"
          },
          {
            "answer": "```new new --external-style --routing```"
          },
          {
            "answer": "```ng new --inline-template```"
          },
          {
            "answer": "```ng new --inline-style --routing```"
          },
          {
            "answer": "I don't know yet."
          }
        ]
      },
      {
        "uid": "4a139454-f3ec-4e11-a3f4-872399d1fcc2",
        "question": "what option do you pass to ```ng build``` to minify your code?",
        "possibleAnswers": [
          {
            "answer": "```--compact```"
          },
          {
            "answer": "```--output-path```"
          },
          {
            "answer": "```--polyfills```"
          },
          {
            "answer": "```--optimization```"
          },
          {
            "answer": "I don't know yet."
          }
        ]
      },
      {
        "uid": "691ab778-3b9e-4d2e-b5e8-ff03e1162019",
        "possibleAnswers": [
          {
            "answer": "Render the template without children"
          },
          {
            "answer": "Render the template with child components"
          },
          {
            "answer": "Render the template with one level down the hierarchy"
          },
          {
            "answer": "Render the template of the child components only"
          },
          {
            "answer": "I don't know yet."
          }
        ],
        "question": "What is the ideal outcome of using shallow tests?"
      },
      {
        "question": "What must you add on your second ```router-outlet``` if you want to use a component-less route to load two components?",
        "uid": "8183d50c-ceea-4d23-87ef-e7bcbe7233b9",
        "possibleAnswers": [
          {
            "answer": "A ```path``` attribute that matches the path of the second component"
          },
          {
            "answer": "a ```LoadChildren``` attribute set to true"
          },
          {
            "answer": "The ```routerLink``` directive"
          },
          {
            "answer": "A ```name``` attribute that matches the outlet property of the second component"
          },
          {
            "answer": "I don't know yet."
          }
        ]
      },
      {
        "uid": "8e790c78-5731-44fc-8aff-d8f63ddf8538",
        "question": "How does a template reference variable in the following code (```#heroNameVar```). help with the validation of a template-driven form?\n```\n<input id=\"heroNameId\"\n    type=\"text\"\n    required\n    [(ngModel)] = hero.name\n    name=\"heroName\"\n    #heroNameVar=\"ngModel\" />",
        "possibleAnswers": [
          {
            "answer": "It binds the input element to the form model defined in the component class that is used for validation."
          },
          {
            "answer": "It registers the input element with the form model (ngForm) so its validation state can be tracked."
          },
          {
            "answer": "It provides for two-way binding you can use for tracking user changes and performing validation."
          },
          {
            "answer": "It provides a reference to an input element's state that you can use for styling errors or displaying validation error messages."
          },
          {
            "answer": "I don't know yet."
          }
        ]
      },
      {
        "possibleAnswers": [
          {
            "answer": "In the HTML on the ```Input``` element: ```[formControlName]=\"heroName\"```"
          },
          {
            "answer": "In the HTML on the ```Input``` element ```formControlName=\"heroName\"```"
          },
          {
            "answer": "In the component class:\n```@ViewChildren(input) nameInput: FormControl;this.heroForm.heroName = nameInput;```"
          },
          {
            "answer": "In the HTML on the ```input``` element: ```[formControlName]=\"heroName\"```"
          },
          {
            "answer": "I don't know yet."
          }
        ],
        "uid": "dd406643-8004-48b2-b00b-07b5edec1653",
        "question": "Given the following code. Where do you associate an ```Input``` element with the form data structure if the form is bound in the template?\n\n```this.heroForm = new FormGroup({\n     heroName: new FormControl(),\n     identityName: new FormControl()\n});"
      },
      {
        "uid": "dee3b45d-b777-4d32-b5d9-568ab53cd67f",
        "possibleAnswers": [
          {
            "answer": "It creates an empty workspace"
          },
          {
            "answer": "It creates an HTML version of the app"
          },
          {
            "answer": "It performs a test run of generating the app, but does not create the app"
          },
          {
            "answer": "It creates an Angular app without routing configured"
          },
          {
            "answer": "I don't know yet"
          }
        ],
        "question": "What is the effect of creating and Angular application with the following command?\n\n```ng new sample-app --create-application false```"
      }
    ]
  }