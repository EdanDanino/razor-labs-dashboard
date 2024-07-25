import "styled-components";
import { Theme } from "./Shared/Theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
