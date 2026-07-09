import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { WorkflowType } from "../../types";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import WorkflowOptionCard from "./WorkflowOptionCard";

const workflowOptions = [
  {
    id: "advanced" as WorkflowType,
    title: "Advanced Workflow",
    description: "Best for high-volume outreach",
    features: ["Conditional logic", "Multiple paths", "More control"],
    recommended: true,
  },
  {
    id: "standard" as WorkflowType,
    title: "Standard Workflow",
    description: "Best for beginners",
    features: ["Linear steps", "No conditions", "Easy Setup"],
  },
];

interface WorkflowModalProps {
  open: boolean;
  onClose: () => void;
}

export default function WorkflowModal({ open, onClose }: WorkflowModalProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<WorkflowType>("advanced");

  const handleNext = () => {
    onClose();
    navigate("/campaign/advance");
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Select Workflow Mode"
      subtitle="Choose how you want your campaign to behave"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </>
      }
    >
      <div className="space-y-3">
        {workflowOptions.map((option) => (
          <WorkflowOptionCard
            key={option.id}
            {...option}
            selected={selected === option.id}
            onSelect={setSelected}
          />
        ))}
      </div>
    </Modal>
  );
}
