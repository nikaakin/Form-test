import React, { useState } from "react";
import "../css/warning.scss";

function GeneralInfo({
  onButtonDisable,
}: {
  onButtonDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [focused, setFocused] = useState({
    email: false,
    firstName: false,
    lastName: false,
  });

  const validateName = (name: string) => {
    if (!name) return;
  };

  return (
    <div>
      <div>
        {" "}
        <div className="warning warning-name warning-left">
          {" "}
          <label htmlFor="firstName">FirstName:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Type here..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() =>
              setFocused((f) => {
                return { ...f, firstName: true };
              })
            }
            pattern={"^[A-Za-z]+$"}
            required={true}
            data-focused={focused.firstName.toString()}
            onInvalid={() => onButtonDisable(true)}
          />
          <span>
            First name should only have letters. Numbers and special symbols are
            not allowed!
          </span>
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Type here..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() =>
              setFocused((f) => {
                return { ...f, lastName: true };
              })
            }
            pattern={"^[A-Za-z]+$"}
            required={true}
            data-focused={focused.lastName.toString()}
            onInvalid={() => onButtonDisable(true)}
          />
          <span>
            First name should only have letters. Numbers and special symbols are
            not allowed!
          </span>
        </div>
      </div>
      <div>
        {" "}
        <div>
          {" "}
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Type here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() =>
              setFocused((f) => {
                return { ...f, email: true };
              })
            }
            required={true}
            data-focused={focused.email.toString()}
            onInvalid={() => onButtonDisable(true)}
          />
          <span>
            Email should contain "@" symbol. example: example@test.com
          </span>
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            id="birthday"
            type="date"
            name="birthday"
            placeholder="Type here..."
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
