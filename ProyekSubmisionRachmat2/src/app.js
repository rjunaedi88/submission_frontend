import "regenerator-runtime";
import "./styles/style.css";
import "./styles/bootstrap/bootstrap.min.css";
import "./script/component/app-bar.js";
import "./script/component/jumbotron.js";
import webpackImage from './img/meal.jpg';
import main from "./script/view/main.js";
document.addEventListener("DOMContentLoaded", main);
document.querySelector('#imageFigure').src = webpackImage;