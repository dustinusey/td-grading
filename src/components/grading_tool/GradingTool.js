import React from 'react';
import SidePanel from "./side_panel/SidePanel";
import GradingUI from "./grading_ui/GradingUI";

function GradingTool() {
    return ( 
        <div className="grading-tool">
            <SidePanel />
            <GradingUI />
        </div>
     );
}

export default GradingTool;