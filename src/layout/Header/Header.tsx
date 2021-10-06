import React from "react";
import styles from "./Header.module.css";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { isAuthorized } from "../../helpers";

const Header: React.FC = () => {
  const history = useHistory();

  const renderButtons = () => {
    return (
      <>
        <Button
          text="Sign IN"
          type="default"
          handleClick={() => history.push("/sign-in")}
        />
        <Button text="Sign Up" handleClick={() => history.push("/sign-up")} />
      </>
    );
  };

  return (
    <div className={styles.header}>
      <p>Ant Design + TS</p>
      <div>{isAuthorized() ? <p>Corsair</p> : renderButtons()}</div>
    </div>
  );
};

export default Header;
