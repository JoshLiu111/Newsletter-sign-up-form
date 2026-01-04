# Frontend Mentor - Newsletter Sign Up Form solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/Screenshot%20.png)

### Links

- Live Site URL: [Check](https://newsletter-sign-up-form-pearl.vercel.app/)

## My process

### Built with

- Designed by Figma
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Resiponsive design
- [React](https://reactjs.org/) - JS library
- React Router v7 – Client-side routing

### What I Learned

1. Manage routes with React Router v7

```jsx
// App.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SuccessPage from "./components/SuccessPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
```

2. Navigate with `useNavigate` + pass email using `useLocation`

```jsx
// LoginPage.jsx
navigate("/success", {
  state: { email: email.trim() },
});
```

```jsx
// SuccessPage.jsx
import { useLocation } from "react-router-dom";

const { state } = useLocation();
const email = state?.email;

<p>
  A confirmation email has been sent to <strong>{email}</strong>.
</p>;
```

3. Capture email with `useState` + `onChange`

```jsx
const [email, setEmail] = useState("");

<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />;
```

4. Validate email using Regex

```jsx
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = EMAIL_REGEX.test(email.trim());
```

5. Show error dynamically using `useState`

```jsx
const [error, setError] = useState("");

{
  error && <span className="email-address-invalid">{error}</span>;
}
```

6. Dynamic className + CSS error styles

```jsx
<input className={`email-input-field ${error ? "input-error" : ""}`} />
```

```css
.email-input-field.input-error {
  border: 1px solid var(--red);
  background: #ffe8e6;
  color: var(--red);
}
```

7. Responsive image swapping using `<picture>` + `<source>`

```jsx
<picture className="picture">
  <source media="(max-width: 375px)" srcSet={imgMobile} />
  <source media="(max-width: 768px)" srcSet={imgTablet} />
  <img src={imgDesktop} alt="sign up" className="sign-up-image" />
</picture>
```

8. Mobile layout using `flex-direction: column-reverse`

```css
@media (max-width: 376px) {
  .content {
    flex-direction: column-reverse;
  }
}
```

## Author

- Website - [Click here](https://my-portfolio-frontend-kappa-lemon.vercel.app/)
- Frontend Mentor - [Click here](https://www.frontendmentor.io/profile/JoshLiu111)
