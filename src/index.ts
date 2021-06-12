import '../styles/index.scss';
import { App } from './App';
import { Header } from "./components/Header";
import { Body } from "./Body";

new App(document.querySelector('body')! as HTMLElement, Header, Body);
