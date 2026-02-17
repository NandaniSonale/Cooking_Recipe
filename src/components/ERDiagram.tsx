export function ERDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-center mb-8 text-slate-700">Cooking Recipe ER Diagram</h1>
      
      <svg 
        viewBox="0 0 1200 800" 
        className="w-full h-auto"
        style={{ maxHeight: '800px' }}
      >
        {/* Definitions for arrowheads and crow's foot notation */}
        <defs>
          {/* One side (single line) */}
          <marker
            id="one"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="#64748b" strokeWidth="2" />
          </marker>
          
          {/* Many side (crow's foot) */}
          <marker
            id="many"
            markerWidth="15"
            markerHeight="15"
            refX="0"
            refY="7.5"
            orient="auto"
          >
            <path d="M0,0 L0,15 M0,7.5 L10,0 M0,7.5 L10,15" stroke="#64748b" strokeWidth="2" fill="none" />
          </marker>
        </defs>

        {/* User Entity */}
        <g>
          <rect x="50" y="50" width="180" height="140" rx="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="50" y="50" width="180" height="40" rx="12" fill="#3b82f6" opacity="0.3"/>
          <text x="140" y="75" textAnchor="middle" className="fill-slate-700">User</text>
          <text x="60" y="105" className="fill-slate-600 text-sm">user_id (PK)</text>
          <text x="60" y="125" className="fill-slate-600 text-sm">name</text>
          <text x="60" y="145" className="fill-slate-600 text-sm">email</text>
          <text x="60" y="165" className="fill-slate-600 text-sm">password</text>
        </g>

        {/* Recipe Entity */}
        <g>
          <rect x="510" y="50" width="200" height="180" rx="12" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
          <rect x="510" y="50" width="200" height="40" rx="12" fill="#ec4899" opacity="0.3"/>
          <text x="610" y="75" textAnchor="middle" className="fill-slate-700">Recipe</text>
          <text x="520" y="105" className="fill-slate-600 text-sm">recipe_id (PK)</text>
          <text x="520" y="125" className="fill-slate-600 text-sm">title</text>
          <text x="520" y="145" className="fill-slate-600 text-sm">description</text>
          <text x="520" y="165" className="fill-slate-600 text-sm">cooking_time</text>
          <text x="520" y="185" className="fill-slate-600 text-sm">difficulty</text>
          <text x="520" y="205" className="fill-slate-600 text-sm">user_id (FK)</text>
        </g>

        {/* Ingredient Entity */}
        <g>
          <rect x="950" y="50" width="200" height="120" rx="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
          <rect x="950" y="50" width="200" height="40" rx="12" fill="#22c55e" opacity="0.3"/>
          <text x="1050" y="75" textAnchor="middle" className="fill-slate-700">Ingredient</text>
          <text x="960" y="105" className="fill-slate-600 text-sm">ingredient_id (PK)</text>
          <text x="960" y="125" className="fill-slate-600 text-sm">name</text>
          <text x="960" y="145" className="fill-slate-600 text-sm">quantity</text>
          <text x="960" y="165" className="fill-slate-600 text-sm">unit</text>
        </g>

        {/* Recipe_Ingredient Junction Table */}
        <g>
          <rect x="760" y="200" width="220" height="100" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <rect x="760" y="200" width="220" height="40" rx="12" fill="#f59e0b" opacity="0.3"/>
          <text x="870" y="225" textAnchor="middle" className="fill-slate-700">Recipe_Ingredient</text>
          <text x="770" y="255" className="fill-slate-600 text-sm">recipe_id (FK, PK)</text>
          <text x="770" y="275" className="fill-slate-600 text-sm">ingredient_id (FK, PK)</text>
          <text x="770" y="295" className="fill-slate-600 text-sm">amount</text>
        </g>

        {/* Step Entity */}
        <g>
          <rect x="510" y="350" width="200" height="140" rx="12" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2"/>
          <rect x="510" y="350" width="200" height="40" rx="12" fill="#a855f7" opacity="0.3"/>
          <text x="610" y="375" textAnchor="middle" className="fill-slate-700">Step</text>
          <text x="520" y="405" className="fill-slate-600 text-sm">step_id (PK)</text>
          <text x="520" y="425" className="fill-slate-600 text-sm">recipe_id (FK)</text>
          <text x="520" y="445" className="fill-slate-600 text-sm">step_number</text>
          <text x="520" y="465" className="fill-slate-600 text-sm">instruction</text>
        </g>

        {/* Category Entity */}
        <g>
          <rect x="50" y="350" width="180" height="100" rx="12" fill="#fed7aa" stroke="#f97316" strokeWidth="2"/>
          <rect x="50" y="350" width="180" height="40" rx="12" fill="#f97316" opacity="0.3"/>
          <text x="140" y="375" textAnchor="middle" className="fill-slate-700">Category</text>
          <text x="60" y="405" className="fill-slate-600 text-sm">category_id (PK)</text>
          <text x="60" y="425" className="fill-slate-600 text-sm">name</text>
        </g>

        {/* Recipe_Category Junction Table */}
        <g>
          <rect x="270" y="380" width="220" height="100" rx="12" fill="#fecaca" stroke="#ef4444" strokeWidth="2"/>
          <rect x="270" y="380" width="220" height="40" rx="12" fill="#ef4444" opacity="0.3"/>
          <text x="380" y="405" textAnchor="middle" className="fill-slate-700">Recipe_Category</text>
          <text x="280" y="435" className="fill-slate-600 text-sm">recipe_id (FK, PK)</text>
          <text x="280" y="455" className="fill-slate-600 text-sm">category_id (FK, PK)</text>
        </g>

        {/* Relationships */}
        
        {/* User to Recipe (1:M) */}
        <line x1="230" y1="120" x2="510" y2="120" stroke="#64748b" strokeWidth="2" markerEnd="url(#many)" markerStart="url(#one)"/>
        <text x="340" y="110" className="fill-slate-600 text-sm">creates</text>

        {/* Recipe to Recipe_Ingredient (1:M) */}
        <line x1="710" y1="200" x2="710" y2="230" stroke="#64748b" strokeWidth="2" markerEnd="url(#many)" markerStart="url(#one)"/>
        
        {/* Recipe_Ingredient to Ingredient (M:1) */}
        <line x1="980" y1="240" x2="1050" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#one)" markerStart="url(#many)"/>

        {/* Recipe to Step (1:M) */}
        <line x1="610" y1="230" x2="610" y2="350" stroke="#64748b" strokeWidth="2" markerEnd="url(#many)" markerStart="url(#one)"/>
        <text x="620" y="290" className="fill-slate-600 text-sm">has</text>

        {/* Category to Recipe_Category (1:M) */}
        <line x1="230" y1="410" x2="270" y2="410" stroke="#64748b" strokeWidth="2" markerEnd="url(#many)" markerStart="url(#one)"/>
        
        {/* Recipe_Category to Recipe (M:1) */}
        <line x1="490" y1="420" x2="510" y2="210" stroke="#64748b" strokeWidth="2" markerEnd="url(#one)" markerStart="url(#many)"/>

        {/* Cardinality labels */}
        <text x="250" y="140" className="fill-slate-500 text-xs">1</text>
        <text x="490" y="140" className="fill-slate-500 text-xs">M</text>
        
        <text x="695" y="195" className="fill-slate-500 text-xs">1</text>
        <text x="695" y="255" className="fill-slate-500 text-xs">M</text>
        
        <text x="920" y="255" className="fill-slate-500 text-xs">M</text>
        <text x="1030" y="185" className="fill-slate-500 text-xs">1</text>
        
        <text x="625" y="245" className="fill-slate-500 text-xs">1</text>
        <text x="625" y="340" className="fill-slate-500 text-xs">M</text>
        
        <text x="245" y="420" className="fill-slate-500 text-xs">1</text>
        <text x="255" y="420" className="fill-slate-500 text-xs">M</text>
        
        <text x="475" y="435" className="fill-slate-500 text-xs">M</text>
        <text x="505" y="225" className="fill-slate-500 text-xs">1</text>
      </svg>
    </div>
  );
}
