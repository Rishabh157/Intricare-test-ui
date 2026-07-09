import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./components/layout/SidebarContext";
import AdvanceCampaignPage from "./pages/AdvanceCampaignPage";
import CampaignListPage from "./pages/CampaignListPage";
import CampaignPage from "./pages/CampaignPage";
import CampaignStatsPage from "./pages/CampaignStatsPage";

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/campaign" replace />} />
          <Route path="/campaign" element={<CampaignListPage />} />
          <Route path="/campaign/start" element={<CampaignPage />} />
          <Route path="/campaign/advance" element={<AdvanceCampaignPage />} />
          <Route path="/campaign/:slug" element={<CampaignStatsPage />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}
