import { useEffect, useState } from "react";
import { Check, List } from "lucide-react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import type { LookalikeList } from "../../types";

interface LookalikesModalProps {
  open: boolean;
  onClose: () => void;
  lists: LookalikeList[];
  onCreateList: () => void;
  onSelectList: (id: string) => void;
}

function LookalikeListItem({
  list,
  selected,
  onSelect,
}: {
  list: LookalikeList;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left transition ${
        selected
          ? "border-[#4f6ef7] bg-[#f0f4ff]"
          : "border-[#e8ecf4] bg-white hover:border-[#c7d2fe]"
      }`}
    >
      <div className="flex items-center gap-3">
        <List className="h-4 w-4 text-[#64748b]" />
        <span className="text-sm text-[#334155]">
          <strong className="font-semibold text-[#1e293b]">{list.name}</strong> ({list.userCount})
        </span>
      </div>
      {selected && (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#4f6ef7]">
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </div>
      )}
    </button>
  );
}

export default function LookalikesModal({
  open,
  onClose,
  lists,
  onCreateList,
  onSelectList,
}: LookalikesModalProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (lists.length > 0 && !selectedId) {
      setSelectedId(lists[0].id);
    }
    if (lists.length === 0) {
      setSelectedId(null);
    }
  }, [lists, selectedId]);

  const handleSelect = () => {
    if (selectedId) {
      onSelectList(selectedId);
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Lookalikes"
      subtitle="Select a lookalike list for this campaign"
      footer={
        lists.length > 0 ? (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSelect} disabled={!selectedId}>
              Select List
            </Button>
          </>
        ) : undefined
      }
    >
      {lists.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-base font-semibold text-[#1e293b]">You don&apos;t have any leads</p>
          <p className="mt-1 text-sm text-[#64748b]">
            Create a lead list to start running campaigns
          </p>
          <Button onClick={onCreateList} className="mt-6">
            Create a List
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {lists.map((list) => (
            <LookalikeListItem
              key={list.id}
              list={list}
              selected={selectedId === list.id}
              onSelect={() => setSelectedId(list.id)}
            />
          ))}
          <div className="pt-1 text-right">
            <button type="button" className="text-sm text-[#4f6ef7] hover:underline">
              Add New
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
