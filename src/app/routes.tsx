import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ShareNotePage from "./pages/ShareNotePage";
import ShareFilePage from "./pages/ShareFilePage";
import UploadCompletePage from "./pages/UploadCompletePage";
import CliPage from "./pages/CliPage";
import DownloadPage from "./pages/DownloadPage";
import DownloadPasswordPage from "./pages/DownloadPasswordPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/share/note",
    Component: ShareNotePage,
  },
  {
    path: "/share/file",
    Component: ShareFilePage,
  },
  {
    path: "/share/complete",
    Component: UploadCompletePage,
  },
  {
    path: "/cli",
    Component: CliPage,
  },
  {
    path: "/download",
    Component: DownloadPage,
  },
  {
    path: "/download/:id",
    Component: DownloadPasswordPage,
  },
]);