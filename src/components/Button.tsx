interface ButtonProps {
    label: string;
    type: 'number' | 'operator' | 'equals' | 'clear' | 'toggle' | 'percentage';
    onClick: () => void;
  }

  const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {
    return (
      <button id={label === '0' ? 'double-width' : ''} className={`button ${type}`} onClick={onClick}>
        {label}
      </button>
    );
  };

export default Button;