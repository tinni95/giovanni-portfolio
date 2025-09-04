import { cn } from "@/lib/utils";


export const MacBookFrame = ({ vimeoId, className }) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* MacBook Base */}
      <div className="relative w-[640px] h-[420px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-3xl p-1 shadow-phone">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-t-[22px] overflow-hidden relative">
          {/* Browser Window */}
          <div className="absolute inset-2 bg-background rounded-xl overflow-hidden">
            {/* Browser Header */}
            <div className="h-12 bg-card border-b border-border flex items-center px-4 space-x-3">
              {/* Window Controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Address Bar */}
              <div className="flex-1 mx-4">
                <div className="bg-muted rounded-lg px-4 py-1.5 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">yourapp.com</span>
                </div>
              </div>
              
              {/* Browser Actions */}
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-muted rounded-md"></div>
                <div className="w-6 h-6 bg-muted rounded-md"></div>
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="h-[calc(100%-3rem)] bg-background">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
                title="Desktop App Demo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* MacBook Base/Keyboard */}
      <div className="w-[680px] h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-3xl mx-auto relative">
        {/* Apple Logo */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
        
        {/* Hinge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-600 rounded-b-lg"></div>
      </div>
      
      {/* Base Shadow */}
      <div className="w-[600px] h-4 bg-black/10 rounded-full blur-md mx-auto -mt-2"></div>
    </div>
  );
};