import React, { useState } from 'react';
import { TabId } from './types';
import Header from './components/Header';
import Tabs from './components/Tabs';
import OverviewView from './components/OverviewView';
import SapView from './components/SapView';
import ValueChainView from './components/ValueChainView';
import DisruptionView from './components/DisruptionView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="min-h-[500px]">
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'sap' && <SapView />}
          {activeTab === 'valuechain' && <ValueChainView />}
          {activeTab === 'disruptions' && <DisruptionView />}
        </div>
        
        <footer className="mt-12 text-center text-slate-400 text-sm py-4">
          <p>SPDD Project Information System • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;