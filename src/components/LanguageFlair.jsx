import React from "react";
import "../styles/LanguageFlair.css";

export default props => {
  const firstCode = props.bodies && props.bodies.filter(b => b.is_code);
  const firstLanguage = firstCode && firstCode.length > 0 ? firstCode[0].code_language : null;
  
  const text = firstLanguage && LANGUAGE_STRINGS[firstLanguage];
  const style = firstLanguage && LANGUAGE_STYLES[firstLanguage];
  return (
    firstLanguage &&
    <div className={ `language-flair ${style}` }>
      <p className="language-text">{ text }</p>
    </div>
  );
};

const LANGUAGE_STRINGS = {
  "javascript" : "JS",
  "typescript" : "TS",
};

const LANGUAGE_STYLES = {
  "javascript" : "yellow",
  "typescript" : "blue dark",
};