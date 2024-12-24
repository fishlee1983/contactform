# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
To design and develop the contact form as per the requirement.

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

screenshot:  project/assets/screenshot/
screenshot of the project can be found in above folder. 


### Links

- Solution URL: 
- Live Site URL: 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flex
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```
```
```css
input:not([type="checkbox"]):not([type="radio"]):hover,
textarea:hover {
    border: 2px solid hsl(169, 82%, 27%);
}

input#firstName.error,
input#lastName.error,
input#email.error,
textarea#message.error {
    border: 1px solid rgb(182, 7, 7);
}


```
```reactjs
 useEffect(() => {
    if(isSuccess){
      const timer = setTimeout(()=> setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }

  }, [isSuccess]);


<div className="form-group">
                            <label htmlFor="firstName"> First Name  <span className="star"> * </span></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={errors.firstName ? "error" : undefined}
                                value={values.firstName}
                                onChange={handleOnChange}
                            />
                            {errors.firstName && <p className="errorMsg" > {errors.firstName} </p>}
                        </div>
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Useful resources

- [Example resource 1](https://stackoverflow.com/) - This helped me for when im stuck. I really liked this pattern and will use it going forward.
-  - This is an amazing article which helped me finally error handling in forms. I'd recommend it to anyone still learning this concept.

## Author

- Website -  
- Frontend Mentor - [@fishlee1983](https://www.frontendmentor.io/profile/fishlee1983)


