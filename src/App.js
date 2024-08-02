import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => (
    <div className="dashboard">
        <header className="dashboard-header">
            <h1>Cyberpunk SOC Dashboard</h1>
        </header>
        <aside className="dashboard-sidebar">
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Alerts</li>
                    <li>Incidents</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside>
        <main className="dashboard-main">
            <Card title="Threat Level">
                <p>High</p>
            </Card>
            <Card title="Latest Alerts">
                <ul>
                    <li>Alert 1</li>
                    <li>Alert 2</li>
                </ul>
            </Card>
            <Card title="Incidents">
                <ul>
                    <li>Incident 1</li>
                    <li>Incident 2</li>
                </ul>
            </Card>
            <Card title="System Status">
                <p>All systems operational.</p>
            </Card>
            <Card title="Network Traffic">
                <p>Normal</p>
            </Card>
        </main>
    </div>
);

export default App;
