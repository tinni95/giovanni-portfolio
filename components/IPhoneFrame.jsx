import { cn } from "@/utlis/utils";


export const IPhoneFrame = ({ vimeoId, className }) => {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      {/* iPhone Frame */}
      <div className="relative w-full max-w-[280px] aspect-[280/570] bg-iphone-frame rounded-[3rem] p-2 shadow-phone">
        {/* Camera notch */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-iphone-frame rounded-2xl z-10"></div>

        {/* Screen */}
        <div className="w-full h-full bg-iphone-screen rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/20 to-transparent z-10"></div>

          {/* Vimeo embed */}
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 w-full h-full object-cover"
            title="Mobile App Demo"
          ></iframe>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-iphone-highlight/30 rounded-full"></div>

        {/* Side buttons */}
        <div className="absolute left-0 top-24 w-1 h-16 bg-iphone-frame rounded-r-lg shadow-inner"></div>
        <div className="absolute left-0 top-44 w-1 h-8 bg-iphone-frame rounded-r-lg shadow-inner"></div>
        <div className="absolute left-0 top-56 w-1 h-8 bg-iphone-frame rounded-r-lg shadow-inner"></div>

        {/* Power button */}
        <div className="absolute right-0 top-32 w-1 h-12 bg-iphone-frame rounded-l-lg shadow-inner"></div>
      </div>
    </div>
  );
};
