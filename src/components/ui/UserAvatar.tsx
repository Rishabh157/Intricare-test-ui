interface UserAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  showStatus?: boolean;
}

const sizeMap = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

export default function UserAvatar({ name, size = "md", showStatus = false }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative shrink-0">
      <div
        className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[#c4b5fd] to-[#93c5fd] font-semibold text-white ${sizeMap[size]}`}
      >
        {initials}
      </div>
      {showStatus && (
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22c55e]" />
      )}
    </div>
  );
}

interface UserInfoProps {
  name: string;
  role: string;
  avatarSize?: "sm" | "md";
  showStatus?: boolean;
}

export function UserInfo({ name, role, avatarSize = "sm", showStatus }: UserInfoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="hidden text-right sm:block">
        <p className="text-sm font-medium text-[#1e293b]">{name}</p>
        <p className="text-xs text-[#64748b]">{role}</p>
      </div>
      <UserAvatar name={name} size={avatarSize} showStatus={showStatus} />
    </div>
  );
}
