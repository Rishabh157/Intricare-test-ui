import { useState } from "react";
import CampaignAccordion from "../CampaignAccordion";
import CsvUploadPanel from "../CsvUploadPanel";
import ImportMethodCard from "../ImportMethodCard";
import LinkedInUrlPanel from "../LinkedInUrlPanel";
import LookalikesModal from "../LookalikesModal";
import MapPropertiesPanel from "../MapPropertiesPanel";
import WizardFooter from "../WizardFooter";
import { getSecondPanelTitle, importMethods } from "../../../data/importMethods";
import type { AudienceView, ImportMethodId, LookalikeList } from "../../../types";

const SAMPLE_LISTS: LookalikeList[] = [
  { id: "1", name: "Founder", userCount: "1000+ Users in the List" },
  { id: "2", name: "Tech Profiles", userCount: "1000+ Users in the List" },
];

interface AudienceStepProps {
  onNext: () => void;
}

export default function AudienceStep({ onNext }: AudienceStepProps) {
  const [selectedMethod, setSelectedMethod] = useState<ImportMethodId>("linkedin");
  const [audienceView, setAudienceView] = useState<AudienceView>("import");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [lookalikeModalOpen, setLookalikeModalOpen] = useState(false);
  const [lookalikeLists, setLookalikeLists] = useState<LookalikeList[]>([]);
  const [selectedLookalike, setSelectedLookalike] = useState<string | null>(null);

  const [expanded, setExpanded] = useState({
    method: true,
    detail: true,
    map: true,
  });

  const handleMethodChange = (method: ImportMethodId) => {
    setSelectedMethod(method);
    setAudienceView("import");
    setExpanded({ method: true, detail: true, map: true });
    if (method !== "lookalike") setSelectedLookalike(null);
  };

  const handleNext = () => {
    if (selectedMethod === "csv" && audienceView === "import") {
      setAudienceView("map-properties");
      return;
    }
    if (selectedMethod === "lookalike" && !selectedLookalike) {
      setLookalikeModalOpen(true);
      return;
    }
    onNext();
  };

  const renderDetailPanel = () => {
    switch (selectedMethod) {
      case "linkedin":
        return (
          <LinkedInUrlPanel
            url={linkedinUrl}
            onChange={setLinkedinUrl}
            onValidate={() => undefined}
          />
        );
      case "csv":
        return <CsvUploadPanel />;
      case "lookalike":
        return (
          <p className="text-sm text-[#64748b]">
            {selectedLookalike
              ? `Selected list: ${lookalikeLists.find((l) => l.id === selectedLookalike)?.name ?? "—"}`
              : "Select a lookalike list to continue with your campaign."}
            {!selectedLookalike && (
              <button
                type="button"
                onClick={() => setLookalikeModalOpen(true)}
                className="ml-1 text-[#4f6ef7] hover:underline cursor-pointer"
              >
                Open Lookalikes
              </button>
            )}
          </p>
        );
      case "webhook":
        return (
          <p className="text-sm text-[#64748b]">
            Configure your webhook URL to sync leads from Zapier, n8n, or Make in real time.
          </p>
        );
      default:
        return null;
    }
  };

  if (audienceView === "map-properties") {
    return (
      <>
        <div className="space-y-0">
          <CampaignAccordion
            title="Upload CSV file Selected"
            status="complete"
            stepBadge="Step 1 of 2"
            expanded={false}
            onToggle={() => undefined}
          />
          <CampaignAccordion
            title="Upload CSV File"
            status="complete"
            stepBadge="Step 1 of 2"
            expanded={false}
            onToggle={() => undefined}
          />
          <CampaignAccordion
            title="Map Properties"
            status="active"
            expanded={expanded.map}
            onToggle={() => setExpanded((p) => ({ ...p, map: !p.map }))}
            isLast
          >
            <MapPropertiesPanel />
          </CampaignAccordion>
        </div>
        <WizardFooter onNext={onNext} nextOnly />
      </>
    );
  }

  return (
    <>
      <div className="space-y-0">
        <CampaignAccordion
          title="Choose Import Method"
          status="complete"
          stepBadge={selectedMethod === "csv" ? "Step 1 of 2" : undefined}
          expanded={expanded.method}
          onToggle={() => setExpanded((p) => ({ ...p, method: !p.method }))}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {importMethods.map((method) => (
              <ImportMethodCard
                key={method.id}
                title={method.title}
                description={method.description}
                icon={method.icon}
                linkText={method.linkText}
                selected={selectedMethod === method.id}
                onClick={() => handleMethodChange(method.id)}
              />
            ))}
          </div>
        </CampaignAccordion>

        <CampaignAccordion
          title={getSecondPanelTitle(selectedMethod)}
          status="active"
          stepBadge={selectedMethod === "csv" ? "Step 2 of 2" : undefined}
          expanded={expanded.detail}
          onToggle={() => setExpanded((p) => ({ ...p, detail: !p.detail }))}
          isLast
        >
          {renderDetailPanel()}
        </CampaignAccordion>
      </div>

      <WizardFooter onNext={handleNext} nextOnly />

      <LookalikesModal
        open={lookalikeModalOpen}
        onClose={() => setLookalikeModalOpen(false)}
        lists={lookalikeLists}
        onCreateList={() => setLookalikeLists(SAMPLE_LISTS)}
        onSelectList={setSelectedLookalike}
      />
    </>
  );
}
