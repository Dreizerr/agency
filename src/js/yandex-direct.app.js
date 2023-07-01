import * as utils from "./modules/utils.js";
import * as headerBlock from "./modules/header.js";
import * as masks from "./modules/masks.js";
import * as spollers from "./modules/spollers.js";
import * as burger from "./modules/burger.js";
import * as sliders from "./modules/sliders.js";

import { useDynamicAdapt } from "./libs/dynamicAdapt.js";

useDynamicAdapt("max");

utils.isWebp();
utils.tagTextInTitleAttr();
