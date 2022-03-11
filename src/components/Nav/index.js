import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick("Contact")}>Contact</span>
          </li>
          {/* NOT ENTIRELY SURE WHAT THIS MEANS - CAN IT BE EXPLAINED? */}
          {categories.map((category) => (
            // Short-cut expression: currentCategory.name === category name will be evaluated as long as it is true.
            // navActive makes the navigation link colour change depending on which category selected.
            <li
              className={`mx-1 ${currentCategory.name === category.name}`}
              key={category.name}
            >
              {/* Event listener for whenever category is clicked. */}
              <span onClick={() => setCurrentCategory(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
