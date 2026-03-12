export default function Logo({ className = "h-10", textClassName = "" }: { className?: string, textClassName?: string }) {
  return (
    <div className="flex items-center">
      <img 
        src="https://www.smilecarefoundation.com/img/logo.png" 
        alt="Smile Care Foundation Logo" 
        className={`object-contain ${className}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
