import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setData({
        revenue: 54200,
        users: 1250,
        orders: 450,
        sales: [1200, 1900, 3000, 5000, 2000]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div style={{padding: '50px', textAlign: 'center', fontSize: '24px'}}>Loading Dashboard...</div>;

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales ₹',
      data: data.sales,
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59,130,246,0.1)',
      tension: 0.4
    }]
  };

  return (
    <div style={{padding: '40px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', minHeight: '100vh'}}>
      <h1 style={{fontSize: '48px', fontWeight: 'bold', textAlign: 'center', background: 'linear-gradient(45deg, #1e40af, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        📊 Analytics Dashboard
      </h1>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '40px 0', maxWidth: '1200px', marginInline: 'auto'}}>
        <div style={{background: 'white', padding: '32px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', textAlign: 'center'}}>
          <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#059669'}}>₹{data.revenue?.toLocaleString()}</h3>
          <p style={{color: '#6b7280', marginTop: '8px', fontSize: '18px'}}>Total Revenue</p>
        </div>
        <div style={{background: 'white', padding: '32px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', textAlign: 'center'}}>
          <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#2563eb'}}>{data.users?.toLocaleString()}</h3>
          <p style={{color: '#6b7280', marginTop: '8px', fontSize: '18px'}}>Total Users</p>
        </div>
        <div style={{background: 'white', padding: '32px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', textAlign: 'center'}}>
          <h3 style={{fontSize: '36px', fontWeight: 'bold', color: '#8b5cf6'}}>{data.orders?.toLocaleString()}</h3>
          <p style={{color: '#6b7280', marginTop: '8px', fontSize: '18px'}}>Total Orders</p>
        </div>
      </div>

      <div style={{background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '1200px', marginInline: 'auto'}}>
        <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '24px'}}>📈 Sales Trend</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
