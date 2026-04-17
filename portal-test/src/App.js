function App() {
  console.log(`https://test-dashboard.paisasmart.com/`)
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="https://81e3-2401-4900-1c2a-1dde-1ce6-a7de-6117-b0db.ngrok-free.app/"
        // src="http://localhost:3000/"

        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        title="Portal"
      />
    </div>
  );
}

export default App;