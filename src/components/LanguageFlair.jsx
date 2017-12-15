import React from "react";
import "../styles/LanguageFlair.css";

export default props => {
  const firstCode = props.bodies && props.bodies.filter(b => b.is_code);
  const firstLanguage = firstCode && firstCode.length > 0 ? firstCode[0].code_language : null;
  
  return (
    firstLanguage &&
    <div className="language-flair">
      { firstLanguage }
    </div>
  );
};
