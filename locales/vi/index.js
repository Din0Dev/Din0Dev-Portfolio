import flatten from "flat";

import button from "./button.json";
import common from "./common.json";
import slide from "./slide.json";
import about from "./about.json";
import services from "./services.json";
import project from "./project.json";
import contact from "./contact.json";

export default {
  button: flatten(button, {
    delimiter: "_",
  }),
  common: flatten(common, {
    delimiter: "_",
  }),
  slide: flatten(slide, {
    delimiter: "_",
  }),
  about: flatten(about, {
    delimiter: "_",
  }),
  services: flatten(services, {
    delimiter: "_",
  }),
  project: flatten(project, {
    delimiter: "_",
  }),
  contact: flatten(contact, {
    delimiter: "_",
  }),
};
