import "styled-components";

import { dark } from "./themes";

export default Theme = typeof dark;

declare module "styled-components"{
  export interface DefaultTheme extends Theme {}
}
