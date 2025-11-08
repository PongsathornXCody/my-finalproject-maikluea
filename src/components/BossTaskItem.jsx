import React from 'react';

const getBossStyle = (bossName) => {
  
  const styles = {
    // ใช้ "สี"
    // "Goz": { backgroundColor: '#fca5a5' }, 
    // "Binah": { backgroundColor: '#fdba74' }, 
    // "Chesed": { backgroundColor: '#86efac' }, 
    // "Shiro&Kuro": { backgroundColor: '#a5f3fc' }, 
    // "Hieronymus": { backgroundColor: '#fde047' }, 

    //ใช้ "รูป"
    "Goz": { 
      backgroundImage: 'url(Goz.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      
      
      
    },
    "Binah": { 
      backgroundImage: 'url(Binah.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'      
    },
    "Chesed": { 
      backgroundImage: 'url(Chesed.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "Shiro&Kuro": { 
      backgroundImage: 'url(Shiro&Kuro.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "Hieronymus": { 
      backgroundImage: 'url(Hyronimus.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "KaitenFXMk.0": { 
      backgroundImage: 'url(Kaiten.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "Perorodzilla": { 
      backgroundImage: 'url(Perorodzilla.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "HOD": { 
      backgroundImage: 'url(HOD.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "Gregorius": { 
      backgroundImage: 'url(Gregorius.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "Wakamo": { 
      backgroundImage: 'url(Wakamo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
  };

  return styles[bossName] || { backgroundColor: '#e5e7eb' }; // สีเทา (Default)
};

export function BossTaskItem({ task, onRemove, onToggle }) {
  
  const { id, date, boss, isChecked } = task;

  const bossStyle = getBossStyle(boss);

  return (
    <div 
      style={bossStyle}
      className="rounded-xl w-full p-4 shadow-lg flex items-center gap-4 transition-all"
    >
      <div className="flex-grow">
        <p className="eng font-bold text-lg text-gray-800">{boss}</p>
        <p className="thai text-sm text-gray-600">วันที่: {date}</p>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor={`task-${id}`} className="thai font-semibold text-blue-700 text-outline">
          Clear 1,600 เพชร
        </label>
        <input 
          id={`task-${id}`}
          type="checkbox"
          className="w-5 h-5"
          checked={isChecked}
          onChange={() => onToggle(task.id)}
        />
      </div>

      <button
        onClick={() => onRemove(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg"
      >
        Del
      </button>
    </div>
  );
}