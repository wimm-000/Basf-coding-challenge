import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
// to test context we will load the app

// When isMenu open is true the modal form is displayed
// When menu open the body has class remove scroll
// When menu closed the body does not have remove scroll class
// When searchterm is defined we will start search
// When we start and search term is empty we will load all results based on active types
