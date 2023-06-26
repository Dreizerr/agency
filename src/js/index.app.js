import * as utils from "./modules/utils.js";
import * as header from "./modules/header.js";
import * as tabs from "./modules/tabs.js";
import * as masks from "./modules/masks.js";

import { useDynamicAdapt } from "./libs/dynamicAdapt.js";

useDynamicAdapt("max");

utils.isWebp();
utils.tagTextInTitleAttr();
