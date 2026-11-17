import { profile } from '../data/profile';
import './Avatar.css';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Avatar({ size = 'medium', className = '' }: AvatarProps) {
  const sizeClass = {
    small: 'avatar-small',
    medium: 'avatar-medium',
    large: 'avatar-large',
  }[size];

  return (
    <div className={`avatar ${sizeClass} ${className}`}>
      <img
        src={profile.avatar}
        alt={`${profile.name}`}
        className="avatar-image"
        onError={(e) => {
          // Fallback to placeholder if profile image fails to load
          const target = e.target as HTMLImageElement;
          target.src = profile.avatarPlaceholder;
        }}
      />
      <div className="avatar-glow"></div>
    </div>
  );
}
