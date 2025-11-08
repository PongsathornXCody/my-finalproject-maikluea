import React from 'react';

function StatCard({ title, value, color = 'text-gray-900', showPlus = true }) {
  const prefix = showPlus && value > 0 ? '+' : '';
  
  return (
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-5 backdrop-blur-sm">
      <p className="thai text-sm font-semibold text-gray-500">{title}</p>
      <p className={`eng text-4xl font-bold ${color}`}>
        {prefix}{value.toFixed(0)}
      </p>
    </div>
  );
}

export function Dash({ 
  totalPyroxene, 
  pyroxeneGoat, 
  percentage,
  basePyroxene, 
  dailyBonus, 
  passBonus, 
  topUpBonus, 
  bossBonus 
}) {

  const themeColor = '#a9e1ff';

  return (
    <div 
      className="rounded-xl w-[90%] h-full mx-[5%] my-[5%] p-6 overflow-y-auto" 
      style={{ backgroundColor: themeColor }}
    >
      <h2 className="eng text-3xl font-bold text-gray-800 mb-6">Dashboard Summary</h2>
      
      <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 text-center">
        <p className="thai text-lg font-semibold text-gray-600 mb-2">เพชรรวมทั้งหมด</p>
        <p className="eng font-bold text-6xl text-blue-600">
          {totalPyroxene.toFixed(0)}
        </p>
        <div className="mt-3">
          <p className="thai text-md text-gray-500">
            เป้าหมาย: <mark>{pyroxeneGoat.toFixed(0)} ({(pyroxeneGoat/120).toFixed(0)} Roll)</mark>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${percentage > 100 ? 100 : percentage}%` }}
            ></div>
          </div>
          <p className="eng font-semibold text-blue-600 mt-1">{percentage.toFixed(1)}%</p>
        </div>
      </div>

      <h3 className="eng text-2xl font-semibold text-gray-700 mb-4">Pyroxene from:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <StatCard 
          title="เพชรตั้งต้น" 
          value={basePyroxene} 
          color="text-blue-500"
          showPlus={false}
        />
        
        <StatCard 
          title="จาก Daily & Arena" 
          value={dailyBonus}
          color="text-green-600"
        />
        
        <StatCard 
          title="จาก Pass รายเดือน" 
          value={passBonus}
          color="text-green-600"
        />
        
        <StatCard 
          title="จากการเติมเงิน Top-Up" 
          value={topUpBonus}
          color="text-purple-600"
        />
        
        <StatCard 
          title="โบนัส Clear บอส" 
          value={bossBonus}
          color="text-red-600"
        />
        
      </div>
    </div>
  );
}