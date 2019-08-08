import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlane,
  faTrain,
  faHome,
  faMoneyBill,
  faMask
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlane, faTrain, faHome, faMoneyBill, faMask);

Vue.component("font-awesome-icon", FontAwesomeIcon);
