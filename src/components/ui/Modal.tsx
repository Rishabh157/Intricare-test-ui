import type { ReactNode } from "react";
import CrossCircle from "../../assets/cross-circle.svg";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal backdrop"
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-[#eef2f7] px-6 py-5">
          <div>
            <h2 className="text-lg font-medium text-[#5E5873]">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-[#5E5873]">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full cursor-pointer p-1 text-[#94a3b8] transition hover:bg-[#f1f5f9] hover:text-[#475569]"
            aria-label="Close"
          >
           <img src={CrossCircle} alt="cross-btn" />
          </button>
        </div>

        <div className="px-6 py-5">{children}</div>

        {footer && (
          <div className="flex justify-end gap-3 border-t border-[#eef2f7] px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
