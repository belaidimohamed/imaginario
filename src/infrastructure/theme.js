import { lightTheme , darkTheme} from "./colors";

export const theme = (type) => {
  return {
    colors: type=='dark'? darkTheme:lightTheme,
  }
};