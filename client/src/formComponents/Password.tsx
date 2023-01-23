import React, { useState } from "react";

function Password({
  onButtonDisable,
}: {
  onButtonDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Type here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm password:</label>
        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Type here..."
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Password;
