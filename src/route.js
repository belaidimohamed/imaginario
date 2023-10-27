import { createBrowserRouter } from "react-router-dom";
import Brand from "./views/brand/brand";
import Media from "./views/media/media";
import Text from "./views/text/text";
import Transform from "./views/transform/transform";

export const router = createBrowserRouter([
  { path:'/text',element:<Text />},
  { path:'/media', element: <Media /> },
  { path:'/transform',element:<Transform />},
  { path:'/brand',element:<Brand />},
  { path:'/*',element:<Text />},
])