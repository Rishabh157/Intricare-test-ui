import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./components/layout/SidebarContext";
import { CampaignsProvider } from "./context/CampaignsContext";
import AdvanceCampaignPage from "./pages/AdvanceCampaignPage";
import CampaignPage from "./pages/CampaignPage";
import CampaignStatsPage from "./pages/CampaignStatsPage";

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <CampaignsProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/campaign" replace />} />
            <Route path="/campaign" element={<CampaignPage />} />
            <Route path="/campaign/advance" element={<AdvanceCampaignPage />} />
            <Route path="/campaign/:slug" element={<CampaignStatsPage />} />
          </Routes>
        </CampaignsProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
}
