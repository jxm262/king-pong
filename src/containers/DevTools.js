import React from 'react';
import { createDevTools } from 'redux-devtools';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <MultipleMonitors>
            <LogMonitor theme='tomorrow'/>
        </MultipleMonitors>
    </DockMonitor>
)

export default DevTools
