import React from 'react';

import TechdegreeToggle from './TechdegreeToggle';
import ProjectList from './ProjectList';
import ValidatorList from './ValidatorList';
import StudyGuideList from './StudyGuideList';

function SidePanel() {
    return ( 
        <div className="side-panel">
            <TechdegreeToggle />
            <ProjectList />
            <ValidatorList />
            <StudyGuideList />
        </div>
     );
}

export default SidePanel;