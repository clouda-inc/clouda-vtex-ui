import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProductTabs, type ProductTabsData } from 'clouda-vtex-ui';
import './App.css'

const mockSpecificationData: ProductTabsData = {
  overview: `
    <p class="mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `,
  productPartNumber: "123-456789876-543",
  specifications: [
    { name: "Material", value: "Stainless Steel" },
    { name: "Weight Capacity", value: "440 lbs" },
    { name: "Warranty", value: "Lifetime Limited" }
  ],
  downloads: [
    { name: "Product Manual", image: "https://via.placeholder.com/100x140?text=PDF", url: "#" },
    { name: "Spec Sheet", image: "https://via.placeholder.com/100x140?text=PDF", url: "#" }
  ]
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="p-10 text-left">
        <ProductTabs data={mockSpecificationData} />
      </div>

    </>
  )
}


export default App
