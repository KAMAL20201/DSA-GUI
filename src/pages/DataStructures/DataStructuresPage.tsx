import './DataStructuresPage.css'

const DataStructuresPage = () => {
  const dataStructures = [
    {
      id: 'array',
      name: 'Array',
      description: 'A collection of elements stored at contiguous memory locations',
      difficulty: 'Beginner',
    },
    {
      id: 'linked-list',
      name: 'Linked List',
      description: 'A linear collection of data elements with pointer-based connections',
      difficulty: 'Beginner',
    },
    {
      id: 'stack',
      name: 'Stack',
      description: 'LIFO (Last In First Out) data structure',
      difficulty: 'Beginner',
    },
    {
      id: 'queue',
      name: 'Queue',
      description: 'FIFO (First In First Out) data structure',
      difficulty: 'Beginner',
    },
    {
      id: 'binary-tree',
      name: 'Binary Tree',
      description: 'A tree data structure where each node has at most two children',
      difficulty: 'Intermediate',
    },
    {
      id: 'graph',
      name: 'Graph',
      description: 'A collection of nodes connected by edges',
      difficulty: 'Intermediate',
    },
    {
      id: 'hash-table',
      name: 'Hash Table',
      description: 'A data structure that maps keys to values for efficient lookup',
      difficulty: 'Intermediate',
    },
    {
      id: 'heap',
      name: 'Heap',
      description: 'A specialized tree-based data structure satisfying the heap property',
      difficulty: 'Advanced',
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'difficulty-beginner'
      case 'Intermediate':
        return 'difficulty-intermediate'
      case 'Advanced':
        return 'difficulty-advanced'
      default:
        return ''
    }
  }

  return (
    <div className="data-structures-page">
      <div className="container">
        <header className="page-header">
          <h1>Data Structures</h1>
          <p>
            Explore fundamental data structures with interactive visualizations
            and step-by-step explanations
          </p>
        </header>

        <div className="ds-grid">
          {dataStructures.map((ds) => (
            <div key={ds.id} className="ds-card">
              <div className="ds-card-header">
                <h3>{ds.name}</h3>
                <span className={`difficulty-badge ${getDifficultyColor(ds.difficulty)}`}>
                  {ds.difficulty}
                </span>
              </div>
              <p className="ds-description">{ds.description}</p>
              <button className="ds-button">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DataStructuresPage
