import React from "react";
import { Link } from "react-router-dom";
import "../styles/ActionButton.css";

export default props =>
  <Link { ...props } className={ `action bordered ${props.isdark ? "dark" : ""}` }>{ props.text }</Link>;

export const ActionAButton = props =>
  <a href={ props.to } className={ `action bordered ${props.isdark ? "dark" : ""}` }>{ props.text }</a>;

export const ActionTagButton = props =>
  <Link { ...props } className={ `action bordered tag ${props.isdark ? "dark" : ""}` }>{ props.text }</Link>;