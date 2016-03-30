import React from 'react';
import { createDevTools } from 'redux-devtools';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import StateMonitor from 'redux-devtools-persist-state-monitor';


const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <MultipleMonitors>
            <LogMonitor theme='tomorrow'/>
            <StateMonitor />
        </MultipleMonitors>
    </DockMonitor>
)

export default DevTools