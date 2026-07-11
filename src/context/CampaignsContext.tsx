import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { campaigns as seedCampaigns } from "../data/campaigns";
import type { Campaign } from "../types/campaign";

const STORAGE_KEY = "campaigns-data";

interface CampaignsContextValue {
  campaigns: Campaign[];
  hasCampaigns: boolean;
  launchCampaigns: () => void;
}

const CampaignsContext = createContext<CampaignsContextValue | null>(null);

function loadCampaigns(): Campaign[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Campaign[];
  } catch {
    // ignore
  }
  return [];
}

export function CampaignsProvider({ children }: { children: ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>(loadCampaigns);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
    } catch {
      // ignore
    }
  }, [campaigns]);

  const launchCampaigns = useCallback(() => {
    setCampaigns(seedCampaigns);
  }, []);

  const value = useMemo(
    () => ({
      campaigns,
      hasCampaigns: campaigns.length > 0,
      launchCampaigns,
    }),
    [campaigns, launchCampaigns]
  );

  return (
    <CampaignsContext.Provider value={value}>{children}</CampaignsContext.Provider>
  );
}

export function useCampaigns() {
  const ctx = useContext(CampaignsContext);
  if (!ctx) throw new Error("useCampaigns must be used within CampaignsProvider");
  return ctx;
}
