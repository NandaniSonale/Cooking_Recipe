export function RelationalSchema() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-center mb-8 text-slate-700">Relational Schema Diagram</h1>
      
      <svg 
        viewBox="0 0 1200 900" 
        className="w-full h-auto"
        style={{ maxHeight: '900px' }}
      >
        {/* Definitions for FK arrows */}
        <defs>
          <marker
            id="fk-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L0,8 L8,4 z" fill="#64748b" />
          </marker>
        </defs>

        {/* User Table */}
        <g>
          <rect x="50" y="50" width="250" height="180" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="50" y="50" width="250" height="40" rx="8" fill="#3b82f6"/>
          <text x="175" y="75" textAnchor="middle" className="fill-white">User</text>
          
          <line x1="50" y1="90" x2="300" y2="90" stroke="#3b82f6" strokeWidth="1"/>
          
          <text x="60" y="115" className="fill-slate-700">user_id</text>
          <text x="240" y="115" className="fill-slate-500 text-sm">PK</text>
          
          <line x1="50" y1="125" x2="300" y2="125" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="60" y="145" className="fill-slate-600">name</text>
          <text x="60" y="165" className="fill-slate-600">email</text>
          <text x="60" y="185" className="fill-slate-600">password</text>
        </g>

        {/* Recipe Table */}
        <g>
          <rect x="475" y="50" width="250" height="240" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
          <rect x="475" y="50" width="250" height="40" rx="8" fill="#ec4899"/>
          <text x="600" y="75" textAnchor="middle" className="fill-white">Recipe</text>
          
          <line x1="475" y1="90" x2="725" y2="90" stroke="#ec4899" strokeWidth="1"/>
          
          <text x="485" y="115" className="fill-slate-700">recipe_id</text>
          <text x="665" y="115" className="fill-slate-500 text-sm">PK</text>
          
          <line x1="475" y1="125" x2="725" y2="125" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="485" y="145" className="fill-slate-600">title</text>
          <text x="485" y="165" className="fill-slate-600">description</text>
          <text x="485" y="185" className="fill-slate-600">cooking_time</text>
          <text x="485" y="205" className="fill-slate-600">difficulty</text>
          
          <line x1="475" y1="215" x2="725" y2="215" stroke="#fbbf24" strokeWidth="1.5"/>
          
          <text x="485" y="235" className="fill-slate-700">user_id</text>
          <text x="665" y="235" className="fill-amber-600 text-sm">FK</text>
        </g>

        {/* Ingredient Table */}
        <g>
          <rect x="900" y="50" width="250" height="180" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
          <rect x="900" y="50" width="250" height="40" rx="8" fill="#22c55e"/>
          <text x="1025" y="75" textAnchor="middle" className="fill-white">Ingredient</text>
          
          <line x1="900" y1="90" x2="1150" y2="90" stroke="#22c55e" strokeWidth="1"/>
          
          <text x="910" y="115" className="fill-slate-700">ingredient_id</text>
          <text x="1090" y="115" className="fill-slate-500 text-sm">PK</text>
          
          <line x1="900" y1="125" x2="1150" y2="125" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="910" y="145" className="fill-slate-600">name</text>
          <text x="910" y="165" className="fill-slate-600">quantity</text>
          <text x="910" y="185" className="fill-slate-600">unit</text>
        </g>

        {/* Recipe_Ingredient Junction Table */}
        <g>
          <rect x="475" y="380" width="250" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <rect x="475" y="380" width="250" height="40" rx="8" fill="#f59e0b"/>
          <text x="600" y="405" textAnchor="middle" className="fill-white">Recipe_Ingredient</text>
          
          <line x1="475" y1="420" x2="725" y2="420" stroke="#f59e0b" strokeWidth="1"/>
          
          <text x="485" y="445" className="fill-slate-700">recipe_id</text>
          <text x="650" y="445" className="fill-slate-500 text-sm">PK, FK</text>
          
          <text x="485" y="465" className="fill-slate-700">ingredient_id</text>
          <text x="650" y="465" className="fill-slate-500 text-sm">PK, FK</text>
          
          <line x1="475" y1="475" x2="725" y2="475" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="485" y="495" className="fill-slate-600">amount</text>
        </g>

        {/* Step Table */}
        <g>
          <rect x="50" y="380" width="250" height="200" rx="8" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2"/>
          <rect x="50" y="380" width="250" height="40" rx="8" fill="#a855f7"/>
          <text x="175" y="405" textAnchor="middle" className="fill-white">Step</text>
          
          <line x1="50" y1="420" x2="300" y2="420" stroke="#a855f7" strokeWidth="1"/>
          
          <text x="60" y="445" className="fill-slate-700">step_id</text>
          <text x="240" y="445" className="fill-slate-500 text-sm">PK</text>
          
          <line x1="50" y1="455" x2="300" y2="455" stroke="#fbbf24" strokeWidth="1.5"/>
          
          <text x="60" y="475" className="fill-slate-700">recipe_id</text>
          <text x="240" y="475" className="fill-amber-600 text-sm">FK</text>
          
          <line x1="50" y1="485" x2="300" y2="485" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="60" y="505" className="fill-slate-600">step_number</text>
          <text x="60" y="525" className="fill-slate-600">instruction</text>
        </g>

        {/* Category Table */}
        <g>
          <rect x="50" y="680" width="250" height="140" rx="8" fill="#fed7aa" stroke="#f97316" strokeWidth="2"/>
          <rect x="50" y="680" width="250" height="40" rx="8" fill="#f97316"/>
          <text x="175" y="705" textAnchor="middle" className="fill-white">Category</text>
          
          <line x1="50" y1="720" x2="300" y2="720" stroke="#f97316" strokeWidth="1"/>
          
          <text x="60" y="745" className="fill-slate-700">category_id</text>
          <text x="240" y="745" className="fill-slate-500 text-sm">PK</text>
          
          <line x1="50" y1="755" x2="300" y2="755" stroke="#cbd5e1" strokeWidth="1"/>
          
          <text x="60" y="775" className="fill-slate-600">name</text>
        </g>

        {/* Recipe_Category Junction Table */}
        <g>
          <rect x="475" y="680" width="250" height="140" rx="8" fill="#fecaca" stroke="#ef4444" strokeWidth="2"/>
          <rect x="475" y="680" width="250" height="40" rx="8" fill="#ef4444"/>
          <text x="600" y="705" textAnchor="middle" className="fill-white">Recipe_Category</text>
          
          <line x1="475" y1="720" x2="725" y2="720" stroke="#ef4444" strokeWidth="1"/>
          
          <text x="485" y="745" className="fill-slate-700">recipe_id</text>
          <text x="650" y="745" className="fill-slate-500 text-sm">PK, FK</text>
          
          <text x="485" y="765" className="fill-slate-700">category_id</text>
          <text x="650" y="765" className="fill-slate-500 text-sm">PK, FK</text>
        </g>

        {/* Foreign Key Relationships */}
        
        {/* User to Recipe */}
        <path d="M 300 140 L 400 140 L 400 260 L 475 260" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>
        
        {/* Recipe to Recipe_Ingredient */}
        <path d="M 600 290 L 600 380" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>
        
        {/* Ingredient to Recipe_Ingredient */}
        <path d="M 1025 230 L 1025 450 L 725 450" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>
        
        {/* Recipe to Step */}
        <path d="M 475 200 L 175 200 L 175 380" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>
        
        {/* Category to Recipe_Category */}
        <path d="M 300 750 L 475 750" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>
        
        {/* Recipe to Recipe_Category */}
        <path d="M 600 290 L 600 680" 
              stroke="#64748b" strokeWidth="2" fill="none" 
              markerEnd="url(#fk-arrow)" strokeDasharray="5,5"/>

        {/* Relationship Labels */}
        <text x="350" y="130" className="fill-slate-500 text-sm">references</text>
        <text x="615" y="340" className="fill-slate-500 text-sm">has</text>
        <text x="820" y="440" className="fill-slate-500 text-sm">includes</text>
        <text x="340" y="190" className="fill-slate-500 text-sm">contains</text>
        <text x="340" y="740" className="fill-slate-500 text-sm">categorizes</text>
        <text x="615" y="640" className="fill-slate-500 text-sm">belongs to</text>
      </svg>
    </div>
  );
}
