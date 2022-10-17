import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = () => {
  const formDataInitialState = {
    hasUpperCaseLetter: false,
    hasNumbers: false,
    hasSpecialCharacters: false,
    password: "",
  };

  const [numberOfCharacters, setNumberOfCharacters] = useState(8);
  const [formData, setFormData] = useState(formDataInitialState);

  const changeRange = () => {
    const slider = document.querySelector(".input-number-characters");
    const sliderValue = document.querySelector(".slider-value");

    sliderValue.textContent = slider.value;

    slider.oninput = () => {
      const value = slider.value;
      sliderValue.textContent = value;
      setNumberOfCharacters(value);
    };
  };

  const handleChange = (id) => {
    setTimeout(() => {
      const checkbox = document.querySelector("." + `${id}`);

      checkbox.addEventListener("change", (event) => {
        switch (id) {
          case "contain-uppercase":
            if (event.currentTarget.checked) {
              setFormData({ ...formData, hasUpperCaseLetter: true });
            } else {
              setFormData({ ...formData, hasUpperCaseLetter: false });
            }

            break;

          case "contain-number":
            if (event.currentTarget.checked) {
              setFormData({ ...formData, hasNumbers: true });
            } else {
              setFormData({ ...formData, hasNumbers: false });
            }

            break;

          case "contain-special-character":
            if (event.currentTarget.checked) {
              setFormData({ ...formData, hasSpecialCharacters: true });
            } else {
              setFormData({ ...formData, hasSpecialCharacters: false });
            }

            break;

          default:
            break;
        }
      });
    }, 500);
  };

  const generateCharacter = (number) => {
    let character;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "1234567890".split("");
    const specialCharacters = "~`! @#$%^&*()_-+=:;'<>.?/".split("");

    switch (number) {
      case 0:
        character = alphabet[Math.floor(Math.random() * alphabet.length)];
        break;

      case 1:
        character =
          alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        break;

      case 2:
        character = [Math.floor(Math.random() * numbers.length)];
        break;

      case 3:
        character =
          specialCharacters[
            Math.floor(Math.random() * specialCharacters.length)
          ];
        break;

      default:
        break;
    }

    return character;
  };

  const calculatePassword = () => {
    let password = [];
    let typeCharacter;

    if (
      formData.hasUpperCaseLetter &&
      formData.hasNumbers &&
      formData.hasSpecialCharacters
    ) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 4);
        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasUpperCaseLetter && formData.hasNumbers) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 3);
        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasUpperCaseLetter && formData.hasSpecialCharacters) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 4);

        if (typeCharacter === 2) {
          typeCharacter = 0;
        }

        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasNumbers && formData.hasSpecialCharacters) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 4);

        if (typeCharacter === 1) {
          typeCharacter = 0;
        }

        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasUpperCaseLetter) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 2);
        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasNumbers) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 2);

        if (typeCharacter === 1) {
          typeCharacter = 2;
        }

        password.push(generateCharacter(typeCharacter));
      }
    } else if (formData.hasSpecialCharacters) {
      for (let i = 0; i < numberOfCharacters; i++) {
        typeCharacter = Math.floor(Math.random() * 2);

        if (typeCharacter === 1) {
          typeCharacter = 3;
        }

        password.push(generateCharacter(typeCharacter));
      }
    } else {
      for (let i = 0; i < numberOfCharacters; i++) {
        password.push(generateCharacter(0));
      }
    }

    password = password.join("");

    setFormData({ ...formData, password: password });
  };

  return (
    <FormStyled className="form-container">
      <form className="form">
        <div className="input-container">
          <input
            type="text"
            id="generatedPassword"
            className="generated-password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="range-container">
          <label htmlFor="numberCharacters" className="input-text">
            Password length
          </label>
          <div className="inputs-container">
            <input
              className="input-number-characters"
              name="input-number-characters"
              type="range"
              defaultValue={numberOfCharacters}
              min="1"
              max="20"
              id="numberCharacters"
              onChange={changeRange}
            />
            <span className="slider-value">{numberOfCharacters}</span>
          </div>
        </div>

        <div className="inputs-container">
          <label htmlFor="contain-uppercase" className="input-text">
            Contain uppercase letters
          </label>
          <input
            type="checkbox"
            className="contain-uppercase"
            id="contain-uppercase"
            name="contain-uppercase"
            onChange={handleChange("contain-uppercase")}
          />
        </div>

        <div className="inputs-container">
          <label htmlFor="contain-number" className="input-text">
            Contain numbers
          </label>
          <input
            type="checkbox"
            className="contain-number"
            id="contain-number"
            name="contain-number"
            onChange={handleChange("contain-number")}
          />
        </div>

        <div className="inputs-container">
          <label htmlFor="contain-special-character" className="input-text">
            Contain special characters
          </label>
          <input
            type="checkbox"
            className="contain-special-character"
            id="contain-special-character"
            name="contain-special-character"
            onChange={handleChange("contain-special-character")}
          />
        </div>

        <div onClick={calculatePassword} className="form-button">
          <Button />
        </div>
      </form>
    </FormStyled>
  );
};

export default Form;
